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
    "@rarui-react/box":
      "<rootDir>/packages/implementations/react/src/atomic/Box/src",
    "@rarui-react/button":
      "<rootDir>/packages/implementations/react/src/atomic/Button/src",
    "@rarui-react/link":
      "<rootDir>/packages/implementations/react/src/atomic/Link/src",
    "@rarui-react/text":
      "<rootDir>/packages/implementations/react/src/atomic/Text/src",
    "@rarui-react/icon":
      "<rootDir>/packages/implementations/react/src/atomic/Icon/src",
    // composites
  },
  transform: {
    "^.+\\.css\\.ts$": "babel-jest",
    ".+\\.(ts|tsx)$": "ts-jest",
  },
  coveragePathIgnorePatterns: ["dist", ".scripts", "packages/core/typings"],
};
export default config;
