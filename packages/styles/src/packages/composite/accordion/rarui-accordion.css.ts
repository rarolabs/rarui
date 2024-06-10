import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

const item = recipe({
  base: {
    cursor: "pointer",
    boxSizing: "border-box",
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderWidth: 0,
    borderBottomWidth: varsThemeBase.shape.border.width[1],
    borderBottomColor: varsThemeBase.colors.border.subdued,
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    color: varsThemeBase.colors.content.primary,
  },
  variants: {
    selected: {
      true: {
        color: varsThemeBase.colors.content.brand,
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
});

const body = recipe({
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
});

export const accordionStyles = {
  item,
  body,
};
