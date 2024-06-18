import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { varsThemeBase } from "../../../themes";

const select = recipe({
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    width: "100%",
    overflow: "hidden",
    borderStyle: "solid",
    transition: "all 150ms ease",
    boxSizing: "border-box",
    padding: `0 ${varsThemeBase.spacing["2xs"]}`,
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    borderWidth: varsThemeBase.shape.border.width[1],
    borderColor: varsThemeBase.colors.border.secondary,
    color: varsThemeBase.colors.content.secondary,
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
    /**
     * Determines the visual style of the input, affecting its border
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
    /**
     * Specifies the size of the badge, controlling its dimensions.
     */
    size: {
      large: {
        minHeight: "3rem",
      },
      medium: {
        minHeight: "2.75rem",
      },
      small: {
        minHeight: "2rem",
        padding: `${varsThemeBase.spacing["2xs"]} ${varsThemeBase.spacing["3xs"]}`,
      },
    },
  },
});

const close = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  background: "transparent",
  color: "currentcolor",
  transition: "all 150ms ease",
  height: "1rem",
  width: "1rem",
  border: 0,
  padding: 0,
  borderRadius: varsThemeBase.shape.border.radius["2xs"],
  ":focus-within": {
    outline: "none",
    boxShadow: varsThemeBase.utils["focus-ring"],
  },
  ":hover": {
    color: varsThemeBase.colors.content.primary,
  },
});

export const selectStyles = {
  select,
  close,
};
