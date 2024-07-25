import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testEnvironment: "jsdom",
  verbose: true,
  moduleNameMapper: {
    "react-datepicker.css": "<rootDir>/styleMock.ts",
    // core
    "@rarui/typings": "<rootDir>/packages/core/typings/src",
    "@rarui/webpack": "<rootDir>/packages/core/webpack/src",
    // commons
    "@rarui/styles": "<rootDir>/packages/styles/src",
    "@rarui/tokens/dist/js/tokens":
      "<rootDir>/packages/tokens/dist/js/tokens.cjs",
    // atomics
    "@rarui-react/avatar":
      "<rootDir>/packages/implementations/react/src/atomic/Avatar/src",
    "@rarui-react/badge":
      "<rootDir>/packages/implementations/react/src/atomic/Badge/src",
    "@rarui-react/box":
      "<rootDir>/packages/implementations/react/src/atomic/Box/src",
    "@rarui-react/button":
      "<rootDir>/packages/implementations/react/src/atomic/Button/src",
    "@rarui-react/chip":
      "<rootDir>/packages/implementations/react/src/atomic/Chip/src",
    "@rarui-react/checkbox":
      "<rootDir>/packages/implementations/react/src/atomic/Checkbox/src",
    "@rarui-react/link":
      "<rootDir>/packages/implementations/react/src/atomic/Link/src",
    "@rarui-react/text":
      "<rootDir>/packages/implementations/react/src/atomic/Text/src",
    "@rarui-react/icon-button":
      "<rootDir>/packages/implementations/react/src/atomic/IconButton/src",
    "@rarui-react/input":
      "<rootDir>/packages/implementations/react/src/atomic/Input/src",
    "@rarui-react/icon":
      "<rootDir>/packages/implementations/react/src/atomic/Icon/src",
    "@rarui-react/divider":
      "<rootDir>/packages/implementations/react/src/atomic/Divider/src",
    "@rarui-react/title":
      "<rootDir>/packages/implementations/react/src/atomic/Title/src",
    "@rarui-react/tooltip":
      "<rootDir>/packages/implementations/react/src/atomic/Tooltip/src",
    // composites
    "@rarui-react/dropdown":
      "<rootDir>/packages/implementations/react/src/composite/Dropdown/src",
    "@rarui-react/datepicker":
      "<rootDir>/packages/implementations/react/src/composite/Datepicker/src",
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
  coveragePathIgnorePatterns: ["dist", ".scripts", "packages/core/typings"],
};
export default config;
