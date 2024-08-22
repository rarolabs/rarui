import * as fs from "fs";
import path from "path";

export class ReleaseLauncher {
  private readonly gitlabUrl: string;
  private readonly projectId: number;
  private readonly privateToken: string;

  constructor(gitlabUrl: string, projectId: number, privateToken: string) {
    this.gitlabUrl = gitlabUrl;
    this.projectId = projectId;
    this.privateToken = privateToken;
  }

  // Function to create a release
  async createRelease(
    tagName: string,
    releaseName: string,
    description: string,
    assets: any,
  ) {
    const response = await fetch(
      `${this.gitlabUrl}/api/v4/projects/${this.projectId}/releases?ref=main`,
      {
        method: "POST",
        headers: {
          "PRIVATE-TOKEN": this.privateToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: releaseName,
          tag_name: tagName,
          description: description,
          assets: assets,
        }),
      },
    );

    const data = await response.json();
    if (!response.ok) {
      console.error(`Error creating release: ${JSON.stringify(data)}`);
    } else {
      console.log(`Release created: ${releaseName}`);
    }
  }

  // Path to the JSON file with releases
  private readonly rootdir = path.resolve(__dirname, "../../../../../");

  private readonly releasesFile = path.join(this.rootdir, "releases.json");

  // Read and parse the JSON file
  async launchReleases() {
    fs.readFile(this.releasesFile, "utf8", async (err, data) => {
      if (err) {
        console.error(`Error reading file ${this.releasesFile}:`, err);
        process.exit(1);
      }

      try {
        const releases = JSON.parse(data);
        for (const release of releases) {
          console.log(`Creating release for ${release.package}`);
          await this.createRelease(
            release.tagName,
            release.package,
            release.description,
            release.assets,
          );
        }
      } catch (err) {
        console.error("Error parsing JSON:", err);
        process.exit(1);
      }
    });
  }
}
