import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

const breadcrumb = style({
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  padding: 0,
  margin: 0,
  gap: varsThemeBase.spacing["3xs"],
});

const breadcrumbItem = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    width: "100%",
    transition: "all 150ms ease",
    textDecoration: "underline",
    boxSizing: "border-box",
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    gap: varsThemeBase.spacing["3xs"],
    padding: varsThemeBase.spacing["3xs"],
    color: varsThemeBase.colors.content.secondary,
    fontWeight: varsThemeBase.fontWeight.medium,
    fontSize: varsThemeBase.fontSize.button.s,
    fontFamily: varsThemeBase.fontFamily.body,
    ":focus-within": {
      outline: "none",
      boxShadow: varsThemeBase.elevation["focus-ring"],
    },
    ":hover": {
      color: varsThemeBase.colors.content.brand,
    },
    ":disabled": {
      color: varsThemeBase.colors.content.disabled,
    },
  },

  variants: {
    /**
     * Indicates whether the breadcrumb item is currently active.
     * An active item is typically styled differently to show that it represents the current page.
     */
    active: {
      true: {
        color: varsThemeBase.colors.content.brand,
      },
    },
  },
});

export const breadcrumbStyles = {
  breadcrumb,
  breadcrumbItem,
};
