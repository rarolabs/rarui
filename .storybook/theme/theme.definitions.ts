import { create } from "@storybook/theming/create";
import tokens from "@rarui/tokens/dist/js/tokens";

export const base = {
  brandTitle: "RarUI",
  brandTarget: "_self",
  fontBase: "inter",
};

export const light = create({
  ...base,
  base: "light",
  brandImage: "./static/rarui.svg",
  appBg: tokens.color.light.surface.secondary.value,
  barBg: tokens.color.light.surface.secondary.value,
  appContentBg: tokens.color.light.surface.primary.value,
  appPreviewBg: tokens.color.light.surface.primary.value,
  appBorderColor: tokens.color.light.border.subdued.value,
  textColor: tokens.color.light.content.primary.value,
});

export const dark = create({
  ...base,
  base: "dark",
  brandImage: "./static/rarui_dark.svg",
  appBg: tokens.color.dark.surface.secondary.value,
  barBg: tokens.color.dark.surface.secondary.value,
  appContentBg: tokens.color.dark.surface.primary.value,
  appPreviewBg: tokens.color.dark.surface.primary.value,
  appBorderColor: tokens.color.dark.border.subdued.value,
  textColor: tokens.color.dark.content.primary.value,
});

export default light;
