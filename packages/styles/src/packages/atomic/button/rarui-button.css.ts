import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";
import { buttonVariants } from "./rarui-button.commons";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

const button = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    textDecoration: "none",
    cursor: "pointer",
    boxSizing: "border-box",
    position: "relative",
    fontWeight: varsThemeBase.fontWeight.semiBold,
    lineHeight: varsThemeBase.lineHeight.button.l,
    fontSize: varsThemeBase.fontSize.button.l,
    fontFamily: varsThemeBase.fontFamily.button,
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    borderWidth: varsThemeBase.shape.border.width[1],
    borderStyle: "solid",
    borderColor: varsThemeBase.colors.surface.brand,
    ":disabled": {
      background: varsThemeBase.colors.surface.disabled,
      borderColor: varsThemeBase.colors.surface.disabled,
      color: varsThemeBase.colors.content.disabled,
      cursor: "not-allowed",
    },
    ":focus-within": {
      outline: "none",
      boxShadow: varsThemeBase.utils["focus-ring"],
    },
    ":after": {
      transition: "opacity 150ms ease",
      content: "",
      position: "absolute",
      opacity: 0,
      inset: -1,
      borderRadius: varsThemeBase.shape.border.radius["2xs"],
    },
    selectors: {
      "&:hover:after": {
        opacity: 1,
      },
      "&:active:after": {
        opacity: 1,
      },
    },
  },
  variants: {
    /**
     * Specifies whether the button should take up the full width of its container.
     * This variant is useful when you want to make a button span the entire width of its parent container.
     *
     */
    full: {
      true: {
        width: "100%",
      },
    },
    /**
     * Defines the appearance variants for the button component.
     * Each appearance variant corresponds to a specific background color, border color, and text color.
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
     * Defines the size of the button component.
     * @default "large"
     */
    size: {
      large: {
        gap: varsThemeBase.spacing["3xs"],
        padding: `0 ${varsThemeBase.spacing.s}`,
        height: "3rem",
        fontSize: varsThemeBase.fontSize.button.l,
      },
      medium: {
        gap: varsThemeBase.spacing["3xs"],
        padding: `0 ${varsThemeBase.spacing.xs}`,
        height: "2.5rem",
        fontSize: varsThemeBase.fontSize.button.m,
      },
      small: {
        gap: varsThemeBase.spacing["4xs"],
        padding: `0 ${varsThemeBase.spacing["2xs"]}`,
        height: "2rem",
        fontSize: varsThemeBase.fontSize.button.s,
      },
    },
    /**
     * Defines the visual variant of the badge, affecting its background style, border and text.
     */
    variant: {
      solid: {
        selectors: {
          "&:hover:after": {
            backgroundColor: varsThemeBase.colors.surface["invert-hover"],
          },
          "&:active:after": {
            borderColor: varsThemeBase.colors.surface["invert-press"],
            backgroundColor: varsThemeBase.colors.surface["invert-press"],
          },
        },
      },
      outlined: {
        backgroundColor: "transparent",
      },
      text: {
        backgroundColor: "transparent",
        textDecoration: "underline",
        borderColor: "transparent",
      },
      tonal: {
        borderColor: "transparent",
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        appearance: "brand",
        variant: "outlined",
      },
      style: {
        ...buttonVariants.outlined.brand,
        borderColor: varsThemeBase.colors.border.brand,
      },
    },
    {
      variants: {
        appearance: "danger",
        variant: "outlined",
      },
      style: {
        ...buttonVariants.outlined.danger,
        borderColor: varsThemeBase.colors.border.error,
      },
    },
    {
      variants: {
        appearance: "success",
        variant: "outlined",
      },
      style: {
        ...buttonVariants.outlined.success,
        borderColor: varsThemeBase.colors.border.success,
      },
    },
    {
      variants: {
        appearance: "warning",
        variant: "outlined",
      },
      style: {
        ...buttonVariants.outlined.warning,
        borderColor: varsThemeBase.colors.border.warning,
      },
    },
    {
      variants: {
        appearance: "neutral",
        variant: "outlined",
      },
      style: {
        ...buttonVariants.outlined.neutral,
        borderColor: varsThemeBase.colors.border.secondary,
      },
    },
    {
      variants: {
        appearance: "inverted",
        variant: "outlined",
      },
      style: {
        ...buttonVariants.outlined.inverted,
        borderColor: varsThemeBase.colors.border.invert,
      },
    },
    // variant text
    {
      variants: {
        appearance: "brand",
        variant: "text",
      },
      style: buttonVariants.text.brand,
    },
    {
      variants: {
        appearance: "danger",
        variant: "text",
      },
      style: buttonVariants.text.danger,
    },
    {
      variants: {
        appearance: "success",
        variant: "text",
      },
      style: buttonVariants.text.success,
    },
    {
      variants: {
        appearance: "warning",
        variant: "text",
      },
      style: buttonVariants.text.warning,
    },
    {
      variants: {
        appearance: "neutral",
        variant: "text",
      },
      style: {
        ...buttonVariants.text.neutral,
      },
    },
    {
      variants: {
        appearance: "inverted",
        variant: "text",
      },
      style: buttonVariants.text.inverted,
    },
    // variant tonal
    {
      variants: {
        appearance: "brand",
        variant: "tonal",
      },
      style: {
        ...buttonVariants.text.brand,
        backgroundColor: varsThemeBase.colors.surface["brand-subdued"],
        selectors: {
          "&:hover": {
            backgroundColor: varsThemeBase.colors.surface["brand-subdued"],
          },
          "&:active": {
            backgroundColor: varsThemeBase.colors.surface["brand-subdued"],
          },
          "&:hover:after": {
            backgroundColor: varsThemeBase.colors.surface["brand-hover"],
          },
          "&:active:after": {
            backgroundColor: varsThemeBase.colors.surface["brand-press"],
          },
        },
      },
    },
    {
      variants: {
        appearance: "danger",
        variant: "tonal",
      },
      style: {
        ...buttonVariants.text.danger,
        backgroundColor: varsThemeBase.colors.surface["error-subdued"],
        selectors: {
          "&:hover": {
            backgroundColor: varsThemeBase.colors.surface["error-subdued"],
          },
          "&:active": {
            backgroundColor: varsThemeBase.colors.surface["error-subdued"],
          },
          "&:hover:after": {
            backgroundColor: varsThemeBase.colors.surface["error-hover"],
          },
          "&:active:after": {
            backgroundColor: varsThemeBase.colors.surface["error-press"],
          },
        },
      },
    },
    {
      variants: {
        appearance: "success",
        variant: "tonal",
      },
      style: {
        ...buttonVariants.text.success,
        backgroundColor: varsThemeBase.colors.surface["success-subdued"],
        selectors: {
          "&:hover": {
            backgroundColor: varsThemeBase.colors.surface["success-subdued"],
          },
          "&:active": {
            backgroundColor: varsThemeBase.colors.surface["success-subdued"],
          },
          "&:hover:after": {
            backgroundColor: varsThemeBase.colors.surface["success-hover"],
          },
          "&:active:after": {
            backgroundColor: varsThemeBase.colors.surface["success-press"],
          },
        },
      },
    },
    {
      variants: {
        appearance: "warning",
        variant: "tonal",
      },
      style: {
        ...buttonVariants.text.warning,
        backgroundColor: varsThemeBase.colors.surface["warning-subdued"],
        selectors: {
          "&:hover": {
            backgroundColor: varsThemeBase.colors.surface["warning-subdued"],
          },
          "&:active": {
            backgroundColor: varsThemeBase.colors.surface["warning-subdued"],
          },
          "&:hover:after": {
            backgroundColor: varsThemeBase.colors.surface["warning-hover"],
          },
          "&:active:after": {
            backgroundColor: varsThemeBase.colors.surface["warning-press"],
          },
        },
      },
    },
    {
      variants: {
        appearance: "neutral",
        variant: "tonal",
      },
      style: {
        ...buttonVariants.text.neutral,
        backgroundColor: varsThemeBase.colors.surface.secondary,
        selectors: {
          "&:hover": {
            backgroundColor: varsThemeBase.colors.surface.secondary,
          },
          "&:active": {
            backgroundColor: varsThemeBase.colors.surface.secondary,
          },
          "&:hover:after": {
            backgroundColor: varsThemeBase.colors.surface.hover,
          },
          "&:active:after": {
            backgroundColor: varsThemeBase.colors.surface.press,
          },
        },
      },
    },
    {
      variants: {
        appearance: "inverted",
        variant: "tonal",
      },
      style: {
        ...buttonVariants.text.inverted,
        backgroundColor: varsThemeBase.colors.surface["invert-secondary"],
        selectors: {
          "&:hover": {
            backgroundColor: varsThemeBase.colors.surface["invert-secondary"],
          },
          "&:active": {
            backgroundColor: varsThemeBase.colors.surface["invert-secondary"],
          },
          "&:hover:after": {
            backgroundColor: varsThemeBase.colors.surface["invert-hover"],
          },
          "&:active:after": {
            backgroundColor: varsThemeBase.colors.surface["invert-press"],
          },
        },
      },
    },
  ],
});

export const styles = {
  button,
};
