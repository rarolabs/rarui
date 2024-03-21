import { varsThemeBase } from "../../../themes";

export const buttonOutlined = {
  brand: {
    ":hover": {
      backgroundColor: varsThemeBase.colors.surface["brand-hover"],
    },
    ":active": {
      backgroundColor: varsThemeBase.colors.surface["brand-press"],
    },
    color: varsThemeBase.colors.content.brand,
  },
  "brand-secondary": {
    ":hover": {
      backgroundColor: varsThemeBase.colors.surface["brand-secondary-hover"],
    },
    ":active": {
      backgroundColor: varsThemeBase.colors.surface["brand-secondary-press"],
    },
    color: varsThemeBase.colors.content["brand-secondary"],
  },
  danger: {
    ":hover": {
      backgroundColor: varsThemeBase.colors.surface["error-hover"],
    },
    ":active": {
      backgroundColor: varsThemeBase.colors.surface["error-press"],
    },
    color: varsThemeBase.colors.content.error,
  },
  success: {
    ":hover": {
      backgroundColor: varsThemeBase.colors.surface["success-hover"],
    },
    ":active": {
      backgroundColor: varsThemeBase.colors.surface["success-press"],
    },
    color: varsThemeBase.colors.content.success,
  },
  warning: {
    ":hover": {
      backgroundColor: varsThemeBase.colors.surface["warning-hover"],
    },
    ":active": {
      backgroundColor: varsThemeBase.colors.surface["warning-press"],
    },
    color: varsThemeBase.colors.content.warning,
  },
  neutral: {
    ":hover": {
      backgroundColor: varsThemeBase.colors.surface.hover,
    },
    ":active": {
      backgroundColor: varsThemeBase.colors.surface.press,
    },
    color: varsThemeBase.colors.content.primary,
  },
  inverted: {
    ":hover": {
      backgroundColor: varsThemeBase.colors.surface["invert-hover"],
    },
    ":active": {
      backgroundColor: varsThemeBase.colors.surface["invert-press"],
    },
    color: varsThemeBase.colors.content.invert,
  },
};

export const buttonText = {
  brand: buttonOutlined.brand,
  "brand-secondary": buttonOutlined["brand-secondary"],
  danger: buttonOutlined.danger,
  success: buttonOutlined.success,
  warning: buttonOutlined.warning,
  neutral: buttonOutlined.neutral,
  inverted: buttonOutlined.inverted,
};

export const buttonVariants = {
  outlined: buttonOutlined,
  text: buttonText,
};
