import main from "../../../../.storybook/main";
import type { StorybookConfig } from "@storybook/react-webpack5";

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
};

export default config;
