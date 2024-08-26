import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "node",
  moduleNameMapper: {
    // commons
    "@rarui/tokens/dist/js/tokens": "<rootDir>/../tokens/dist/js/tokens.cjs",
  },
  transform: {
    "^.+\\.css\\.ts$": "babel-jest",
    ".+\\.(ts|tsx)$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
};
export default config;
