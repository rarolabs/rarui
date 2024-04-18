import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

const status = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
    gap: varsThemeBase.spacing["3xs"],
    fontWeight: varsThemeBase.fontWeight.medium,
    lineHeight: varsThemeBase.lineHeight.label.m,
    fontSize: varsThemeBase.fontSize.label.m,
    fontFamily: varsThemeBase.fontFamily.inter,
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    padding: `0 ${varsThemeBase.spacing["3xs"]}`,
  },
  variants: {
    appearance: {
      success: {
        backgroundColor: varsThemeBase.colors.surface.success,
        color: varsThemeBase.colors.content["on-success"],
      },
      warning: {
        backgroundColor: varsThemeBase.colors.surface.warning,
        color: varsThemeBase.colors.content["on-warning"],
      },
      negative: {
        backgroundColor: varsThemeBase.colors.surface.error,
        color: varsThemeBase.colors.content["on-error"],
      },
      neutral: {
        backgroundColor: "transparent",
        color: varsThemeBase.colors.content.primary,
      },
    },
    size: {
      normal: {
        height: "1.75rem",
        fontSize: varsThemeBase.fontSize.label.m,
      },
      small: {
        height: "1.5rem",
        fontSize: varsThemeBase.fontSize.label.s,
      },
    },
    subdued: {
      true: {},
    },
    variant: {
      solid: {},
      text: {
        backgroundColor: "transparent",
      },
    },
  },
  compoundVariants: [
    // text
    {
      variants: {
        appearance: "success",
        variant: "text",
      },
      style: {
        color: varsThemeBase.colors.content.success,
      },
    },
    {
      variants: {
        appearance: "warning",
        variant: "text",
      },
      style: {
        color: varsThemeBase.colors.content.warning,
      },
    },
    {
      variants: {
        appearance: "negative",
        variant: "text",
      },
      style: {
        color: varsThemeBase.colors.content.error,
      },
    },
    {
      variants: {
        appearance: "neutral",
        variant: "text",
      },
      style: {
        color: varsThemeBase.colors.content.primary,
      },
    },
    // subdued
    {
      variants: {
        appearance: "success",
        subdued: true,
      },
      style: {
        backgroundColor: varsThemeBase.colors.surface["success-subdued"],
        color: varsThemeBase.colors.content.success,
      },
    },
    {
      variants: {
        appearance: "warning",
        subdued: true,
      },
      style: {
        backgroundColor: varsThemeBase.colors.surface["warning-subdued"],
        color: varsThemeBase.colors.content.warning,
      },
    },
    {
      variants: {
        appearance: "negative",
        subdued: true,
      },
      style: {
        backgroundColor: varsThemeBase.colors.surface["error-subdued"],
        color: varsThemeBase.colors.content.error,
      },
    },
    {
      variants: {
        appearance: "neutral",
        subdued: true,
      },
      style: {
        backgroundColor: varsThemeBase.colors.surface.primary,
        color: varsThemeBase.colors.content.secondary,
      },
    },
  ],
});

const dot = recipe({
  base: {
    backgroundColor: "currentcolor",
    borderRadius: varsThemeBase.shape.border.radius.pill,
  },
  variants: {
    size: {
      normal: {
        height: ".5rem",
        width: ".5rem",
      },
      small: {
        height: ".25rem",
        width: ".25rem",
      },
    },
  },
});

export const styles = {
  status,
  dot,
};