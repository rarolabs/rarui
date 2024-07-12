import main from "../../../../.storybook/main";
import type { StorybookConfig } from "@storybook/vue3-vite";
import path from "path";

export const convertTsConfigPathsToWebpackAliases = () => {
  const rootDir = path.resolve(__dirname, "../");
  const paths: any = [];

  paths["@rarui/tokens"] = path.join(rootDir, "../../../packages/tokens");
  paths["@rarui/styles"] = path.join(
    rootDir,
    "../../../packages/styles/src/index.ts",
  );
  paths["@rarui/webpack"] = path.join(
    rootDir,
    "../../../packages/core/webpack/src/index.ts",
  );
  return paths;
};

const config: StorybookConfig = {
  staticDirs: [
    {
      from: "../../../../.storybook/static",
      to: "/static",
    },
  ],
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: main.addons,
  docs: main.docs,
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },

  async viteFinal(config) {
    config.build = {
      ...config.build,
      chunkSizeWarningLimit: 1000,
    };
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        ...convertTsConfigPathsToWebpackAliases(),
      },
    };
    config.plugins = config.plugins?.filter(
      (plugin: any) => plugin.name !== "vite:dts",
    );
    return config;
  },
};

export default config;
