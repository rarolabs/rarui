import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

const radioButton = recipe(
  {
    base: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      borderStyle: "solid",
      position: "relative",
      cursor: "pointer",
      borderWidth: varsThemeBase.shape.border.width[2],
      borderColor: varsThemeBase.colors.border.primary,
      ":before": {
        content: "",
        position: "absolute",
        borderRadius: "100%",
        transition: "all 150ms ease",
        opacity: 0,
      },
      ":after": {
        content: "",
        position: "absolute",
        borderRadius: "100%",
        transition: "all 150ms ease",
        backgroundColor: varsThemeBase.colors.content["on-brand"],
        opacity: 0,
      },
      selectors: {
        "&:has(input:checked)": {
          backgroundColor: varsThemeBase.colors.surface.brand,
          borderColor: varsThemeBase.colors.surface.brand,
        },
        "&:has(input:checked):after": {
          opacity: 1,
        },
        "&:hover:before": {
          opacity: 1,
          backgroundColor: varsThemeBase.colors.surface["brand-hover"],
        },
        "&:active:before": {
          backgroundColor: varsThemeBase.colors.surface["brand-press"],
        },
        "&:has(input:disabled)": {
          backgroundColor: varsThemeBase.colors.surface.disabled,
          borderColor: varsThemeBase.colors.border.secondary,
        },
        "&:has(input:disabled):before": {
          opacity: 0,
        },
        "&:has(input:disabled):after": {
          backgroundColor: varsThemeBase.colors.content.disabled,
        },
      },
    },
    variants: {
      /**
       * Specifies the size of the radiobutton
       */
      size: {
        small: {
          width: "1.25rem",
          height: "1.25rem",
          ":before": {
            width: "2rem",
            height: "2rem",
          },
          ":after": {
            width: ".5rem",
            height: ".5rem",
          },
        },
        large: {
          width: "1.5rem",
          height: "1.5rem",
          ":before": {
            width: "2.75rem",
            height: "2.75rem",
          },
          ":after": {
            width: ".75rem",
            height: ".75rem",
          },
        },
      },
      /**
       * Specifies whether the radiobutton is in error state
       */
      error: {
        true: {
          borderColor: varsThemeBase.colors.border.error,
          backgroundColor: varsThemeBase.colors.surface.primary,
          selectors: {
            "&:has(input:disabled)": {
              opacity: "50%",
              backgroundColor: varsThemeBase.colors.surface.primary,
            },
            "&:has(input:checked)": {
              backgroundColor: varsThemeBase.colors.surface.primary,
              borderColor: varsThemeBase.colors.surface.error,
            },
            "&:has(input:checked):after": {
              backgroundColor: varsThemeBase.colors.content.error,
            },
            "&:hover:before": {
              opacity: 1,
              backgroundColor: varsThemeBase.colors.surface["error-hover"],
            },
            "&:active:before": {
              backgroundColor: varsThemeBase.colors.surface["error-press"],
            },
          },
        },
      },
    },
  },
  "",
);

export const container = style(
  {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    gap: varsThemeBase.spacing["3xs"],
    color: varsThemeBase.colors.content.primary,
    selectors: {
      "&[aria-disabled='true']": {
        color: varsThemeBase.colors.content.disabled,
      },
    },
  },
  "container",
);

export const input = style(
  {
    position: "absolute",
    overflow: "hidden",
    opacity: 0,
    height: 0,
    width: 0,
  },
  "input",
);

export const styles = {
  radioButton,
  input,
  container,
};
