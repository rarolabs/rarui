import { style as vanillaStyle, globalStyle } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

// import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

const container = vanillaStyle({
  display: "flex",
  alignItems: "center",
  width: "fit-content",
  gap: varsThemeBase.spacing["3xs"],
  position: "relative",
  cursor: "pointer",
  borderRadius: varsThemeBase.shape.border.radius.pill,
});

export const container__input = vanillaStyle({
  position: "absolute",
  overflow: "hidden",
  opacity: 0,
  height: 0,
  width: 0,
});

export const container__slider = recipe({
  base: {
    backgroundColor: varsThemeBase.colors.surface.disabled,
    borderRadius: varsThemeBase.shape.border.radius.pill,
    borderWidth: varsThemeBase.shape.border.width[1],
    borderColor: varsThemeBase.colors.border.secondary,
    borderStyle: "solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    ":before": {
      content: "",
      position: "absolute",
      left: ".25rem",
      backgroundColor: varsThemeBase.colors.content.secondary,
      borderRadius: varsThemeBase.shape.border.radius.pill,
    },
  },
  variants: {
    size: {
      large: {
        width: "3.25rem",
        height: "2rem",
        ":before": {
          width: "1.5rem",
          height: "1.5rem",
        },
      },
      small: {
        width: "2.75rem",
        height: "1.5rem",
        ":before": {
          width: "0.875rem",
          height: "0.875rem",
        },
      },
    },
    error: {
      true: {
        backgroundColor: varsThemeBase.colors.surface["error-subdued"],
        borderColor: varsThemeBase.colors.border.error,
        ":before": {
          backgroundColor: varsThemeBase.colors.surface.error,
        },
      },
    },
  },
});

export const styles = {
  container,
  container__input,
  container__slider,
};

// globalStyle(`${container} input:checked ~ ${container__slider()}`, {
//   borderColor: varsThemeBase.colors.surface.brand,
//   backgroundColor: varsThemeBase.colors.surface.brand,
// });

globalStyle(
  `${container} input:checked ~ ${container__slider({ error: true })}`,
  {
    backgroundColor: `${varsThemeBase.colors.surface.error}`,
    borderColor: varsThemeBase.colors.surface.error,
  },
);

globalStyle(`${container} input:checked ~ ${container__slider()}:before`, {
  backgroundColor: varsThemeBase.colors.content["on-brand"],
  left: "1.5rem",
});

//rarui-toggle__lh85q80 input:checked ~ rarui-toggle__lh85q82 rarui-toggle_error_true__lh85q85:before
//.rarui-toggle_container__6qbvj0 input:checked ~ .rarui-toggle_container__slider__6qbvj2
