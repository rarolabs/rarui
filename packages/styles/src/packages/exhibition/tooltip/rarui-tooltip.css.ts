import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { varsThemeBase } from "../../../themes";

export const container = style(
  {
    width: "fit-content",
  },
  "container",
);

export const tooltip = recipe(
  {
    base: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: varsThemeBase.spacing["3xs"],
      zIndex: varsThemeBase.zIndex[800],
      borderRadius: varsThemeBase.shape.border.radius.xs,
      boxShadow: varsThemeBase.elevation.bottom[2],
    },
    variants: {
      /**
       * Specifies whether the color scheme should be inverted
       */
      inverted: {
        true: {
          backgroundColor: varsThemeBase.colors.surface.invert,
          color: varsThemeBase.colors.surface.invert,
        },
        false: {
          backgroundColor: varsThemeBase.colors.surface.secondary,
          color: varsThemeBase.colors.surface.primary,
        },
      },
      /**
       * Specifies the padding for the tooltip
       */
      padding: {
        base: {
          padding: varsThemeBase.spacing["2xs"],
        },
        none: {
          padding: 0,
        },
      },
    },
  },
  "",
);

export const header = recipe(
  {
    base: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: varsThemeBase.spacing.xs,
    },
    variants: {
      padding: {
        base: {
          padding: varsThemeBase.spacing["3xs"],
        },
        none: {
          padding: 0,
        },
      },
    },
  },
  "header",
);

export const styles = {
  tooltip,
  header,
  container,
};
