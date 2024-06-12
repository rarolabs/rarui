import path from "path";
import glob from "glob";
import { PackageBuilder } from "@rarui/scripts/src";
import { execSync } from "child_process";
import { pascalCase } from "change-case";
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

export class ReleaseBuilder {
  private breakPackageName(packageName: string) {
    if (packageName.indexOf("-") === -1) return packageName.split("/")[1];
    console.log({ packageName });
    const folders = packageName.split("@rarui-")[1].split("/");
    folders[1] = pascalCase(folders[1]);
    return folders.join("/**/").replace("/Components", "");
  }

  private getChangeLogPath(packageName: string): string {
    const packageFolderName = this.breakPackageName(packageName);

    const changeLogPath = glob.sync(
      path.join(`packages/**/${packageFolderName}/CHANGELOG.md`),
    );
    if (changeLogPath.length > 0) {
      return changeLogPath[0];
    }
    return "";
  }

  private getVersion(description: string, packageName: string) {
    const version = description.match(/\b\d+\.\d+\.\d+\b/);
    if (!version) {
      console.error(
        `Invalid version format. Please check the ${packageName} changelog file and commit the changes`,
      );
      process.exit(1);
    }

    return version[0];
  }

  private getDifflog(changelogPath: string, packageName: string) {
    try {
      const diffCommand = `git diff main..HEAD -- ${changelogPath}`;
      const diffLog = execSync(diffCommand).toString();
      if (!diffLog) {
        console.error(
          `Please make sure you added your changes to ${packageName} changelog file and committed the file`,
        );
        process.exit(1);
      }
      return diffLog;
    } catch (error) {
      console.error(`Error executing git diff command: ${error}`);
      return "";
    }
  }

  private proccessDifflog(diffLog: string) {
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
  private getDescription(changelogPath: string, packageName: string) {
    const diffLog = this.getDifflog(changelogPath, packageName);
    return this.proccessDifflog(diffLog);
  }

  private processPackages(packages: string[]): ProcessedPackage[] {
    return packages.map((packageName) => {
      const changelogPath = this.getChangeLogPath(packageName);
      const description = this.getDescription(changelogPath, packageName);
      const _packageName =
        packageName === "@rarui-react" || packageName === "vuejs"
          ? `${packageName}/components/`
          : packageName;
      const version = this.getVersion(description, packageName);
      return {
        package: `${_packageName} ${version}`,
        description,
        version,
        tagName: `${_packageName.slice(1)}-${version}`,
        assets: {
          links: [
            {
              name: "npm",
              url: `https://www.npmjs.com/package/${_packageName}`,
              link_type: "package",
            },
          ],
        },
      };
    });
  }

  private getPackagesToRelease() {
    try {
      const paths = glob.sync(path.join(".yarn/versions/*.yml"));
      if (!paths.length) {
        console.log("no versions to release");
        process.exit(0);
      }

      const packageBuilder = new PackageBuilder();
      const packages = packageBuilder.getPackagesToBuild(paths[0]);
      return this.processPackages(packages);
    } catch (err) {
      console.error(`\x1b[33m ${(err as Error).message} \x1b[0m`);
      process.exit(1);
    }
  }

  public run() {
    try {
      const packagesToRelease = this.getPackagesToRelease();
      const rootDir = path.resolve(__dirname, "../../../../../");

      console.log("Creating releases...");

      const outputFile = path.join(rootDir, "releases.json");
      fs.writeFile(outputFile, JSON.stringify(packagesToRelease), (err) => {
        if (err) console.error(err);
      });
      console.log("Releases file created successfully");
    } catch (err) {
      console.error(`\x1b[33m ${(err as Error).message} \x1b[0m`);
      process.exit(1);
    }
  }
}
