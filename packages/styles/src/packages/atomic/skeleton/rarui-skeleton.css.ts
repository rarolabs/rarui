import {
  createRainbowSprinkles,
  defineProperties as defineRainbowProperties,
} from "rainbow-sprinkles";
import { recipe } from "@vanilla-extract/recipes";
import { keyframes } from "@vanilla-extract/css";
import { mediaQueries, varsThemeBase } from "../../../themes";
import { borderRadiusProperties } from "../../../properties";

const skeletonAnimation = keyframes({
  "0%": {
    left: 0,
    opacity: 0,
    right: "initial",
    width: "0%",
  },
  "40%": {
    left: 0,
    opacity: 0.5,
    right: "initial",
    width: "100%",
  },
  "50%": {
    left: "initial",
    right: 0,
    width: "100%",
  },
  "90%": {
    left: "initial",
    opacity: 0,
    right: 0,
    width: "0%",
  },
  "100%": {
    left: 0,
    right: "initial",
  },
});

export const skeleton = recipe({
  base: {
    backgroundColor: varsThemeBase.colors.surface.disabled,
    position: "relative",
    overflow: "hidden",
    ":before": {
      content: "",
      position: "absolute",
      height: "100%",
      left: "0",
      top: "0",
      width: "0%",
      backgroundColor: varsThemeBase.colors.surface.secondary,
      animationName: skeletonAnimation,
      animationDuration: "3000ms",
      animationIterationCount: "infinite",
      animationTimingFunction: "ease",
    },
  },
});

export const styles = {
  skeleton,
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
    width: true,
    height: true,
    maxWidth: true,
    maxHeight: true,
    borderRadius: borderRadiusProperties,
  },
});

const sprinkle = createRainbowSprinkles(defineProperties);

export type SkeletonSprinkle = Parameters<typeof sprinkle>[0];

export const skeletonSprinkle = {
  sprinkle,
};
