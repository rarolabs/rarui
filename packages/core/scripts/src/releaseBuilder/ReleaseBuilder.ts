import path from "path";
import glob from "glob";
import { PackageBuilder } from "@rarui/scripts/src";
import { execSync } from "child_process";
import * as fs from "fs";

type Assets = {
  links: {
    name: string;
    url: string;
    link_type: string;
  }[];
};

type ProcessedPackage = {
  package: string;
  description: string;
  version: string;
  tagName: string;
  assets: Assets;
};

type WorkspaceInfo = {
  location: string;
  name: string;
};

class WorkspaceManager {
  private workspaces: WorkspaceInfo[] = [];

  constructor() {
    this.loadWorkspaces();
  }

  private loadWorkspaces() {
    const workspacesJson = execSync("yarn workspaces list --json")
      .toString()
      .trim()
      .split("\n");
    this.workspaces = workspacesJson.map((line) => JSON.parse(line));
  }

  public getWorkspaceLocation(packageName: string): string {
    const workspace = this.workspaces.find((w) => w.name === packageName);
    if (!workspace) {
      throw new Error(`Workspace not found for package ${packageName}`);
    }
    return workspace.location;
  }
}

class ChangeLogManager {
  private workspaceManager: WorkspaceManager;

  constructor(workspaceManager: WorkspaceManager) {
    this.workspaceManager = workspaceManager;
  }

  public getChangeLogPath(packageName: string): string {
    const workspaceLocation =
      this.workspaceManager.getWorkspaceLocation(packageName);
    const changeLogPath = path.join(workspaceLocation, "CHANGELOG.md");

    if (fs.existsSync(changeLogPath)) {
      return changeLogPath;
    }

    throw new Error(`CHANGELOG.md not found for package ${packageName}`);
  }

  public getDescription(changelogPath: string, packageName: string): string {
    const diffLog = this.getDifflog(changelogPath, packageName);
    return this.proccessDifflog(diffLog);
  }

  private getDifflog(changelogPath: string, packageName: string): string {
    try {
      const diffCommand = `git diff main..HEAD -- ${changelogPath}`;

      const diffLog = execSync(diffCommand).toString();
      if (!diffLog) {
        throw new Error(`No changes detected in ${packageName} changelog`);
      }
      return diffLog;
    } catch (error: any) {
      throw new Error(`Error executing git diff command: ${error.message}`);
    }
  }

  private proccessDifflog(diffLog: string): string {
    let shouldIncludeLine = false;
    let description = "";
    diffLog.split("\n").forEach((line) => {
      if (line.startsWith("@@")) {
        shouldIncludeLine = true;
        return;
      }
      if (line.startsWith("+") && shouldIncludeLine) {
        description = description + `${line.slice(1)}` + "\n";
      }
    });
    return description.trim();
  }
}

class PackageProcessor {
  private changeLogManager: ChangeLogManager;

  constructor(changeLogManager: ChangeLogManager) {
    this.changeLogManager = changeLogManager;
  }

  public processPackages(packages: string[]): ProcessedPackage[] {
    return packages.map((packageName) => {
      const changelogPath = this.changeLogManager.getChangeLogPath(packageName);
      const description = this.changeLogManager.getDescription(
        changelogPath,
        packageName,
      );
      const version = this.getVersion(description, packageName);

      const formattedPackageName = this.formatPackageName(packageName);

      console.log(`Creating release archery for ${packageName}`);

      return {
        package: `${formattedPackageName} ${version}`,
        description,
        version,
        tagName: `${formattedPackageName.startsWith("@") ? formattedPackageName.slice(1) : formattedPackageName}-${version}`,
        assets: {
          links: [
            {
              name: "npm",
              url: `https://www.npmjs.com/package/${formattedPackageName}`,
              link_type: "package",
            },
          ],
        },
      };
    });
  }

  private getVersion(description: string, packageName: string): string {
    const version = description.match(/\b\d+\.\d+\.\d+\b/);
    if (!version) {
      throw new Error(`Invalid version format in ${packageName} changelog`);
    }
    return version[0];
  }

  private formatPackageName(packageName: string): string {
    if (packageName === "@rarui-react") {
      return `${packageName}/components/`;
    }
    return packageName;
  }
}

export class ReleaseBuilder {
  private workspaceManager: WorkspaceManager;
  private changeLogManager: ChangeLogManager;
  private packageProcessor: PackageProcessor;

  constructor() {
    this.workspaceManager = new WorkspaceManager();
    this.changeLogManager = new ChangeLogManager(this.workspaceManager);
    this.packageProcessor = new PackageProcessor(this.changeLogManager);
  }
  public async run() {
    try {
      const packagesToRelease = this.getPackagesToRelease();
      const rootDir = path.resolve(__dirname, "../../../../../");

      const outputFile = path.join(rootDir, "releases.json");
      await fs.promises.writeFile(
        outputFile,
        JSON.stringify(packagesToRelease, null, 2),
      );
      console.log("Releases file created successfully");
    } catch (err: any) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
  }

  private getPackagesToRelease(): ProcessedPackage[] {
    const paths = glob.sync(path.join(".yarn/versions/*.yml"));
    if (!paths.length) {
      console.log("No versions to release");
      process.exit(0);
    }

    const packageBuilder = new PackageBuilder();
    const packages = packageBuilder.getPackagesToBuild(paths[0]);

    return this.packageProcessor.processPackages(packages);
  }
}
