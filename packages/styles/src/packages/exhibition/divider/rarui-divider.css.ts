import { recipe } from "@vanilla-extract/recipes";
import {
  createRainbowSprinkles,
  defineProperties as defineRainbowProperties,
} from "rainbow-sprinkles";
import { mediaQueries } from "../../../themes";
import { borderColorProperties } from "../../../properties";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

const divider = recipe(
  {
    base: {
      borderWidth: 0,
    },
  },
  "",
);

export const styles = {
  divider,
};

/* -------------------------------------------------------------------------------------------------
 * Sprinkles
 * -----------------------------------------------------------------------------------------------*/

export const dividerBorderStyleProperties = ["solid", "dashed"];
export const dividerBorderWidthProperties = {
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
    borderColor: borderColorProperties,
    borderStyle: dividerBorderStyleProperties,
    borderTopWidth: dividerBorderWidthProperties,
    borderLeftWidth: dividerBorderWidthProperties,
  },
});

export const sprinkle = createRainbowSprinkles(defineProperties);
