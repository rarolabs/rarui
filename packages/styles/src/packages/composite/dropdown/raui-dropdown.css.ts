import {
  createRainbowSprinkles,
  defineProperties as defineRainbowProperties,
} from "rainbow-sprinkles";
import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { mediaQueries, varsThemeBase } from "../../../themes";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

const container = style({
  width: "fit-content",
});

const dropdown = recipe({
  base: {
    width: "fit-content",
    display: "flex",
    flexDirection: "column",
    borderStyle: "solid",
    gap: varsThemeBase.spacing["3xs"],
    zIndex: varsThemeBase.zIndex[800],
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    padding: varsThemeBase.spacing["3xs"],
    boxShadow: varsThemeBase.elevation.bottom[2],
    borderWidth: varsThemeBase.shape.border.width[1],
    borderColor: varsThemeBase.colors.border.subdued,
  },
  variants: {
    /**
     * Specifies the padding inside the dropdown menu. This prop accepts one of the following values: "base" or "none".
     * @default base
     */
    padding: {
      base: {
        padding: varsThemeBase.spacing["3xs"],
      },
      none: {
        padding: 0,
      },
    },
  },
});

const dropdownItem = style({
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "none",
  width: "100%",
  transition: "all 150ms ease",
  borderRadius: varsThemeBase.shape.border.radius["2xs"],
  gap: varsThemeBase.spacing["3xs"],
  padding: varsThemeBase.spacing["3xs"],
  color: varsThemeBase.colors.content.primary,
  fontWeight: varsThemeBase.fontWeight.medium,
  fontSize: varsThemeBase.fontSize.button.s,
  ":focus-within": {
    outline: "none",
    boxShadow: varsThemeBase.utils["focus-ring"],
  },
  ":hover": {
    backgroundColor: varsThemeBase.colors.surface.hover,
  },
  ":disabled": {
    color: varsThemeBase.colors.content.disabled,
  },
});

export const dropdownStyles = {
  dropdown,
  dropdownItem,
  container,
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
    width: true,
    maxWidth: true,
  },
});

export const dropdownSprinkle = createRainbowSprinkles(defineProperties);
