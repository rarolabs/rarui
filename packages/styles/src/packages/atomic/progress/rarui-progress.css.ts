import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { createRainbowSprinkles, defineProperties } from "rainbow-sprinkles";
import { varsThemeBase } from "../../../themes";

/* -------------------------------------------------------------------------------------------------
 * Styles
 * -----------------------------------------------------------------------------------------------*/

const progress = style(
  {
    display: "flex",
    alignItems: "flex-start",
    alignSelf: "stretch",
    backgroundColor: varsThemeBase.colors.surface.disabled,
  },
  "",
);

const bar = style(
  {
    height: "0.25rem",
    borderRadius: varsThemeBase.shape.border.radius.pill,
  },
  "bar",
);

const circle = recipe(
  {
    base: {
      fontWeight: varsThemeBase.fontWeight.bold,
      fontFamily: varsThemeBase.fontFamily.body,
      fontSize: varsThemeBase.fontSize.heading.l,
      lineHeight: varsThemeBase.lineHeight.heading.l,
    },
    variants: {
      /**
       * Specifies the size of the progress indicator.
       * This prop accepts one of the following values: "large" or "small".
       * @default large
       */
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
  },
  "circle",
);

const circleProgress = style(
  {
    transition: "all 150ms ease",
    transform: "rotate(-90deg)",
    transformOrigin: "50% 50%",
    stroke: varsThemeBase.colors.surface.info,
  },
  "circle-progress",
);

export const circleText = style(
  {
    dominantBaseline: "middle",
    textAnchor: "middle",
    fill: varsThemeBase.colors.content.primary,
  },
  "circle-text",
);

export const circleBase = style(
  {
    stroke: varsThemeBase.colors.border.disabled,
  },
  "circle-base",
);

export const progressStyles = {
  progress,
  bar,
  circle,
  circleBase,
  circleProgress,
  circleText,
};

/* -------------------------------------------------------------------------------------------------
 * Sprinkles
 * -----------------------------------------------------------------------------------------------*/

export const progressColorProperties = {
  info: varsThemeBase.colors.surface.info,
  success: varsThemeBase.colors.surface.success,
  brand: varsThemeBase.colors.surface.brand,
};

const sprinklesProperties = defineProperties({
  dynamicProperties: {
    width: true,
  },
  staticProperties: {
    backgroundColor: progressColorProperties,
    stroke: progressColorProperties,
  },
});

export const progressSprinkle = createRainbowSprinkles(sprinklesProperties);
