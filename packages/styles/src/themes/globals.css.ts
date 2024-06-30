import { createGlobalTheme } from "@vanilla-extract/css";
import tokens from "@rarui/tokens/dist/js/tokens";

import { vars } from "./contract.css";

const colors = tokens.color.light;
const elevation = tokens.elevation.light;
const fontFamily = tokens.font.family;
const fontSize = tokens.font.size;
const fontWeight = tokens.font.weight;
const lineHeight = tokens.line.height;
const { spacing, breakpoint, zIndex, shape } = tokens;

export const globalTheme = {
  colors: {
    surface: {
      background: colors.surface.background.value,
      brand: colors.surface.brand.value,
      "brand-hover": colors.surface["brand-hover"].value,
      "brand-press": colors.surface["brand-press"].value,
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
      disabled: colors.content.disabled.value,
      error: colors.content.error.value,
      info: colors.content.info.value,
      invert: colors.content.invert.value,
      "invert-disabled": colors.content["invert-disabled"].value,
      "invert-secondary": colors.content["invert-secondary"].value,
      "on-brand": colors.content["on-brand"].value,
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
  fontFamily: {
    base: fontFamily.base.value,
  },
  fontSize: {
    hero: fontSize.hero.value,
    body: {
      xxs: fontSize.body.xxs.value,
      xs: fontSize.body.xs.value,
      s: fontSize.body.s.value,
      m: fontSize.body.m.value,
      l: fontSize.body.l.value,
      xl: fontSize.body.xl.value,
    },
    heading: {
      xs: fontSize.heading.xs.value,
      s: fontSize.heading.s.value,
      m: fontSize.heading.m.value,
      l: fontSize.heading.l.value,
      xl: fontSize.heading.xl.value,
    },
    button: {
      xs: fontSize.button.xs.value,
      s: fontSize.button.s.value,
      m: fontSize.button.m.value,
      l: fontSize.button.l.value,
    },
    label: {
      s: fontSize.label.s.value,
      m: fontSize.label.m.value,
      l: fontSize.label.l.value,
    },
  },
  fontWeight: {
    regular: fontWeight.regular.value,
    medium: fontWeight.medium.value,
    semiBold: fontWeight["semi-bold"].value,
    bold: fontWeight.bold.value,
  },
  lineHeight: {
    hero: lineHeight.hero.value,
    body: {
      xxs: lineHeight.body.xxs.value,
      xs: lineHeight.body.xs.value,
      s: lineHeight.body.s.value,
      m: lineHeight.body.m.value,
      l: lineHeight.body.l.value,
      xl: lineHeight.body.xl.value,
    },
    heading: {
      xs: lineHeight.heading.xs.value,
      s: lineHeight.heading.s.value,
      m: lineHeight.heading.m.value,
      l: lineHeight.heading.l.value,
      xl: lineHeight.heading.xl.value,
    },
    button: {
      s: lineHeight.button.s.value,
      m: lineHeight.button.m.value,
      l: lineHeight.button.l.value,
    },
    label: {
      s: lineHeight.label.s.value,
      m: lineHeight.label.m.value,
      l: lineHeight.label.l.value,
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
  shape: {
    border: {
      radius: {
        none: shape.border.radius.none.value,
        "2xs": shape.border.radius["2xs"].value,
        xs: shape.border.radius.xs.value,
        sm: shape.border.radius.sm.value,
        md: shape.border.radius.md.value,
        lg: shape.border.radius.lg.value,
        xl: shape.border.radius.xl.value,
        "2xl": shape.border.radius["2xl"].value,
        pill: shape.border.radius.pill.value,
        button: shape.border.radius.button.value,
        input: shape.border.radius.input.value,
      },
      width: {
        "1": shape.border.width[1].value,
        "2": shape.border.width[2].value,
        "3": shape.border.width[3].value,
        "4": shape.border.width[4].value,
        "5": shape.border.width[5].value,
      },
    },
  },
  spacing: {
    "4xs": spacing["4xs"].value,
    "3xs": spacing["3xs"].value,
    "2xs": spacing["2xs"].value,
    xs: spacing.xs.value,
    s: spacing.s.value,
    md: spacing.md.value,
    lg: spacing.lg.value,
    xl: spacing.xl.value,
    "2xl": spacing["2xl"].value,
    "3xl": spacing["3xl"].value,
    "4xl": spacing["4xl"].value,
    "5xl": spacing["5xl"].value,
    "6xl": spacing["6xl"].value,
    "7xl": spacing["7xl"].value,
    "8xl": spacing["8xl"].value,
  },
  zIndex: {
    100: zIndex[100].value,
    200: zIndex[200].value,
    300: zIndex[300].value,
    400: zIndex[400].value,
    500: zIndex[500].value,
    600: zIndex[600].value,
    700: zIndex[700].value,
    800: zIndex[800].value,
    900: zIndex[900].value,
  },
  breakpoint: {
    xs: breakpoint.xs.value,
    md: breakpoint.md.value,
    lg: breakpoint.lg.value,
    xl: breakpoint.xl.value,
  },
  utils: {
    "focus-ring": colors.border["focus-ring"].value,
  },
};

createGlobalTheme(":root", vars, globalTheme);

export const varsThemeBase = vars;
