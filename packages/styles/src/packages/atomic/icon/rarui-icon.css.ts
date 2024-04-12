import {
  createRainbowSprinkles,
  defineProperties as defineRainbowProperties,
} from "rainbow-sprinkles";
import { recipe } from "@vanilla-extract/recipes";
import { mediaQueries } from "../../../themes";
import { colorProperties } from "../../../properties";

export const icon = recipe({
  base: {
    display: "flex",
    alignItems: "center",
  },
});

export const styles = {
  icon,
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
    cursor: true,
  },
  staticProperties: {
    color: colorProperties,
  },
});

const sprinkle = createRainbowSprinkles(defineProperties);

export type IconSprinkle = Parameters<typeof sprinkle>[0];

export const iconSprinkle = {
  sprinkle,
};
