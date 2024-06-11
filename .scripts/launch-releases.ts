import { ReleaseLauncher } from "@rarui/scripts/src";

import { config } from "dotenv";

config();

// GitLab API URL and credentials
const GITLAB_URL = "https://git.rarolabs.com.br";
const PROJECT_ID = 1374;
const PERSONAL_ACCESS_TOKEN = process.env.PERSONAL_ACCESS_TOKEN || "";

if (!PROJECT_ID || !PERSONAL_ACCESS_TOKEN) {
  console.error(
    "PROJECT_ID and PERSONAL_ACCESS_TOKEN environment variables are required.",
  );
  process.exit(1);
}

const releaseManager = new ReleaseLauncher(
  GITLAB_URL,
  PROJECT_ID,
  PERSONAL_ACCESS_TOKEN,
);
releaseManager.launchReleases();
