import type { StorybookConfig } from "@storybook/react-webpack5";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";

import { convertTsConfigPathsToWebpackAliases } from "./utils";

const config: StorybookConfig = {
  stories: ["./introduction.mdx"],
  refs: {
    react: {
      title: "@rarui-react",
      url: "http://localhost:6007",
    },
    vuejs: {
      title: "@rarui-vuejs",
      url: "http://localhost:6008",
    },
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
    "@storybook/addon-webpack5-compiler-swc",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {},
    },
  },
  staticDirs: [
    {
      from: "./static",
      to: "/static",
    },
  ],
  docs: {
    autodocs: "tag",
  },
  webpackFinal(config) {
    config.plugins?.push(
      new VanillaExtractPlugin({
        identifiers: "debug",
      }),
      new MiniCssExtractPlugin(),
    );
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        ...convertTsConfigPathsToWebpackAliases(),
      },
    };
    return config;
  },
};

export default config;
