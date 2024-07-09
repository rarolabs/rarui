import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

const ul = recipe({
  base: {
    margin: 0,
    borderStyle: "solid",
    listStyle: "none",
    display: "flex",
    padding: varsThemeBase.spacing["4xs"],
    gap: varsThemeBase.spacing["4xs"],
    borderWidth: varsThemeBase.shape.border.width[1],
    borderRadius: varsThemeBase.shape.border.radius.xs,
    backgroundColor: varsThemeBase.colors.surface.secondary,
    borderColor: varsThemeBase.colors.border.subdued,
  },
  variants: {
    /**
     * Determines whether the tabs should have an underline style.
     */
    underlined: {
      true: {
        padding: 0,
        borderRadius: 0,
        borderColor: "transparent",
        backgroundColor: "transparent",
        borderBottomColor: varsThemeBase.colors.border.subdued,
      },
    },
  },
});

const li = recipe({
  base: {
    display: "flex",
  },
  variants: {
    /**
     * Determines whether the tabs should occupy the full width of their container.
     */
    full: {
      true: {
        flex: "1",
      },
    },
  },
});

const button = recipe({
  base: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
    transition: "all 150ms ease",
    borderStyle: "solid",
    borderColor: "transparent",
    gap: varsThemeBase.spacing["3xs"],
    borderWidth: varsThemeBase.shape.border.width[1],
    color: varsThemeBase.colors.content.secondary,
    fontFamily: varsThemeBase.fontFamily.body,
    fontWeight: varsThemeBase.fontWeight.semiBold,
    fontSize: varsThemeBase.fontSize.button.m,
    backgroundColor: varsThemeBase.colors.surface.secondary,
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    padding: `${varsThemeBase.spacing["3xs"]} ${varsThemeBase.spacing.xs}`,
    ":focus-within": {
      outline: "none",
      boxShadow: varsThemeBase.utils["focus-ring"],
    },
    ":hover": {
      backgroundColor: varsThemeBase.colors.surface.hover,
      boxShadow: varsThemeBase.elevation.bottom[1],
      color: varsThemeBase.colors.content.primary,
    },
    ":disabled": {
      cursor: "not-allowed",
      backgroundColor: "transparent",
      borderColor: "transparent",
      boxShadow: "none",
      color: varsThemeBase.colors.content.disabled,
    },
  },
  variants: {
    /**
     * Determines whether the tabs should have an underline style.
     */
    underlined: {
      true: {
        borderRadius: 0,
        borderColor: "transparent",
        backgroundColor: "transparent",
        borderBottomColor: "transparent",
        ":hover": {
          boxShadow: "none",
          borderBottomColor: varsThemeBase.colors.border.subdued,
        },
        ":disabled": {
          borderBottomColor: "transparent",
        },
      },
    },
    /**
     * Indicates whether the button is currently selected. This is used to style the button accordingly.
     */
    selected: {
      true: {
        backgroundColor: varsThemeBase.colors.surface.primary,
        color: varsThemeBase.colors.content.primary,
        borderColor: varsThemeBase.colors.border.subdued,
        ":disabled": {
          backgroundColor: "transparent",
          borderColor: "transparent",
        },
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        underlined: true,
        selected: true,
      },
      style: {
        borderColor: "transparent",
        color: varsThemeBase.colors.content.brand,
        borderBottomColor: varsThemeBase.colors.border["brand-alt"],
        ":hover": {
          color: varsThemeBase.colors.content.brand,
          borderBottomColor: varsThemeBase.colors.border["brand-alt"],
        },
        ":disabled": {
          borderBottomColor: "transparent",
          color: varsThemeBase.colors.content.disabled,
        },
      },
    },
  ],
});

export const tabsStyles = {
  ul,
  li,
  button,
};
