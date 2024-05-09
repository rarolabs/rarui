import { create } from "@storybook/theming/create";
import tokens from "@rarui/tokens/dist/js/tokens";

export const base = {
  brandTitle: "RarUI",
  brandImage: "./static/logo-raroui.png",
  brandTarget: "_self",
  fontBase: "inter",
};

export const light = create({ ...base, base: "light" });

export const dark = create({
  ...base,
  base: "dark",
  appBg: tokens.color.dark.surface.secondary.value,
  barBg: "#222425",
});

export default light;
