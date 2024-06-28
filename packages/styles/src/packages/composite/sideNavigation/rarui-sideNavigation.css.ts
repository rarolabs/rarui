import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { varsThemeBase } from "../../../themes";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

const sideNavigation = recipe({
  base: {
    padding: varsThemeBase.spacing["2xs"],
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    fontFamily: varsThemeBase.fontFamily.base,
    color: varsThemeBase.colors.content.secondary,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "all 150ms ease",
    width: "100%",
    minHeight: "42px",
    boxSizing: "border-box",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    textAlign: "left",
    position: "relative",
    overflow: "hidden",
    ":hover": {
      backgroundColor: varsThemeBase.colors.surface.hover,
    },
    ":active": {
      backgroundColor: varsThemeBase.colors.surface.press,
    },
    ":focus-within": {
      outline: "none",
      boxShadow: varsThemeBase.utils["focus-ring"],
    },
    ":disabled": {
      backgroundColor: varsThemeBase.colors.surface.disabled,
      cursor: "not-allowed",
    },
  },
  variants: {
    active: {
      true: {
        color: varsThemeBase.colors.content.brand,
        ":after": {
          content: "",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: varsThemeBase.colors.surface["brand-subdued"],
        },
        ":hover": {
          backgroundColor: varsThemeBase.colors.surface["brand-hover"],
        },
        ":active": {
          backgroundColor: varsThemeBase.colors.surface["brand-press"],
        },
        ":disabled": {
          backgroundColor: varsThemeBase.colors.surface.disabled,
          cursor: "not-allowed",
        },
      },
    },
  },
});

const name = recipe({
  base: {
    fontSize: varsThemeBase.fontSize.button.s,
    color: varsThemeBase.colors.content.primary,
    fontWeight: varsThemeBase.fontWeight.bold,
  },
  variants: {
    active: {
      true: {
        color: varsThemeBase.colors.content.brand,
      },
    },
    disabled: {
      true: {
        color: varsThemeBase.colors.content.disabled,
      },
    },
  },
});

const description = recipe({
  base: {
    fontSize: varsThemeBase.fontSize.button.xs,
    color: varsThemeBase.colors.content.secondary,
  },
  variants: {
    disabled: {
      true: {
        color: varsThemeBase.colors.content.disabled,
      },
    },
  },
});

export const sideNavigationItem = style({
  backgroundColor: "transparent",
  fontSize: varsThemeBase.fontSize.button.s,
  textDecoration: "none",
  ":after": {
    backgroundColor: "transparent",
  },
});

const content = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "0vh",
    overflow: "hidden",
    transition: "all 150ms ease",
    gap: varsThemeBase.spacing["4xs"],
  },
  variants: {
    open: {
      true: {
        overflow: "visible",
        maxHeight: "100vh",
        marginTop: varsThemeBase.spacing["3xs"],
      },
    },
  },
});

export const sideNavigationStyles = {
  sideNavigation,
  sideNavigationItem,
  name,
  description,
  content,
};
