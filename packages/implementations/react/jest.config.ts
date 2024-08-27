import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testEnvironment: "jsdom",
  verbose: true,
  moduleNameMapper: {
    // input
    "@rarui-react/button": "<rootDir>/src/input/Button/src",
    "@rarui-react/chip": "<rootDir>/src/input/Chip/src",
    "@rarui-react/checkbox": "<rootDir>/src/input/Checkbox/src",
    "@rarui-react/dropdown": "<rootDir>/src/input/Dropdown/src",
    "@rarui-react/icon-button": "<rootDir>/src/input/IconButton/src",
    "@rarui-react/input": "<rootDir>/src/input/Input/src",
    // core
    "@rarui/typings": "<rootDir>/../../typings/src",
    "@rarui/styles": "<rootDir>/../../styles/src",
    "@rarui/tokens/dist/js/tokens": "<rootDir>/../../tokens/dist/js/tokens.cjs",
    // exhibition
    "@rarui-react/badge": "<rootDir>/src/exhibition/Badge/src",
    "@rarui-react/icon": "<rootDir>/src/exhibition/Icon/src",
    "@rarui-react/title": "<rootDir>/src/exhibition/Title/src",
    "@rarui-react/text": "<rootDir>/src/exhibition/Text/src",
    "@rarui-react/tooltip": "<rootDir>/src/exhibition/Tooltip/src",
    // layout
    "@rarui-react/box": "<rootDir>/src/layout/Box/src",
    // others
    "react-datepicker.css": "<rootDir>/styleMock.ts",
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
  coveragePathIgnorePatterns: ["dist", ".scripts", "packages/typings"],
};
export default config;
