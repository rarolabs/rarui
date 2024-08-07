import { dirname, join } from "path";
import type { StorybookConfig } from "@storybook/react-webpack5";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import "dotenv/config";

import { convertTsConfigPathsToWebpackAliases } from "./utils";

export const tsPaths = convertTsConfigPathsToWebpackAliases();

const config: StorybookConfig = {
  stories: ["./introduction.mdx"],
  refs: {
    react: {
      title: "@rarui-react",
      url: process.env.STORYBOOK_REACT_URL ?? "",
    },
    vuejs: {
      title: "@rarui-web-components",
      url: process.env.STORYBOOK_WEB_COMPONENTS_URL ?? "",
    },
  },
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("storybook-dark-mode"),
    getAbsolutePath("@storybook/addon-webpack5-compiler-swc"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
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
  docs: {},
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
        ...tsPaths,
      },
    };
    return config;
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
