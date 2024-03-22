import { createTheme } from "@vanilla-extract/css";
import tokens from "@rarui/tokens/dist/js/tokens";

import { vars } from "./contract.css";
import { globalTheme } from "./globals.css";

const colors = tokens.color.dark;
const elevation = tokens.elevation.dark;

const darkTheme = {
  ...globalTheme,
  colors: {
    surface: {
      background: colors.surface.background.value,
      brand: colors.surface.brand.value,
      "brand-hover": colors.surface["brand-hover"].value,
      "brand-press": colors.surface["brand-press"].value,
      "brand-secondary": colors.surface["brand-secondary"].value,
      "brand-secondary-hover": colors.surface["brand-secondary-hover"].value,
      "brand-secondary-press": colors.surface["brand-secondary-press"].value,
      "brand-secondary-subdued":
        colors.surface["brand-secondary-subdued"].value,
      "brand-subdued": colors.surface["brand-subdued"].value,
      disabled: colors.surface.disabled.value,
      error: colors.surface.error.value,
      "error-hover": colors.surface["error-hover"].value,
      "error-press": colors.surface["error-press"].value,
      "error-subdued": colors.surface["error-subdued"].value,
      hover: colors.surface.hover.value,
      info: colors.surface.info.value,
      "info-hover": colors.surface["info-hover"].value,
      "info-press": colors.surface["info-press"].value,
      "info-subdued": colors.surface["info-subdued"].value,
      invert: colors.surface.invert.value,
      "invert-disabled": colors.surface["invert-disabled"].value,
      "invert-hover": colors.surface["invert-hover"].value,
      "invert-press": colors.surface["invert-press"].value,
      "invert-secondary": colors.surface["invert-secondary"].value,
      "on-brand-hover": colors.surface["on-brand-hover"].value,
      "on-brand-press": colors.surface["on-brand-press"].value,
      "on-brand-secondary-hover":
        colors.surface["on-brand-secondary-hover"].value,
      "on-brand-secondary-press":
        colors.surface["on-brand-secondary-press"].value,
      "on-error-hover": colors.surface["on-error-hover"].value,
      "on-error-press": colors.surface["on-error-press"].value,
      "on-info-hover": colors.surface["on-info-hover"].value,
      "on-info-press": colors.surface["on-info-press"].value,
      "on-success-hover": colors.surface["on-success-hover"].value,
      "on-success-press": colors.surface["on-success-press"].value,
      "on-warning-hover": colors.surface["on-warning-hover"].value,
      "on-warning-press": colors.surface["on-warning-press"].value,
      overlay: colors.surface.overlay.value,
      press: colors.surface.press.value,
      primary: colors.surface.primary.value,
      secondary: colors.surface.secondary.value,
      success: colors.surface.success.value,
      "success-hover": colors.surface["success-hover"].value,
      "success-press": colors.surface["success-press"].value,
      "success-subdued": colors.surface["success-subdued"].value,
      warning: colors.surface.warning.value,
      "warning-hover": colors.surface["warning-hover"].value,
      "warning-press": colors.surface["warning-press"].value,
      "warning-subdued": colors.surface["warning-subdued"].value,
    },
    content: {
      brand: colors.content.brand.value,
      "brand-alt": colors.content["brand-alt"].value,
      "brand-secondary": colors.content["brand-secondary"].value,
      disabled: colors.content.disabled.value,
      error: colors.content.error.value,
      info: colors.content.info.value,
      invert: colors.content.invert.value,
      "invert-disabled": colors.content["invert-disabled"].value,
      "invert-secondary": colors.content["invert-secondary"].value,
      "on-brand": colors.content["on-brand"].value,
      "on-brand-secondary": colors.content["on-brand-secondary"].value,
      "on-error": colors.content["on-error"].value,
      "on-info": colors.content["on-info"].value,
      "on-success": colors.content["on-success"].value,
      "on-warning": colors.content["on-warning"].value,
      primary: colors.content.primary.value,
      secondary: colors.content.secondary.value,
      success: colors.content.success.value,
      warning: colors.content.warning.value,
      "warning-alt": colors.content["warning-alt"].value,
    },
    border: {
      brand: colors.border.brand.value,
      "brand-alt": colors.border["brand-alt"].value,
      "brand-secondary": colors.border["brand-secondary"].value,
      disabled: colors.border.disabled.value,
      divider: colors.border.divider.value,
      error: colors.border.error.value,
      info: colors.border.info.value,
      invert: colors.border.invert.value,
      "invert-disabled": colors.border["invert-disabled"].value,
      primary: colors.border.primary.value,
      secondary: colors.border.secondary.value,
      subdued: colors.border.subdued.value,
      success: colors.border.success.value,
      warning: colors.border.warning.value,
    },
  },
  elevation: {
    none: elevation.none.value,
    top: {
      "1": elevation.top[1].value,
      "2": elevation.top[2].value,
      "3": elevation.top[3].value,
      "4": elevation.top[4].value,
      "5": elevation.top[5].value,
    },
    bottom: {
      "1": elevation.bottom[1].value,
      "2": elevation.bottom[2].value,
      "3": elevation.bottom[3].value,
      "4": elevation.bottom[4].value,
      "5": elevation.bottom[5].value,
    },
  },
};

export const variables = createTheme(vars, darkTheme);

export default variables;