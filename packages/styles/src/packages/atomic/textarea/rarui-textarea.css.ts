import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

const textarea = recipe({
  base: {
    width: "100%",
    borderStyle: "solid",
    transition: "all 150ms ease",
    padding: varsThemeBase.spacing["2xs"],
    fontFamily: varsThemeBase.fontFamily.body,
    backgroundColor: varsThemeBase.colors.surface.primary,
    color: varsThemeBase.colors.content.primary,
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    borderColor: varsThemeBase.colors.border.secondary,
    ":hover": {
      borderColor: varsThemeBase.colors.border.primary,
    },
    ":focus": {
      borderColor: varsThemeBase.colors.border.primary,
    },
    ":focus-within": {
      outline: "none",
      boxShadow: varsThemeBase.elevation["focus-ring"],
    },
    ":disabled": {
      backgroundColor: varsThemeBase.colors.surface.disabled,
      borderColor: varsThemeBase.colors.surface.disabled,
      color: varsThemeBase.colors.content.disabled,
    },
    "::placeholder": {
      color: varsThemeBase.colors.content.disabled,
    },
  },
  variants: {
    /**
     * Determines the visual style of the textarea, affecting its border
     */
    appearance: {
      success: {
        borderColor: varsThemeBase.colors.border.success,
        ":hover": {
          borderColor: varsThemeBase.colors.border.success,
        },
        ":focus": {
          borderColor: varsThemeBase.colors.border.success,
        },
        ":disabled": {
          borderColor: varsThemeBase.colors.surface.disabled,
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
        ":disabled": {
          borderColor: varsThemeBase.colors.surface.disabled,
        },
      },
    },
  },
});

export const textareaStyles = {
  textarea,
};
