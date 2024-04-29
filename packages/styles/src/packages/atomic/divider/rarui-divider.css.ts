import { recipe } from "@vanilla-extract/recipes";
import {
  createRainbowSprinkles,
  defineProperties as defineRainbowProperties,
} from "rainbow-sprinkles";
import { mediaQueries, varsThemeBase } from "../../../themes";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

const divider = recipe({
  base: {
    borderColor: varsThemeBase.colors.border.divider,
    borderWidth: 0,
  },
});

export const styles = {
  divider,
};

/* -------------------------------------------------------------------------------------------------
 * Sprinkles
 * -----------------------------------------------------------------------------------------------*/

export const dividerBorderStyleProperties = ["solid", "dashed"];
export const dividerBorderWidthProperties = {
  "0": "0",
  "1": "1px",
  "2": "2px",
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
  },
  staticProperties: {
    borderStyle: dividerBorderStyleProperties,
    borderTopWidth: dividerBorderWidthProperties,
    borderLeftWidth: dividerBorderWidthProperties,
  },
});

export const sprinkle = createRainbowSprinkles(defineProperties);
