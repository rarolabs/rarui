import { style, globalStyle } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { varsThemeBase } from "../../../themes";

const toggle = recipe(
  {
    base: {
      display: "flex",
      alignItems: "center",
      width: "fit-content",
      gap: varsThemeBase.spacing["3xs"],
      position: "relative",
      cursor: "pointer",
      borderRadius: varsThemeBase.shape.border.radius.pill,
      ":before": {
        content: "",
        position: "absolute",
        left: ".3125rem",
        backgroundColor: varsThemeBase.colors.surface["invert-secondary"],
        borderRadius: varsThemeBase.shape.border.radius.pill,
        zIndex: 1,
        transition: "all 150ms ease",
      },
      ":after": {
        content: "",
        inset: 0,
        opacity: 0,
        position: "absolute",
        pointerEvents: "none",
        borderRadius: "100%",
        transition: "all 150ms ease",
        backgroundColor: "transparent",
      },
      selectors: {
        "&:hover:after": {
          opacity: 1,
          backgroundColor: varsThemeBase.colors.surface.hover,
        },
        "&:has(input:checked):before": {
          left: "1.5625rem",
          backgroundColor: varsThemeBase.colors.surface.primary,
        },
        "&:has(input:checked):after": {
          left: ".9375rem",
        },
        "&[aria-disabled='true']:hover:after": {
          opacity: 0,
        },
        "&[aria-disabled='true']:before": {
          backgroundColor: varsThemeBase.colors.surface.primary,
        },
        "&:has(input:checked)[aria-disabled='true']:before": {
          backgroundColor: varsThemeBase.colors.surface.primary,
        },
      },
    },
    variants: {
      /**
       * Specifies the size of the toggle, controlling its dimensions.
       */
      size: {
        large: {
          ":before": {
            width: "1.5rem",
            height: "1.5rem",
          },
          ":after": {
            top: "-.3125rem",
            left: "-.3125rem",
            height: "2.75rem",
            width: "2.75rem",
          },
        },
        small: {
          ":before": {
            width: "1rem",
            height: "1rem",
          },
          ":after": {
            top: "-.4375rem",
            left: "-.5rem",
            height: "2.5rem",
            width: "2.5rem",
          },
        },
      },
      /**
       * Specifies whether the radiobutton is in error state
       */
      error: {
        true: {
          ":before": {
            backgroundColor: varsThemeBase.colors.surface.error,
          },
          selectors: {
            "&:has(input:checked):before": {
              backgroundColor: varsThemeBase.colors.content["on-error"],
            },
          },
        },
      },
    },
  },
  "",
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

export const slider = recipe(
  {
    base: {
      backgroundColor: varsThemeBase.colors.surface.disabled,
      borderColor: varsThemeBase.colors.border.secondary,
      borderRadius: varsThemeBase.shape.border.radius.pill,
      borderWidth: varsThemeBase.shape.border.width[1],
      borderStyle: "solid",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      transition: "all 150ms ease",
      overflow: "hidden",
      ":before": {
        content: "",
        position: "absolute",
        width: "100%",
        height: "100%",
      },
      selectors: {
        "&[aria-disabled='true']": {
          borderColor: varsThemeBase.colors.surface.disabled,
        },
        "&:not([aria-disabled='true']):hover:before": {
          backgroundColor: varsThemeBase.colors.surface.hover,
        },
      },
    },
    variants: {
      size: {
        large: {
          width: "3.25rem",
          height: "2rem",
          ":after": {
            content: "",
          },
        },
        small: {
          width: "2.75rem",
          height: "1.5rem",
        },
      },
      error: {
        true: {
          backgroundColor: varsThemeBase.colors.surface["error-subdued"],
          borderColor: varsThemeBase.colors.border.error,
          "&[aria-disabled='true']": {
            backgroundColor: varsThemeBase.colors.surface.disabled,
            borderColor: varsThemeBase.colors.surface.disabled,
          },
        },
      },
    },
  },
  "slider",
);

export const unchecked = recipe(
  {
    base: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      zIndex: 2,
      opacity: 1,
      left: "0",
      top: "50%",
      transform: "translate(-50%, -50%)",
      transition: "all 150ms ease",
      selectors: {
        [`${toggle()}:has(${input}:checked) &`]: {
          opacity: 0,
        },
        "&[aria-disabled='true']:after, &[aria-disabled='true']:before": {
          backgroundColor: varsThemeBase.colors.surface.disabled,
        },
      },
    },
    variants: {
      size: {
        large: {
          left: "1rem",
          height: "1.5rem",
          width: "1.5rem",
          borderRadius: "0.75rem",
        },
        small: {
          left: "0.75rem",
          width: "1rem",
          height: "1rem",
          borderRadius: "0.5rem",
        },
      },
    },
  },
  "unchecked",
);

export const checked = recipe(
  {
    base: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      zIndex: 2,
      left: "0",
      top: "50%",
      transform: "translate(-50%, -50%)",
      opacity: 0,
      transition: "all 150ms ease",
      selectors: {
        [`${toggle()}:has(${input}:checked) &`]: {
          opacity: 1,
        },
        "&[aria-disabled='true']:after, &[aria-disabled='true']:before": {
          backgroundColor: varsThemeBase.colors.surface.disabled,
        },
      },
    },
    variants: {
      size: {
        large: {
          left: "2.25rem",
          height: "1.5rem",
          width: "1.5rem",
          borderRadius: "0.75rem",
        },
        small: {
          left: "2rem",
          width: "1rem",
          height: "1rem",
          borderRadius: "0.5rem",
        },
      },
    },
  },
  "checked",
);

export const styles = {
  toggle,
  input,
  slider,
  unchecked,
  checked,
};

globalStyle(`${toggle()}:has(${input}:checked) ${slider()}`, {
  backgroundColor: varsThemeBase.colors.surface.brand,
  borderColor: varsThemeBase.colors.surface.brand,
});

globalStyle(
  `${toggle()}:has(${input}:checked) ${slider()}[aria-disabled='true']`,
  {
    backgroundColor: varsThemeBase.colors.surface.disabled,
    borderColor: varsThemeBase.colors.surface.disabled,
  },
);

globalStyle(
  `${toggle()}:has(${input}:checked) ${slider()}:not([aria-disabled='true']):hover:before`,
  {
    backgroundColor: varsThemeBase.colors.surface.hover,
  },
);

globalStyle(`${toggle()}:has(${input}:checked) ${slider()}:after`, {
  opacity: 1,
});

globalStyle(
  `${toggle()}:has(${input}:checked) ${slider({ error: true }).split(" ")[1]}`,
  {
    backgroundColor: varsThemeBase.colors.surface.error,
    borderColor: varsThemeBase.colors.surface.error,
  },
);

globalStyle(
  `${toggle()}:has(${input}:checked) ${slider({ error: true }).split(" ")[1]}:after`,
  {
    opacity: 0,
  },
);
