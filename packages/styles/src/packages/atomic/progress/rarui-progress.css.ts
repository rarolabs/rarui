import { recipe } from "@vanilla-extract/recipes";
import { createRainbowSprinkles, defineProperties } from "rainbow-sprinkles";
import { globalStyle } from "@vanilla-extract/css";
import { varsThemeBase } from "../../../themes";

const progress = recipe({
  base: {
    display: "flex",
    alignItems: "flex-start",
    alignSelf: "stretch",
    backgroundColor: varsThemeBase.colors.surface.disabled,
  },
});

const progressBar = recipe({
  base: {
    height: "0.25rem",
    borderRadius: varsThemeBase.shape.border.radius.pill,
  },
});

export const progressBackgroundColorProperties = {
  info: varsThemeBase.colors.surface.info,
  success: varsThemeBase.colors.surface.success,
};

const sprinklesProperties = defineProperties({
  dynamicProperties: {
    width: true,
  },
  staticProperties: {
    backgroundColor: progressBackgroundColorProperties,
  },
});

export const sprinkle = createRainbowSprinkles(sprinklesProperties);

/* -------------------------------------------------------------------------------------------------
 * Circle
 * -----------------------------------------------------------------------------------------------*/

const container = recipe({
  base: {
    fontWeight: varsThemeBase.fontWeight.bold,
    fontFamily: varsThemeBase.fontFamily.inter,
    fontSize: varsThemeBase.fontSize.heading.l,
    lineHeight: varsThemeBase.lineHeight.heading.l,
  },
  variants: {
    size: {
      large: {
        width: "8.75rem",
        height: "8.75rem",
      },
      small: {
        width: "5rem",
        height: "5rem",
      },
    },
  },
});

export const circle = recipe({});

globalStyle(`${circle()} text`, {
  dominantBaseline: "middle",
  textAnchor: "middle",
  fill: varsThemeBase.colors.content.primary,
  // fontSize: "1rem",
});

export const circleBg = recipe({
  base: {
    stroke: varsThemeBase.colors.border.disabled,
  },
});

export const circleFg = recipe({
  base: {
    // stroke: varsThemeBase.colors.surface.info,
    transform: "rotate(-90deg)",
    transformOrigin: "50% 50%",
  },
});

const circleSprinklesProperties = defineProperties({
  staticProperties: {
    stroke: progressBackgroundColorProperties,
  },
});

export const circleSprinkle = createRainbowSprinkles(circleSprinklesProperties);

export const styles = {
  progress,
  progressBar,
  circle,
  circleBg,
  circleFg,
  container,
};
