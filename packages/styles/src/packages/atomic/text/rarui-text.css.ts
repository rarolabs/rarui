import {
  createRainbowSprinkles,
  defineProperties as defineRainbowProperties,
} from "rainbow-sprinkles";
import { recipe } from "@vanilla-extract/recipes";
import { mediaQueries, varsThemeBase } from "../../../themes";
import { colorProperties, fontWeightProperties } from "../../../properties";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

export const text = recipe({
  base: {
    fontFamily: varsThemeBase.fontFamily.inter,
    fontWeight: varsThemeBase.fontWeight.regular,
    margin: 0,
  },
  variants: {
    lineClamp: {
      true: {
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitBoxOrient: "vertical",
      },
    },
  },
});

export const styles = {
  text,
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
    textAlign: true,
    wordBreak: true,
  },
  staticProperties: {
    color: colorProperties,
    fontWeight: fontWeightProperties,
    lineHeight: {
      xxs: varsThemeBase.lineHeight.body.xxs,
      xs: varsThemeBase.lineHeight.body.xs,
      s: varsThemeBase.lineHeight.body.s,
      m: varsThemeBase.lineHeight.body.m,
      l: varsThemeBase.lineHeight.body.l,
      xl: varsThemeBase.lineHeight.body.xl,
    },
    fontSize: {
      xxs: varsThemeBase.fontSize.body.xxs,
      xs: varsThemeBase.fontSize.body.xs,
      s: varsThemeBase.fontSize.body.s,
      m: varsThemeBase.fontSize.body.m,
      l: varsThemeBase.fontSize.body.l,
      xl: varsThemeBase.fontSize.body.xl,
    },
  },
});

export const sprinkle = createRainbowSprinkles(defineProperties);
