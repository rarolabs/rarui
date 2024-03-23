import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

export const link = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    cursor: "pointer",
    position: "relative",
    gap: varsThemeBase.spacing["4xs"],
    textDecoration: "underline",
    fontWeight: varsThemeBase.fontWeight.regular,
    fontFamily: varsThemeBase.fontFamily.inter,
    backgroundColor: "transparent",
    border: "none",
    ":hover": {
      textDecoration: "none",
    },
    ":disabled": {
      color: varsThemeBase.colors.content.disabled,
      cursor: "not-allowed",
    },
  },
  variants: {
    appearance: {
      default: {
        color: varsThemeBase.colors.content.brand,
      },
      neutral: {
        color: varsThemeBase.colors.content.primary,
      },
      inverted: {
        color: varsThemeBase.colors.content.invert,
      },
    },
    size: {
      large: {
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        letterSpacing: ".0112rem",
      },
      small: {
        fontSize: ".875rem",
        lineHeight: "1.25rem",
        letterSpacing: ".0088rem",
      },
      medium: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
        letterSpacing: ".01rem",
      },
    },
  },
});