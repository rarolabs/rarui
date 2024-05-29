import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import {
  createRainbowSprinkles,
  defineProperties as defineRainbowProperties,
} from "rainbow-sprinkles";
import { zIndexProperties } from "../../../properties";
import { mediaQueries, varsThemeBase } from "../../../themes";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/
const sidebar = recipe({
  base: {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    height: "100%",
    minHeight: "100%",
    width: "100%",
    zIndex: varsThemeBase.zIndex[700],
    top: 0,
    opacity: 0,
    overflowY: "auto",
    boxSizing: "border-box",
    transition: "opacity 300ms ease, transform 300ms ease",
    backgroundColor: varsThemeBase.colors.surface.primary,
    gap: varsThemeBase.spacing["3xs"],
  },
  variants: {
    /**
     * Specifies where the sidebar should be positioned
     */
    position: {
      left: {
        left: 0,
        transform: "translateX(-100%)",
      },
      right: {
        right: 0,
        transform: "translateX(100%)",
      },
    },
    /**
     * Determines if the sidebar is shown or not.
     * @default true
     */
    open: {
      true: {
        opacity: 1,
        transform: "translateX(0)",
      },
    },
  },
});

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
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: varsThemeBase.zIndex[600],
  border: "none",
  animation: `${overlayAnimation} 0.5s ease`,
});

export const sidebarStyles = {
  sidebar,
  overlay,
};

/* -------------------------------------------------------------------------------------------------
 * Sprinkle
 * -----------------------------------------------------------------------------------------------*/

export const sidebarPaddingProperties = {
  none: "0",
  small: varsThemeBase.spacing["2xs"],
  medium: varsThemeBase.spacing.xs,
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
    maxWidth: true,
  },
  staticProperties: {
    zIndex: zIndexProperties,
    padding: sidebarPaddingProperties,
  },
});

export const sidebarSprinkle = createRainbowSprinkles(defineProperties);
