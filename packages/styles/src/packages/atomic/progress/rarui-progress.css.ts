import { recipe } from "@vanilla-extract/recipes";
import { createRainbowSprinkles, defineProperties } from "rainbow-sprinkles";
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
    backgroundColor: varsThemeBase.colors.surface.info,
    borderRadius: varsThemeBase.shape.border.radius.pill,
  },

  variants: {
    completed: {
      true: {
        backgroundColor: varsThemeBase.colors.surface.success,
      },
    },
  },
});

export const styles = {
  progress,
  progressBar,
};

const sprinklesProperties = defineProperties({
  dynamicProperties: {
    width: true,
    backgroundColor: true,
  },
});

export const sprinkle = createRainbowSprinkles(sprinklesProperties);
