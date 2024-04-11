import {
  createRainbowSprinkles,
  defineProperties as defineRainbowProperties,
} from "rainbow-sprinkles";
import { recipe } from "@vanilla-extract/recipes";
import { mediaQueries, varsThemeBase } from "../../../themes";
import { colorProperties, fontWeightProperties } from "../../../properties";

export const title = recipe({
  base: {
    fontFamily: varsThemeBase.fontFamily.inter,
    margin: 0,
  },
  variants: {
    as: {
      h1: {
        fontSize: varsThemeBase.fontSize.hero,
        lineHeight: varsThemeBase.lineHeight.hero,
        fontWeight: varsThemeBase.fontWeight.bold,
      },
      h2: {
        fontSize: varsThemeBase.fontSize.heading.xl,
        lineHeight: varsThemeBase.lineHeight.heading.xl,
        fontWeight: varsThemeBase.fontWeight.bold,
      },
      h3: {
        fontSize: varsThemeBase.fontSize.heading.l,
        lineHeight: varsThemeBase.lineHeight.heading.l,
        fontWeight: varsThemeBase.fontWeight.semiBold,
      },
      h4: {
        fontSize: varsThemeBase.fontSize.heading.m,
        lineHeight: varsThemeBase.lineHeight.heading.m,
        fontWeight: varsThemeBase.fontWeight.regular,
      },
      h5: {
        fontSize: varsThemeBase.fontSize.heading.s,
        lineHeight: varsThemeBase.lineHeight.heading.s,
        fontWeight: varsThemeBase.fontWeight.regular,
      },
      h6: {
        fontSize: varsThemeBase.fontSize.heading.xs,
        lineHeight: varsThemeBase.lineHeight.heading.xs,
        fontWeight: varsThemeBase.fontWeight.regular,
      },
    },
  },
});

export const styles = {
  title,
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
  dynamicProperties: {
    textAlign: true,
  },
  staticProperties: {
    color: colorProperties,
    fontWeight: fontWeightProperties,
    lineHeight: {
      hero: varsThemeBase.lineHeight.hero,
      xs: varsThemeBase.lineHeight.heading.xs,
      s: varsThemeBase.lineHeight.heading.s,
      m: varsThemeBase.lineHeight.heading.m,
      l: varsThemeBase.lineHeight.heading.l,
      xl: varsThemeBase.lineHeight.heading.xl,
    },
    fontSize: {
      hero: varsThemeBase.fontSize.hero,
      xs: varsThemeBase.fontSize.heading.xs,
      s: varsThemeBase.fontSize.heading.s,
      m: varsThemeBase.fontSize.heading.m,
      l: varsThemeBase.fontSize.heading.l,
      xl: varsThemeBase.fontSize.heading.xl,
    },
  },
});

const sprinkle = createRainbowSprinkles(defineProperties);

export type TitleSprinkle = Parameters<typeof sprinkle>[0];

export const titleSprinkle = {
  sprinkle,
};
