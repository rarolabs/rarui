import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

const badge = recipe({
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
    /**
     * Determines the visual style of the badge, influencing its color scheme and appearance.
     * @defaiult brand
     */
    appearance: {
      brand: {
        backgroundColor: varsThemeBase.colors.surface.brand,
        borderColor: varsThemeBase.colors.surface.brand,
        color: varsThemeBase.colors.content["on-brand"],
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
    /**
     * Specifies the size of the badge, controlling its dimensions.
     * @defaiult medium
     */

    size: {
      large: {
        padding: `0 ${varsThemeBase.spacing.xs}`,
        height: "3rem",
        fontSize: varsThemeBase.fontSize.button.l,
        fontWeight: varsThemeBase.fontWeight.semiBold,
      },
      medium: {
        padding: `0 ${varsThemeBase.spacing["2xs"]}`,
        height: "2em",
        fontSize: varsThemeBase.fontSize.button.m,
        fontWeight: varsThemeBase.fontWeight.medium,
      },
      small: {
        padding: `0 ${varsThemeBase.spacing["3xs"]}`,
        height: "1.5rem",
        fontSize: varsThemeBase.fontSize.button.s,
        fontWeight: varsThemeBase.fontWeight.medium,
      },
      dot: {
        height: "0.5rem",
        width: "0.5rem",
      },
    },
    /**
     * Defines the visual variant of the badge, affecting its background style.
     * @defaiult solid
     */
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

export const badgeStyles = {
  badge,
};
