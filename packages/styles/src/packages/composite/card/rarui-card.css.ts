import {
  createRainbowSprinkles,
  defineProperties as defineRainbowProperties,
} from "rainbow-sprinkles";
import { recipe } from "@vanilla-extract/recipes";
import { mediaQueries, varsThemeBase } from "../../../themes";
import { backgroundColorProperties } from "../../../properties";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

const card = recipe(
  {
    base: {
      display: "flex",
      flexDirection: "column",
      borderStyle: "solid",
      borderWidth: varsThemeBase.shape.border.width[1],
      borderRadius: varsThemeBase.shape.border.radius.xs,
      backgroundColor: varsThemeBase.colors.surface.primary,
      borderColor: varsThemeBase.colors.border.subdued,
      gap: varsThemeBase.spacing["3xs"],
      color: varsThemeBase.colors.content.primary,
      fontFamily: varsThemeBase.fontFamily.body,
    },
    variants: {
      /**
       * Specifies the padding inside the card.
       * This prop accepts one of the following values: "none" or "base".
       * @default base
       */
      padding: {
        base: {
          padding: varsThemeBase.spacing.s,
        },
        none: {
          padding: 0,
        },
      },
    },
  },
  "",
);

export const cardStyles = {
  card,
};

/* -------------------------------------------------------------------------------------------------
 * Sprinkle
 * -----------------------------------------------------------------------------------------------*/

export const cardBackgroundColorProperties = {
  transparent: "transparent",
  background: varsThemeBase.colors.surface.background,
  primary: varsThemeBase.colors.surface.primary,
  secondary: varsThemeBase.colors.surface.secondary,
};

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
  staticProperties: {
    backgroundColor: backgroundColorProperties,
  },
});

export const cardSprinkle = createRainbowSprinkles(defineProperties);
