import { create } from "@storybook/theming/create";
import tokens from "@rarui/tokens/dist/js/tokens";

export const base = {
  brandTitle: "RarUI",
  brandTarget: "_self",
  // fontBase:
  //   "Inter, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', arial, sans-serif",
};

export const light = create({ ...base, base: "light" });

export const dark = create({
  ...base,
  base: "dark",
  appBg: tokens.color.dark.surface.secondary.value,
  // barBg: tokens.color.dark.neutral.surface.value,
  barBg: "#222425",
});

export default light;
