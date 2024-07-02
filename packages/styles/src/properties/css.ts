import { varsThemeBase } from "../themes";

export const shadowProperties = {
  none: varsThemeBase.elevation.none,
  "top-1": varsThemeBase.elevation.top[1],
  "top-2": varsThemeBase.elevation.top[2],
  "top-3": varsThemeBase.elevation.top[3],
  "top-4": varsThemeBase.elevation.top[4],
  "top-5": varsThemeBase.elevation.top[5],
  "bottom-1": varsThemeBase.elevation.bottom[1],
  "bottom-2": varsThemeBase.elevation.bottom[2],
  "bottom-3": varsThemeBase.elevation.bottom[3],
  "bottom-4": varsThemeBase.elevation.bottom[4],
  "bottom-5": varsThemeBase.elevation.bottom[5],
};

export const fontWeightProperties = {
  regular: varsThemeBase.fontWeight.regular,
  medium: varsThemeBase.fontWeight.medium,
  semiBold: varsThemeBase.fontWeight.semiBold,
  bold: varsThemeBase.fontWeight.bold,
};

export const fontSizeProperties = {
  hero: varsThemeBase.fontSize.hero,
  "body-xxs": varsThemeBase.fontSize.body.xxs,
  "body-xs": varsThemeBase.fontSize.body.xs,
  "body-s": varsThemeBase.fontSize.body.s,
  "body-m": varsThemeBase.fontSize.body.m,
  "body-l": varsThemeBase.fontSize.body.l,
  "body-xl": varsThemeBase.fontSize.body.xl,
  "heading-xs": varsThemeBase.fontSize.heading.xs,
  "heading-s": varsThemeBase.fontSize.heading.s,
  "heading-m": varsThemeBase.fontSize.heading.m,
  "heading-l": varsThemeBase.fontSize.heading.l,
  "heading-xl": varsThemeBase.fontSize.heading.xl,
  "button-s": varsThemeBase.fontSize.button.s,
  "button-m": varsThemeBase.fontSize.button.m,
  "button-l": varsThemeBase.fontSize.button.l,
  "label-s": varsThemeBase.fontSize.label.s,
  "label-m": varsThemeBase.fontSize.label.m,
  "label-l": varsThemeBase.fontSize.label.l,
};

export const fontFamilyProperties = {
  body: varsThemeBase.fontFamily.body,
  heading: varsThemeBase.fontFamily.heading,
  button: varsThemeBase.fontFamily.button,
};

export const lineHeightProperties = {
  hero: varsThemeBase.lineHeight.hero,
  "body-xxs": varsThemeBase.lineHeight.body.xxs,
  "body-xs": varsThemeBase.lineHeight.body.xs,
  "body-s": varsThemeBase.lineHeight.body.s,
  "body-m": varsThemeBase.lineHeight.body.m,
  "body-l": varsThemeBase.lineHeight.body.l,
  "body-xl": varsThemeBase.lineHeight.body.xl,
  "heading-xs": varsThemeBase.lineHeight.heading.xs,
  "heading-s": varsThemeBase.lineHeight.heading.s,
  "heading-m": varsThemeBase.lineHeight.heading.m,
  "heading-l": varsThemeBase.lineHeight.heading.l,
  "heading-xl": varsThemeBase.lineHeight.heading.xl,
  "button-s": varsThemeBase.lineHeight.button.s,
  "button-m": varsThemeBase.lineHeight.button.m,
  "button-l": varsThemeBase.lineHeight.button.l,
  "label-s": varsThemeBase.lineHeight.label.s,
  "label-m": varsThemeBase.lineHeight.label.m,
  "label-l": varsThemeBase.lineHeight.label.l,
} as const;

export const titleFontSizeProperties = {
  hero: varsThemeBase.fontSize.hero,
  xs: varsThemeBase.fontSize.heading.xs,
  s: varsThemeBase.fontSize.heading.s,
  m: varsThemeBase.fontSize.heading.m,
  l: varsThemeBase.fontSize.heading.l,
  xl: varsThemeBase.fontSize.heading.xl,
};

export const titleLineHeightProperties = {
  hero: varsThemeBase.lineHeight.hero,
  xs: varsThemeBase.lineHeight.heading.xs,
  s: varsThemeBase.lineHeight.heading.s,
  m: varsThemeBase.lineHeight.heading.m,
  l: varsThemeBase.lineHeight.heading.l,
  xl: varsThemeBase.lineHeight.heading.xl,
};

export const spacingProperties = {
  none: "0",
  "4xs": varsThemeBase.spacing["4xs"],
  "3xs": varsThemeBase.spacing["3xs"],
  "2xs": varsThemeBase.spacing["2xs"],
  xs: varsThemeBase.spacing.xs,
  s: varsThemeBase.spacing.s,
  md: varsThemeBase.spacing.md,
  lg: varsThemeBase.spacing.lg,
  xl: varsThemeBase.spacing.xl,
  "2xl": varsThemeBase.spacing["2xl"],
  "3xl": varsThemeBase.spacing["3xl"],
  "4xl": varsThemeBase.spacing["4xl"],
  "5xl": varsThemeBase.spacing["5xl"],
  "6xl": varsThemeBase.spacing["6xl"],
  "7xl": varsThemeBase.spacing["7xl"],
  "8xl": varsThemeBase.spacing["8xl"],
} as const;

export const marginProperties = {
  auto: "auto",
  ...spacingProperties,
};

export const borderRadiusProperties = {
  none: varsThemeBase.shape.border.radius.none,
  "2xs": varsThemeBase.shape.border.radius["2xs"],
  xs: varsThemeBase.shape.border.radius.xs,
  sm: varsThemeBase.shape.border.radius.sm,
  md: varsThemeBase.shape.border.radius.md,
  lg: varsThemeBase.shape.border.radius.lg,
  xl: varsThemeBase.shape.border.radius.xl,
  "2xl": varsThemeBase.shape.border.radius["2xl"],
  pill: varsThemeBase.shape.border.radius.pill,
  button: varsThemeBase.shape.border.radius.button,
  input: varsThemeBase.shape.border.radius.input,
};

export const borderWidthProperties = {
  none: "0",
  "1": varsThemeBase.shape.border.width[1],
  "2": varsThemeBase.shape.border.width[2],
  "3": varsThemeBase.shape.border.width[3],
  "4": varsThemeBase.shape.border.width[4],
  "5": varsThemeBase.shape.border.width[5],
};

export const zIndexProperties = {
  "100": varsThemeBase.zIndex[100],
  "200": varsThemeBase.zIndex[200],
  "300": varsThemeBase.zIndex[300],
  "400": varsThemeBase.zIndex[400],
  "500": varsThemeBase.zIndex[500],
  "600": varsThemeBase.zIndex[600],
  "700": varsThemeBase.zIndex[700],
  "800": varsThemeBase.zIndex[800],
  "900": varsThemeBase.zIndex[900],
};

export const colorProperties = {
  currentColor: "currentColor",
  brand: varsThemeBase.colors.content.brand,
  "brand-alt": varsThemeBase.colors.content["brand-alt"],
  disabled: varsThemeBase.colors.content.disabled,
  error: varsThemeBase.colors.content.error,
  info: varsThemeBase.colors.content.info,
  invert: varsThemeBase.colors.content.invert,
  "invert-disabled": varsThemeBase.colors.content["invert-disabled"],
  "invert-secondary": varsThemeBase.colors.content["invert-secondary"],
  "on-brand": varsThemeBase.colors.content["on-brand"],
  "on-error": varsThemeBase.colors.content["on-error"],
  "on-info": varsThemeBase.colors.content["on-info"],
  "on-success": varsThemeBase.colors.content["on-success"],
  "on-warning": varsThemeBase.colors.content["on-warning"],
  primary: varsThemeBase.colors.content.primary,
  secondary: varsThemeBase.colors.content.secondary,
  success: varsThemeBase.colors.content.success,
  warning: varsThemeBase.colors.content.warning,
  "warning-alt": varsThemeBase.colors.content["warning-alt"],
};

export const borderColorProperties = {
  transparent: "transparent",
  brand: varsThemeBase.colors.border.brand,
  "brand-alt": varsThemeBase.colors.border["brand-alt"],
  disabled: varsThemeBase.colors.border.disabled,
  divider: varsThemeBase.colors.border.divider,
  error: varsThemeBase.colors.border.error,
  info: varsThemeBase.colors.border.info,
  invert: varsThemeBase.colors.border.invert,
  "invert-disabled": varsThemeBase.colors.border["invert-disabled"],
  primary: varsThemeBase.colors.border.primary,
  secondary: varsThemeBase.colors.border.secondary,
  subdued: varsThemeBase.colors.border.subdued,
  success: varsThemeBase.colors.border.success,
  warning: varsThemeBase.colors.border.warning,
};

export const backgroundColorProperties = {
  transparent: "transparent",
  background: varsThemeBase.colors.surface.background,
  brand: varsThemeBase.colors.surface.brand,
  "brand-hover": varsThemeBase.colors.surface["brand-hover"],
  "brand-press": varsThemeBase.colors.surface["brand-press"],
  "brand-subdued": varsThemeBase.colors.surface["brand-subdued"],
  disabled: varsThemeBase.colors.surface.disabled,
  error: varsThemeBase.colors.surface.error,
  "error-hover": varsThemeBase.colors.surface["error-hover"],
  "error-press": varsThemeBase.colors.surface["error-press"],
  "error-subdued": varsThemeBase.colors.surface["error-subdued"],
  hover: varsThemeBase.colors.surface.hover,
  info: varsThemeBase.colors.surface.info,
  "info-hover": varsThemeBase.colors.surface["info-hover"],
  "info-press": varsThemeBase.colors.surface["info-press"],
  "info-subdued": varsThemeBase.colors.surface["info-subdued"],
  invert: varsThemeBase.colors.surface.invert,
  "invert-disabled": varsThemeBase.colors.surface["invert-disabled"],
  "invert-hover": varsThemeBase.colors.surface["invert-hover"],
  "invert-press": varsThemeBase.colors.surface["invert-press"],
  "invert-secondary": varsThemeBase.colors.surface["invert-secondary"],
  overlay: varsThemeBase.colors.surface.overlay,
  press: varsThemeBase.colors.surface.press,
  primary: varsThemeBase.colors.surface.primary,
  secondary: varsThemeBase.colors.surface.secondary,
  success: varsThemeBase.colors.surface.success,
  "success-hover": varsThemeBase.colors.surface["success-hover"],
  "success-press": varsThemeBase.colors.surface["success-press"],
  "success-subdued": varsThemeBase.colors.surface["success-subdued"],
  warning: varsThemeBase.colors.surface.warning,
  "warning-hover": varsThemeBase.colors.surface["warning-hover"],
  "warning-press": varsThemeBase.colors.surface["warning-press"],
  "warning-subdued": varsThemeBase.colors.surface["warning-subdued"],
};
