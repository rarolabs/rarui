import type { StorybookConfig } from "@storybook/vue3-vite";
import path from "path";

export const convertTsConfigPathsToWebpackAliases = () => {
  const rootDir = path.resolve(__dirname, "../");
  const paths = [];

  paths["@rarui/tokens"] = path.join(rootDir, "../../../packages/tokens");
  paths["@rarui/styles"] = path.join(
    rootDir,
    "../../../packages/styles/src/index.ts",
  );
  paths["@rarui/webpack"] = path.join(
    rootDir,
    "../../../packages/core/webpack/src/index.ts",
  );

  console.log("paths", paths);
  return paths;
};

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/*/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, options) {
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
