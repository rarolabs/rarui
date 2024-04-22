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
  },
  variants: {
    variant: {
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
        padding: `${varsThemeBase.spacing["3xs"]} ${varsThemeBase.spacing.xs}`,
      },
      medium: {
        padding: varsThemeBase.spacing.s,
      },
    },
  },
});

const content = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

const closeButton = style({
  flexShrink: 0,
  border: "none",
  background: "transparent",
  cursor: "pointer",
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

const toastAn = keyframes({
  from: {
    transform: "translateX(calc(100% + 64px))",
  },
});

const toastWrapper = style({
  animation: `${toastAn} 800ms cubic-bezier(0,0.46,0,1.04) both`,
  willChange: "transform",
});

export const styles = {
  toast,
  content,
  closeButton,
  toastContainer,
  toastWrapper,
};
