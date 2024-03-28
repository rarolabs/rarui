import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

export const badge = recipe({
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
    lineHeight: varsThemeBase.lineHeight.button.m,
    fontSize: varsThemeBase.fontSize.button.m,
    fontFamily: varsThemeBase.fontFamily.inter,
    borderRadius: varsThemeBase.shape.border.radius.pill,
  },
  variants: {
    appearance: {
      brand: {
        backgroundColor: varsThemeBase.colors.surface.brand,
        borderColor: varsThemeBase.colors.surface.brand,
        color: varsThemeBase.colors.content["on-brand"],
      },
      "brand-secondary": {
        backgroundColor: varsThemeBase.colors.surface["brand-secondary"],
        borderColor: varsThemeBase.colors.surface["brand-secondary"],
        color: varsThemeBase.colors.content["on-brand-secondary"],
      },
      danger: {
        backgroundColor: varsThemeBase.colors.surface.error,
        borderColor: varsThemeBase.colors.surface.error,
        color: varsThemeBase.colors.content["on-error"],
      },
      success: {
        backgroundColor: varsThemeBase.colors.surface.success,
        borderColor: varsThemeBase.colors.surface.success,
        color: varsThemeBase.colors.content["on-success"],
      },
      warning: {
        backgroundColor: varsThemeBase.colors.surface.warning,
        borderColor: varsThemeBase.colors.surface.warning,
        color: varsThemeBase.colors.content["on-warning"],
      },
      info: {
        backgroundColor: varsThemeBase.colors.surface.info,
        borderColor: varsThemeBase.colors.surface.info,
        color: varsThemeBase.colors.content["on-info"],
      },
      neutral: {
        backgroundColor: varsThemeBase.colors.surface.invert,
        borderColor: varsThemeBase.colors.surface.invert,
        color: varsThemeBase.colors.content.invert,
      },
      inverted: {
        backgroundColor: varsThemeBase.colors.surface.primary,
        borderColor: varsThemeBase.colors.surface.primary,
        color: varsThemeBase.colors.content.primary,
      },
    },
    size: {
      large: {
        padding: `0 ${varsThemeBase.spacing.xs}`,
        height: "3rem",
        fontSize: varsThemeBase.fontSize.button.l,
      },
      medium: {
        padding: `0 ${varsThemeBase.spacing["2xs"]}`,
        height: "2em",
        fontSize: varsThemeBase.fontSize.button.m,
      },
      small: {
        padding: `0 ${varsThemeBase.spacing["3xs"]}`,
        height: "1.5rem",
        fontSize: varsThemeBase.fontSize.button.s,
      },
      dot: {
        height: "0.5rem",
        width: "0.5rem",
      },
    },
    variant: {
      solid: {},
      outlined: {
        borderWidth: varsThemeBase.shape.border.width[1],
        borderStyle: "solid",
        borderColor: varsThemeBase.colors.surface.brand,
      },
    },
  },
  compoundVariants: [
    // variant outlined
    {
      variants: {
        appearance: "brand",
        variant: "outlined",
      },
      style: {
        color: varsThemeBase.colors.content.brand,
        borderColor: varsThemeBase.colors.border.brand,
        backgroundColor: varsThemeBase.colors.surface["brand-subdued"],
      },
    },
    {
      variants: {
        appearance: "brand-secondary",
        variant: "outlined",
      },
      style: {
        color: varsThemeBase.colors.content["brand-secondary"],
        borderColor: varsThemeBase.colors.border["brand-secondary"],
        backgroundColor: varsThemeBase.colors.surface["brand-subdued"],
      },
    },
    {
      variants: {
        appearance: "danger",
        variant: "outlined",
      },
      style: {
        color: varsThemeBase.colors.content.error,
        borderColor: varsThemeBase.colors.border.error,
        backgroundColor: varsThemeBase.colors.surface["error-subdued"],
      },
    },
    {
      variants: {
        appearance: "success",
        variant: "outlined",
      },
      style: {
        color: varsThemeBase.colors.content.success,
        borderColor: varsThemeBase.colors.border.success,
        backgroundColor: varsThemeBase.colors.surface["success-subdued"],
      },
    },
    {
      variants: {
        appearance: "warning",
        variant: "outlined",
      },
      style: {
        color: varsThemeBase.colors.content.warning,
        borderColor: varsThemeBase.colors.border.warning,
        backgroundColor: varsThemeBase.colors.surface["warning-subdued"],
      },
    },
    {
      variants: {
        appearance: "info",
        variant: "outlined",
      },
      style: {
        color: varsThemeBase.colors.content.info,
        borderColor: varsThemeBase.colors.border.info,
        backgroundColor: varsThemeBase.colors.surface["info-subdued"],
      },
    },
    {
      variants: {
        appearance: "neutral",
        variant: "outlined",
      },
      style: {
        color: varsThemeBase.colors.content.primary,
        borderColor: varsThemeBase.colors.border.secondary,
        backgroundColor: varsThemeBase.colors.surface.primary,
      },
    },
    {
      variants: {
        appearance: "inverted",
        variant: "outlined",
      },
      style: {
        color: varsThemeBase.colors.content.invert,
        borderColor: varsThemeBase.colors.border.invert,
        backgroundColor: varsThemeBase.colors.surface.invert,
      },
    },
  ],
});
