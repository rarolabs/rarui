import { recipe } from "@vanilla-extract/recipes";
import { createVar, globalStyle, style } from "@vanilla-extract/css";
import { varsThemeBase } from "../../../themes";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

export const overlayBackgroundColor = createVar();

export const checkbox = recipe({
  base: {
    appearance: "none",
    display: "inline-block",
    position: "relative",
    margin: 0,
    cursor: "pointer",
    borderWidth: varsThemeBase.shape.border.width[2],
    borderStyle: "solid",
    borderColor: varsThemeBase.colors.border.primary,
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    backgroundColor: varsThemeBase.colors.surface.primary,
    ":checked": {
      border: "none",
      backgroundColor: varsThemeBase.colors.surface.brand,
    },
    ":disabled": {
      backgroundColor: varsThemeBase.colors.surface.disabled,
      borderColor: varsThemeBase.colors.border.subdued,
      pointerEvents: "none",
    },
    ":after": {
      content: "",
      display: "block",
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      margin: "auto",
    },
    selectors: {
      "&:checked:after": {
        width: "0.625rem",
        height: "0.25rem",
        bottom: ".1875rem",
        borderLeft: `${varsThemeBase.shape.border.width[2]} solid ${varsThemeBase.colors.content["on-brand"]}`,
        borderBottom: `${varsThemeBase.shape.border.width[2]} solid ${varsThemeBase.colors.content["on-brand"]}`,
        transform: "rotate(-45deg)",
      },
    },
  },
  variants: {
    /**
     * Specifies whether the checkbox is in error state
     */
    error: {
      true: {
        borderColor: varsThemeBase.colors.border.error,
        ":checked": {
          backgroundColor: varsThemeBase.colors.surface.error,
        },
      },
    },
    /**
     * Specifies the size of the checkbox
     */
    size: {
      medium: {
        width: "1.25rem",
        height: "1.25rem",
      },
      large: {
        width: "1.5rem",
        height: "1.5rem",
      },
    },
    /**
     * Specifies whether the checkbox is indeterminate state
     */
    indeterminate: {
      true: {
        selectors: {
          "&:checked:after": {
            top: 0,
            bottom: 0,
            margin: "auto",
            height: 0,
            borderLeft: "none",
            transform: "rotate(0deg)",
          },
        },
      },
    },
  },
});

export const label = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    gap: varsThemeBase.spacing["3xs"],
    color: varsThemeBase.colors.content.primary,
    vars: {
      [overlayBackgroundColor]: varsThemeBase.colors.surface["brand-hover"],
    },
  },
  variants: {
    /**
     * Specifies whether the label is in error state
     */
    error: {
      true: {
        vars: {
          [overlayBackgroundColor]: varsThemeBase.colors.surface["error-hover"],
        },
      },
    },
  },
});

export const container = style({
  position: "relative",
  display: "flex",
  boxSizing: "border-box",
  padding: "6px",
});

export const overlay = style({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  borderRadius: "inherit",
});

globalStyle(`${container}:hover:not(:has(${checkbox()}:disabled)) ${overlay}`, {
  backgroundColor: overlayBackgroundColor,
  borderRadius: "50%",
});
