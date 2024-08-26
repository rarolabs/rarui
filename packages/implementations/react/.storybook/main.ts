import path from "path";
import type { StorybookConfig } from "@storybook/react-webpack5";
import main, {
  convertTsConfigPathsToWebpackAliases,
  webpackPlugins,
} from "../../../../.storybook/main";
import tsconfig from "../tsconfig.json";

const config: StorybookConfig = {
  ...main,
  staticDirs: [
    {
      from: "../../../../.storybook/static",
      to: "/static",
    },
  ],
  stories: ["../src/*/**/*.stories.@(js|jsx|ts|tsx)"],
  refs: {},
  webpackFinal(config) {
    config.plugins?.push(...webpackPlugins);
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        ...convertTsConfigPathsToWebpackAliases(
          path.resolve(__dirname, "../../../../"),
          Object.entries(tsconfig.compilerOptions.paths),
        ),
      },
    };
    return config;
  },
};

export default config;
