import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testEnvironment: "jsdom",
  verbose: true,
  moduleNameMapper: {
    // core
    "@rarui/typings": "<rootDir>/packages/core/typings/src",
    "@rarui/webpack": "<rootDir>/packages/core/webpack/src",
    // commons
    "@rarui/styles": "<rootDir>/packages/styles/src",
    // atomics
    "@rarui-react/button": "<rootDir>/packages/react/src/atomics/Button/src",
    // composites
  },
  transform: {
    "^.+\\.css\\.ts$": "babel-jest",
    ".+\\.(ts|tsx)$": "ts-jest",
  },
  coveragePathIgnorePatterns: ["dist", ".scripts", "packages/core/typings"],
};
export default config;
