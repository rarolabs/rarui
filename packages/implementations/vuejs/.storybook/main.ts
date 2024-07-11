import main from "../../../../.storybook/main";
import type { StorybookConfig } from "@storybook/vue3-vite";
import path from "path";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
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
    config.optimizeDeps?.esbuildOptions?.plugins?.push(
      esbuildCommonjs(["@rarui/tokens"]),
    );
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        ...convertTsConfigPathsToWebpackAliases(),
      },
    };
    console.log(config);
    return config;
  },
};

export default config;
