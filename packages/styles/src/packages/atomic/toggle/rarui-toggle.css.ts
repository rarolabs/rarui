import { style, globalStyle } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { varsThemeBase } from "../../../themes";

const toggle = recipe({
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
      left: ".25rem",
      backgroundColor: varsThemeBase.colors.content.secondary,
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
        left: "1.5rem",
        backgroundColor: varsThemeBase.colors.content["on-brand"],
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
    size: {
      large: {
        ":before": {
          width: "1.5rem",
          height: "1.5rem",
        },
        ":after": {
          top: "-.3125rem",
          left: "-.375rem",
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
});

export const input = style({
  position: "absolute",
  overflow: "hidden",
  opacity: 0,
  height: 0,
  width: 0,
});

export const icon = style({
  position: "absolute",
  zIndex: 2,
  left: ".625rem",
  top: "1rem",
  opacity: 1,
  transition: "all 150ms ease",
  ":before": {
    content: "",
    position: "absolute",
    backgroundColor: varsThemeBase.colors.content.invert,
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    height: "2px",
    width: "12px",
    transform: "rotate(45deg)",
  },
  ":after": {
    content: "",
    position: "absolute",
    backgroundColor: varsThemeBase.colors.content.invert,
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    height: "2px",
    width: "12px",
    transform: "rotate(-45deg)",
  },
  selectors: {
    "&[aria-disabled='true']:after, &[aria-disabled='true']:before": {
      backgroundColor: varsThemeBase.colors.surface.disabled,
    },
  },
});

export const slider = recipe({
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
      "&:not([aria-disabled='true']):active:before": {
        backgroundColor: varsThemeBase.colors.surface.press,
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
});

export const styles = {
  toggle,
  input,
  icon,
  slider,
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
    backgroundColor: varsThemeBase.colors.surface["on-brand-hover"],
  },
);

globalStyle(
  `${toggle()}:has(${input}:checked) ${slider()}:not([aria-disabled='true']):active:before`,
  {
    backgroundColor: varsThemeBase.colors.surface["on-brand-press"],
  },
);

globalStyle(`${toggle()}:has(${input}:checked) ${slider()}:after`, {
  opacity: 1,
});

globalStyle(`${toggle()}:has(${input}:checked) ${icon}`, {
  left: "1.5rem",
  top: " .875rem",
});

globalStyle(`${toggle()}:has(${input}:checked) ${icon}:before`, {
  top: ".125rem",
  height: ".4375rem",
  width: ".125rem",
  transform: "translateX(10px) rotate(-45deg)",
  transformOrigin: "left bottom",
  backgroundColor: varsThemeBase.colors.surface.brand,
});

globalStyle(
  `${toggle()}:has(${input}:checked) ${icon}[aria-disabled='true']:before`,
  {
    backgroundColor: varsThemeBase.colors.surface.disabled,
  },
);

globalStyle(
  `${toggle()}:has(${input}:checked) ${icon}[aria-disabled='true']:after`,
  {
    backgroundColor: varsThemeBase.colors.surface.disabled,
  },
);

globalStyle(`${toggle()}:has(${input}:checked) ${icon}:after`, {
  height: ".125rem",
  width: ".6875rem",
  top: "6.8px",
  transform: "translateX(10px) rotate(-45deg)",
  transformOrigin: "left bottom",
  backgroundColor: varsThemeBase.colors.surface.brand,
});

globalStyle(`${toggle({ size: "small" }).split(" ")[1]} ${icon}`, {
  opacity: 0,
});

globalStyle(
  `${toggle({ error: true }).split(" ")[1]}:has(${input}:checked) ${icon}:before`,
  {
    backgroundColor: varsThemeBase.colors.surface.error,
  },
);

globalStyle(
  `${toggle({ error: true }).split(" ")[1]}:has(${input}:checked) ${icon}:after`,
  {
    backgroundColor: varsThemeBase.colors.surface.error,
  },
);

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
