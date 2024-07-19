import { recipe } from "@vanilla-extract/recipes";
import {
  createRainbowSprinkles,
  defineProperties as defineRainbowProperties,
} from "rainbow-sprinkles";
import { keyframes, style } from "@vanilla-extract/css";
import { zIndexProperties } from "../../../properties";
import { mediaQueries, varsThemeBase } from "../../../themes";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

const modal = recipe(
  {
    base: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      width: "calc(100% - 2rem)",
      minHeight: "3rem",
      justifyContent: "center",
      flexWrap: "nowrap",
      height: "auto",
      boxSizing: "border-box",
      backgroundColor: varsThemeBase.colors.surface.primary,
      borderRadius: varsThemeBase.shape.border.radius.sm,
      padding: varsThemeBase.spacing.s,
      gap: varsThemeBase.spacing.xs,
      zIndex: varsThemeBase.zIndex[800],
    },
    variants: {
      /**
       * Padding properties are used to generate space around the content area of an Accordion.Body..
       * @default base
       */
      padding: {
        base: {
          padding: `${varsThemeBase.spacing.md} ${varsThemeBase.spacing.s}`,
        },
        none: {
          padding: 0,
        },
      },
    },
  },
  "",
);

const overlayAnimation = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

const overlay = style({
  position: "fixed",
  backgroundColor: varsThemeBase.colors.surface.overlay,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: varsThemeBase.zIndex[600],
  border: "none",
  animation: `${overlayAnimation} 0.5s ease`,
});

export const modalStyles = {
  modal,
  overlay,
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
    maxWidth: true,
  },
  staticProperties: {
    zIndex: zIndexProperties,
  },
});

export const modalSprinkle = createRainbowSprinkles(defineProperties);
