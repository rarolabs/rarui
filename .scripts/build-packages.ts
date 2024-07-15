import path from "path";
import glob from "glob";
import * as dotenv from "dotenv";
import { PackageBuilder } from "@rarui/scripts/src";

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

try {
  const paths = glob.sync(path.join(".yarn/versions/*.yml"));
  if (!paths.length) {
    throw new Error(
      "The versions file was not found so it was not possible to perform the build...",
    );
  }

  const packageBuilder = new PackageBuilder();
  const packagesToBuild = packageBuilder.getPackagesToBuild(paths[0]);
  const raruiHelper = packagesToBuild.find(
    (packageToBuild) => packageToBuild === "rarui-helper",
  );

  if (raruiHelper) {
    packageBuilder.triggerBuildGitlabCi(
      "https://git.rarolabs.com.br/api/v4/projects/1374/trigger/pipeline",
      {
        ref: "main",
        token: `${process.env.TRIGGER_TOKEN}`,
        "variables[TRIGGER_JOB]": "deploy-rarui-helper",
      },
    );
  }

  const removePackages = [
    "@rarui/design-system",
    "@rarui/webpack",
    "rarui-helper",
  ];

  const command = packageBuilder.getCommmandBuildNPM(
    packagesToBuild,
    removePackages,
  );
  packageBuilder.execCommand(command);
} catch (err) {
  console.error(`\x1b[33m ${err.message} \x1b[0m`);
  process.exit(1);
}
