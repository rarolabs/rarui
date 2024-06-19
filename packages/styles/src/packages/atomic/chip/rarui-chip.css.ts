import { recipe } from "@vanilla-extract/recipes";
import { globalStyle, style } from "@vanilla-extract/css";
import {
  createRainbowSprinkles,
  defineProperties as defineRainbowProperties,
} from "rainbow-sprinkles";
import { mediaQueries, varsThemeBase } from "../../../themes";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

const chip = recipe({
  base: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "fit-content",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
    borderStyle: "solid",
    transition: "all 150ms ease",
    gap: varsThemeBase.spacing["3xs"],
    fontWeight: varsThemeBase.fontWeight.medium,
    fontFamily: varsThemeBase.fontFamily.inter,
    borderWidth: varsThemeBase.shape.border.width[1],
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    borderColor: varsThemeBase.colors.border.subdued,
    backgroundColor: varsThemeBase.colors.surface.primary,
    color: varsThemeBase.colors.content.primary,
    ":focus-within": {
      outline: "none",
      boxShadow: varsThemeBase.utils["focus-ring"],
    },
    ":disabled": {
      background: varsThemeBase.colors.surface.disabled,
      borderColor: varsThemeBase.colors.surface.disabled,
      color: varsThemeBase.colors.content.disabled,
      cursor: "not-allowed",
    },
    ":hover": {
      backgroundColor: varsThemeBase.colors.surface["brand-hover"],
      borderColor: varsThemeBase.colors.border.brand,
    },
    ":active": {
      backgroundColor: varsThemeBase.colors.surface["brand-press"],
    },
  },
  variants: {
    /**
     * Specifies whether the chip will be displayed in the pill shape
     */
    pill: {
      true: {
        borderRadius: varsThemeBase.shape.border.radius.pill,
      },
    },
    /**
     * Specifies whether the chip is selected
     */
    selected: {
      true: {
        borderColor: varsThemeBase.colors.surface.brand,
        backgroundColor: varsThemeBase.colors.surface.brand,
        color: varsThemeBase.colors.content["on-brand"],
        ":hover": {
          backgroundColor: varsThemeBase.colors.surface.brand,
        },
      },
    },
    /**
     * Specifies the size of the chip
     */
    size: {
      medium: {
        lineHeight: varsThemeBase.lineHeight.button.m,
        fontSize: varsThemeBase.fontSize.button.m,
        height: "2rem",
      },
      small: {
        lineHeight: varsThemeBase.lineHeight.button.s,
        fontSize: varsThemeBase.fontSize.button.s,
        height: "1.5rem",
      },
    },
  },
});

export const close = style({
  transition: "all 150ms ease",
  color: varsThemeBase.colors.content.secondary,
  borderRadius: varsThemeBase.shape.border.radius.pill,
  ":focus-within": {
    outline: "none",
    boxShadow: varsThemeBase.utils["focus-ring"],
  },
  ":hover": {
    color: varsThemeBase.colors.content.primary,
  },
});

export const overlay = style({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
});

globalStyle(`${chip()}:hover ${overlay}`, {
  borderColor: varsThemeBase.colors.surface["on-brand-hover"],
});

globalStyle(`${chip()}:active ${overlay}`, {
  opacity: 1,
  backgroundColor: varsThemeBase.colors.surface["on-brand-press"],
  borderColor: varsThemeBase.colors.surface["on-brand-press"],
});

export const chipStyles = {
  chip,
  close,
  overlay,
};

/* -------------------------------------------------------------------------------------------------
 * Sprinkle
 * -----------------------------------------------------------------------------------------------*/

export const paddingProperties = {
  medium: `0 ${varsThemeBase.spacing.xs}`,
  small: `0 ${varsThemeBase.spacing["4xs"]}`,
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
    padding: paddingProperties,
  },
});

export const chipSprinkle = createRainbowSprinkles(defineProperties);
