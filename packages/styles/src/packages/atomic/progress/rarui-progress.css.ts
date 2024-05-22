import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { createRainbowSprinkles, defineProperties } from "rainbow-sprinkles";
import { varsThemeBase } from "../../../themes";

const progress = style({
  display: "flex",
  alignItems: "flex-start",
  alignSelf: "stretch",
  backgroundColor: varsThemeBase.colors.surface.disabled,
});

const progressBar = style({
  height: "0.25rem",
  borderRadius: varsThemeBase.shape.border.radius.pill,
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

const circle = recipe({
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

const circleProgress = recipe({
  base: {
    transform: "rotate(-90deg)",
    transformOrigin: "50% 50%",
    stroke: varsThemeBase.colors.surface.info,
  },
  variants: {
    completed: {
      true: {
        stroke: varsThemeBase.colors.surface.success,
      },
    },
  },
});

export const circleText = style({
  dominantBaseline: "middle",
  textAnchor: "middle",
  fill: varsThemeBase.colors.content.primary,
});

export const circleBase = style({
  stroke: varsThemeBase.colors.border.disabled,
});

export const styles = {
  progress,
  progressBar,
  circle,
  circleBase,
  circleProgress,
  circleText,
};
