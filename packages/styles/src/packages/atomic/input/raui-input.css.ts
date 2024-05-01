import { recipe } from "@vanilla-extract/recipes";
import { globalStyle } from "@vanilla-extract/css";
import { varsThemeBase } from "../../../themes";

const container = recipe({
  base: {
    display: "flex",
    alignItems: "stretch",
    position: "relative",
    width: "100%",
    overflow: "hidden",
    borderStyle: "solid",
    transition: "all 150ms ease",
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    borderWidth: varsThemeBase.shape.border.width[1],
    borderColor: varsThemeBase.colors.border.secondary,
    ":hover": {
      borderColor: varsThemeBase.colors.border.primary,
    },
    ":focus": {
      borderColor: varsThemeBase.colors.border.primary,
    },
    selectors: {
      "&:has(input:disabled)": {
        borderColor: varsThemeBase.colors.surface.disabled,
      },
    },
  },
  variants: {
    appearance: {
      success: {
        borderColor: varsThemeBase.colors.border.success,
        ":hover": {
          borderColor: varsThemeBase.colors.border.success,
        },
        ":focus": {
          borderColor: varsThemeBase.colors.border.success,
        },
      },
      error: {
        borderColor: varsThemeBase.colors.border.error,
        ":hover": {
          borderColor: varsThemeBase.colors.border.error,
        },
        ":focus": {
          borderColor: varsThemeBase.colors.border.error,
        },
      },
    },
  },
});

const input = recipe({
  base: {
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    border: "none",
    padding: varsThemeBase.spacing["3xs"],
    fontFamily: varsThemeBase.fontFamily.inter,
    backgroundColor: varsThemeBase.colors.surface.primary,
    color: varsThemeBase.colors.content.primary,
    ":focus-within": {
      outline: "none",
      boxShadow: "none",
    },
    ":disabled": {
      backgroundColor: varsThemeBase.colors.surface.disabled,
      borderColor: varsThemeBase.colors.surface.disabled,
    },
  },
  variants: {
    divider: {
      false: {
        padding: `${varsThemeBase.spacing["3xs"]} ${varsThemeBase.spacing["4xs"]}`,
      },
    },
    size: {
      large: {
        height: "3rem",
        fontSize: varsThemeBase.fontSize.body.l,
        lineHeight: varsThemeBase.lineHeight.body.xl,
      },
      medium: {
        height: "2.75rem",
        fontSize: varsThemeBase.fontSize.body.m,
        lineHeight: varsThemeBase.lineHeight.body.l,
      },
      small: {
        height: "2rem",
        fontSize: varsThemeBase.fontSize.body.s,
        lineHeight: varsThemeBase.lineHeight.body.m,
      },
    },
  },
});

const leading = recipe({
  base: {
    cursor: "pointer",
    boxSizing: "border-box",
    borderRightColor: "transparent",
    borderWidth: 0,
    backgroundColor: varsThemeBase.colors.surface.primary,
    color: varsThemeBase.colors.content.secondary,
  },
  variants: {
    position: {
      start: {
        borderRightWidth: varsThemeBase.shape.border.width[1],
      },
      end: {
        borderLeftWidth: varsThemeBase.shape.border.width[1],
      },
    },
    divider: {
      true: {
        borderStyle: "solid",
        borderColor: varsThemeBase.colors.border.primary,
      },
      false: {
        borderRightWidth: 0,
        borderLeftWidth: 0,
      },
    },
    appearance: {
      success: {
        color: varsThemeBase.colors.content.success,
        backgroundColor: varsThemeBase.colors.surface["success-subdued"],
        borderColor: varsThemeBase.colors.border.success,
      },
      error: {
        color: varsThemeBase.colors.content.error,
        backgroundColor: varsThemeBase.colors.surface["error-subdued"],
        borderColor: varsThemeBase.colors.border.error,
      },
    },
    size: {
      large: {
        padding: `${varsThemeBase.spacing["3xs"]} ${varsThemeBase.spacing.xs}`,
      },
      medium: {
        padding: `${varsThemeBase.spacing["3xs"]} ${varsThemeBase.spacing["2xs"]}`,
      },
      small: {},
    },
  },
});

globalStyle(`${container()}:has(${input()}:disabled) ${leading()}`, {
  borderColor: varsThemeBase.colors.border.disabled,
  backgroundColor: varsThemeBase.colors.surface.disabled,
  color: varsThemeBase.colors.content.disabled,
});

export const styles = {
  container,
  input,
  leading,
};
