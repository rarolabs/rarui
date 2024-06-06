import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

export const container = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    gap: varsThemeBase.spacing["4xs"],
    transition: "all 150ms ease",
  },
  variants: {
    size: {
      dot: {
        gap: varsThemeBase.spacing.xs,
      },
      small: {},
      large: {},
    },
  },
});

const paginationItem = recipe({
  base: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    transition: "all 150ms ease",
    border: "none",
    color: varsThemeBase.colors.content.primary,
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    fontFamily: varsThemeBase.fontFamily.inter,
    fontWeight: varsThemeBase.fontWeight.semiBold,
    ":focus-within": {
      outline: "none",
      boxShadow: varsThemeBase.utils["focus-ring"],
    },
    ":hover": {
      backgroundColor: varsThemeBase.colors.surface["brand-hover"],
      color: varsThemeBase.colors.content.brand,
    },
    ":active": {
      backgroundColor: varsThemeBase.colors.surface["brand-press"],
    },
    ":disabled": {
      cursor: "not-allowed",
      backgroundColor: "transparent",
      color: varsThemeBase.colors.content.disabled,
    },
  },
  variants: {
    selected: {
      true: {
        backgroundColor: varsThemeBase.colors.surface.brand,
        color: varsThemeBase.colors.content["on-brand"],
        ":hover": {
          backgroundColor: varsThemeBase.colors.surface.brand,
          color: varsThemeBase.colors.content["on-brand"],
        },
      },
    },
    /**
     * Specifies the size of the Pagination component.
     * @default medium
     */
    size: {
      dot: {
        width: "0.75rem",
        height: "0.75rem",
        borderRadius: varsThemeBase.shape.border.radius.pill,
        backgroundColor: varsThemeBase.colors.content.disabled,
      },
      small: {
        width: "2.5rem",
        height: "2.5rem",
        fontSize: varsThemeBase.fontSize.button.s,
      },
      large: {
        width: "2.75rem",
        height: "2.75rem",
        fontSize: varsThemeBase.fontSize.button.m,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        size: "dot",
        selected: true,
      },
      style: {
        width: "1.25rem",
        backgroundColor: varsThemeBase.colors.content.brand,
        ":hover": {
          backgroundColor: varsThemeBase.colors.content.brand,
          color: varsThemeBase.colors.content["on-brand"],
        },
      },
    },
  ],
});

export const paginationStyles = {
  container,
  paginationItem,
};
