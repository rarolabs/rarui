import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

const toast = recipe({
  base: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
    gap: varsThemeBase.spacing["3xs"],
    maxWidth: "100%",
    width: "420px",
    zIndex: varsThemeBase.zIndex[100],
  },
  variants: {
    placement: {
      topRight: {},
    },
    appearance: {
      info: {
        backgroundColor: varsThemeBase.colors.surface.info,
        color: varsThemeBase.colors.content["on-info"],
      },
      success: {
        backgroundColor: varsThemeBase.colors.surface.success,
        color: varsThemeBase.colors.content["on-success"],
      },
      warning: {
        backgroundColor: varsThemeBase.colors.surface.warning,
        color: varsThemeBase.colors.content["on-warning"],
      },
      error: {
        backgroundColor: varsThemeBase.colors.surface.error,
        color: varsThemeBase.colors.content["on-error"],
      },
      neutral: {
        backgroundColor: varsThemeBase.colors.surface["invert-secondary"],
        color: varsThemeBase.colors.content["invert-secondary"],
      },
      invert: {
        backgroundColor: varsThemeBase.colors.surface.secondary,
        color: varsThemeBase.colors.content.secondary,
      },
    },
    size: {
      small: {
        padding: `${varsThemeBase.spacing["4xs"]} ${varsThemeBase.spacing["3xs"]}`,
      },
      medium: {
        padding: varsThemeBase.spacing["3xs"],
      },
      large: {
        padding: varsThemeBase.spacing.s,
      },
    },
    variant: {
      solid: {},
      tonal: {
        color: varsThemeBase.colors.content.primary,
      },
      ghost: {
        borderLeft: "solid",
        borderWidth: "4px",
        backgroundColor: varsThemeBase.colors.surface.primary,
        color: varsThemeBase.colors.content.primary,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        appearance: "info",
        variant: "tonal",
      },
      style: {
        backgroundColor: varsThemeBase.colors.surface["info-subdued"],
      },
    },
    {
      variants: {
        appearance: "warning",
        variant: "tonal",
      },
      style: {
        backgroundColor: varsThemeBase.colors.surface["warning-subdued"],
      },
    },
    {
      variants: {
        appearance: "success",
        variant: "tonal",
      },
      style: {
        backgroundColor: varsThemeBase.colors.surface["success-subdued"],
      },
    },
    {
      variants: {
        appearance: "error",
        variant: "tonal",
      },
      style: {
        backgroundColor: varsThemeBase.colors.surface["error-subdued"],
      },
    },
    {
      variants: {
        appearance: "neutral",
        variant: "tonal",
      },
      style: {
        color: varsThemeBase.colors.content["invert-secondary"],
      },
    },
    {
      variants: {
        appearance: "invert",
        variant: "tonal",
      },
      style: {
        color: varsThemeBase.colors.content.secondary,
      },
    },
    {
      variants: {
        appearance: "info",
        variant: "ghost",
      },
      style: {
        borderColor: varsThemeBase.colors.border.info,
      },
    },
    {
      variants: {
        appearance: "warning",
        variant: "ghost",
      },
      style: {
        borderColor: varsThemeBase.colors.border.warning,
      },
    },
    {
      variants: {
        appearance: "success",
        variant: "ghost",
      },
      style: {
        borderColor: varsThemeBase.colors.border.success,
      },
    },
    {
      variants: {
        appearance: "error",
        variant: "ghost",
      },
      style: {
        borderColor: varsThemeBase.colors.border.error,
      },
    },
    {
      variants: {
        appearance: "neutral",
        variant: "ghost",
      },
      style: {
        border: "revert",
        backgroundColor: varsThemeBase.colors.surface["invert-secondary"],
        color: varsThemeBase.colors.content["invert-secondary"],
      },
    },
    {
      variants: {
        appearance: "invert",
        variant: "ghost",
      },
      style: {
        border: "revert",
        backgroundColor: varsThemeBase.colors.surface.secondary,
        color: varsThemeBase.colors.content.secondary,
      },
    },
  ],
});

const content = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

const toastContainer = recipe({
  base: {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "16px",
    listStyle: "none",
  },

  variants: {
    position: {
      bottomRight: {
        right: 0,
        bottom: 0,
      },
      topRight: {
        top: 0,
        right: 0,
      },
      bottomLeft: {
        bottom: 0,
        left: 0,
      },
      topLeft: {
        top: 0,
        left: 0,
      },
    },
  },
});

const animartionToastCenter = keyframes({
  from: {
    transform: "translateY(calc(100%))",
  },
  to: {
    transform: "translateY(0)",
  },
});

const animartionToastLeft = keyframes({
  from: {
    transform: "translateX(calc(-100%))",
  },
  to: {
    transform: "translateY(0)",
  },
});

const animartionToastRight = keyframes({
  from: {
    transform: "translateX(calc(100%))",
  },
  to: {
    transform: "translateY(0)",
  },
});

const wrapper = recipe({
  base: {
    willChange: "transform",
  },
  variants: {
    placement: {
      bottomCenter: {
        animation: `${animartionToastCenter} 800ms cubic-bezier(0,0.46,0,1.04) both`,
      },
      bottomLeft: {
        animation: `${animartionToastLeft} 800ms cubic-bezier(0,0.46,0,1.04) both`,
      },
      bottomRight: {
        animation: `${animartionToastRight} 800ms cubic-bezier(0,0.46,0,1.04) both`,
      },
      topCenter: {
        animation: `${animartionToastCenter} 800ms cubic-bezier(0,0.46,0,1.04) both`,
      },
      topLeft: {
        animation: `${animartionToastLeft} 800ms cubic-bezier(0,0.46,0,1.04) both`,
      },
      topRight: {
        animation: `${animartionToastRight} 800ms cubic-bezier(0,0.46,0,1.04) both`,
      },
    },
  },
});

export const container = recipe({
  base: {
    display: "flex",
    position: "fixed",
    flexDirection: "column-reverse",
    width: "fit-content",
    gap: "1rem",
  },
  variants: {
    placement: {
      bottomCenter: {
        left: "50%",
        transform: "translate(-50%)",
        bottom: "2rem",
      },
      bottomLeft: {
        left: 0,
        bottom: "2rem",
      },
      bottomRight: {
        right: 0,
        bottom: "2rem",
      },
      topCenter: {
        left: "50%",
        transform: "translate(-50%)",
        top: "2rem",
      },
      topLeft: {
        left: 0,
        top: "2rem",
      },
      topRight: {
        right: 0,
        top: "2rem",
      },
    },
  },
});

export const styles = {
  toast,
  container,
  content,
  toastContainer,
  wrapper,
};
