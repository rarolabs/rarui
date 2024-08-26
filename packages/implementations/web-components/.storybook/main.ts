import main, { webpackAlias } from "../../../../.storybook/main";
import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  staticDirs: [
    {
      from: "../../../../.storybook/static",
      to: "/static",
    },
  ],
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    ...(main?.addons ?? []),
    {
      name: "storybook-addon-stencil",
      options: {
        stencilOptions: {},
      },
    },
  ],
  docs: main.docs,
  framework: {
    name: "@storybook/web-components-vite",
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
        ...webpackAlias,
      },
    };
    return config;
  },
};
export default config;
