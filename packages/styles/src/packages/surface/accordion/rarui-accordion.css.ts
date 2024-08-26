import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

const item = recipe(
  {
    base: {
      cursor: "pointer",
      boxSizing: "border-box",
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderWidth: 0,
      borderBottomWidth: varsThemeBase.shape.border.width[1],
      borderBottomColor: varsThemeBase.colors.border.subdued,
      borderTopLeftRadius: varsThemeBase.shape.border.radius["2xs"],
      borderTopRightRadius: varsThemeBase.shape.border.radius["2xs"],
      color: varsThemeBase.colors.content.primary,
      transition: "all 150ms ease",
      ":hover": {
        backgroundColor: varsThemeBase.colors.surface.hover,
      },
      ":active": {
        backgroundColor: varsThemeBase.colors.surface.press,
      },
      ":disabled": {
        backgroundColor: "transparent",
        cursor: "not-allowed",
        color: varsThemeBase.colors.content.disabled,
      },
      ":focus-within": {
        outline: "none",
        boxShadow: varsThemeBase.elevation["focus-ring"],
      },
    },
    variants: {
      selected: {
        true: {
          color: varsThemeBase.colors.content.brand,
          borderBottomColor: varsThemeBase.colors.border["brand-alt"],
          ":hover": {
            backgroundColor: varsThemeBase.colors.surface["brand-hover"],
          },
          ":active": {
            backgroundColor: varsThemeBase.colors.surface["brand-press"],
          },
          ":disabled": {
            borderBottomColor: varsThemeBase.colors.border.subdued,
            backgroundColor: "transparent",
          },
        },
      },
      size: {
        large: {
          padding: `${varsThemeBase.spacing["2xs"]} ${varsThemeBase.spacing.md}`,
        },
        medium: {
          padding: `${varsThemeBase.spacing["2xs"]} ${varsThemeBase.spacing.s}`,
        },
        small: {
          padding: `${varsThemeBase.spacing["3xs"]} ${varsThemeBase.spacing.xs}`,
        },
      },
    },
  },
  "item",
);

const body = recipe(
  {
    base: {
      borderStyle: "solid",
      borderWidth: 0,
      borderBottomWidth: varsThemeBase.shape.border.width[1],
      borderBottomColor: varsThemeBase.colors.border.subdued,
    },
    variants: {
      /**
       * Padding properties are used to generate space around the content area of an Accordion.Body..
       * @default base
       */
      padding: {
        base: {
          padding: varsThemeBase.spacing["2xs"],
        },
        none: {
          padding: 0,
        },
      },
    },
  },
  "body",
);

export const accordionStyles = {
  item,
  body,
};
