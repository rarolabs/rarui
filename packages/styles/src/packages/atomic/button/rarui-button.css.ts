import { globalStyle, style } from "@vanilla-extract/css";
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
    gap: varsThemeBase.spacing["4xs"],
    fontWeight: varsThemeBase.fontWeight.semiBold,
    lineHeight: varsThemeBase.lineHeight.button.l,
    fontSize: varsThemeBase.fontSize.button.l,
    fontFamily: varsThemeBase.fontFamily.inter,
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
  },
  variants: {
    full: {
      true: {
        width: "100%",
      },
    },
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
    size: {
      large: {
        padding: varsThemeBase.spacing.xs,
        height: "3rem",
        fontSize: varsThemeBase.fontSize.button.l,
      },
      medium: {
        padding: varsThemeBase.spacing.xs,
        height: "2.75rem",
        fontSize: varsThemeBase.fontSize.button.m,
      },
      small: {
        padding: varsThemeBase.spacing["3xs"],
        height: "2rem",
        fontSize: varsThemeBase.fontSize.button.s,
      },
    },
    variant: {
      solid: {},
      outlined: {
        backgroundColor: "transparent",
      },
      text: {
        backgroundColor: "transparent",
        textDecoration: "underline",
        border: "none",
        borderRadius: varsThemeBase.shape.border.radius.button,
        ":hover": {
          borderRadius: varsThemeBase.shape.border.radius.button,
        },
        ":active": {
          borderRadius: varsThemeBase.shape.border.radius.button,
        },
      },
      tonal: {
        border: "none",
        borderRadius: varsThemeBase.shape.border.radius.button,
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
      },
    },
  ],
});

const overlay = style({
  position: "absolute",
  top: -1,
  left: -1,
  bottom: -1,
  right: -1,
  pointerEvents: "none",
  opacity: 0,
  borderRadius: "inherit",
});

globalStyle(`${button()}:hover ${overlay}`, {
  opacity: 1,
  backgroundColor: varsThemeBase.colors.surface["on-brand-hover"],
  borderColor: varsThemeBase.colors.surface["on-brand-hover"],
});

globalStyle(`${button()}:active ${overlay}`, {
  opacity: 1,
  backgroundColor: varsThemeBase.colors.surface["on-brand-press"],
  borderColor: varsThemeBase.colors.surface["on-brand-press"],
});

export const styles = {
  button,
  overlay,
};
