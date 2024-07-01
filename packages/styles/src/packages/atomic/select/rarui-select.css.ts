import {
  createRainbowSprinkles,
  defineProperties as defineRainbowProperties,
} from "rainbow-sprinkles";
import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { mediaQueries, varsThemeBase } from "../../../themes";

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
    cursor: "pointer",
    backgroundColor: varsThemeBase.colors.surface.primary,
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
    ":focus-within": {
      outline: "none",
      boxShadow: varsThemeBase.utils["focus-ring"],
    },
    selectors: {
      "&:has(input:disabled)": {
        borderColor: varsThemeBase.colors.surface.disabled,
      },
      "&[aria-disabled='true']": {
        cursor: "not-allowed",
        backgroundColor: varsThemeBase.colors.surface.disabled,
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
        height: "3rem",
      },
      medium: {
        height: "2.5rem",
      },
      small: {
        height: "2rem",
        padding: `0 ${varsThemeBase.spacing["3xs"]}`,
      },
    },
  },
});

const list = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  overflowY: "scroll",
  padding: "0.125rem",
  gap: varsThemeBase.spacing["3xs"],
  "::-webkit-scrollbar": {
    width: ".375rem",
    background: "transparent",
  },
  "::-webkit-scrollbar-thumb": {
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    backgroundColor: varsThemeBase.colors.content.disabled,
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
  ":disabled": {
    cursor: "not-allowed",
    color: varsThemeBase.colors.content.disabled,
  },
});

export const selectStyles = {
  select,
  list,
  close,
};

/* -------------------------------------------------------------------------------------------------
 * Sprinkle
 * -----------------------------------------------------------------------------------------------*/

const defineProperties = defineRainbowProperties({
  conditions: {
    xs: {
      "@media": mediaQueries.xs(),
    },
    md: {
      "@media": mediaQueries.md(),
    },
    lg: {
      "@media": mediaQueries.lg(),
    },
    xl: {
      "@media": mediaQueries.xl(),
    },
  },
  defaultCondition: "xs",
  dynamicProperties: {
    maxHeight: true,
  },
});

export const selectSprinkle = createRainbowSprinkles(defineProperties);
