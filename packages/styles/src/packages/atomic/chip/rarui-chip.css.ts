import { recipe } from "@vanilla-extract/recipes";
import { globalStyle, style } from "@vanilla-extract/css";
import {
  createRainbowSprinkles,
  defineProperties as defineRainbowProperties,
} from "rainbow-sprinkles";
import { mediaQueries, varsThemeBase } from "../../../themes";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

const chip = recipe({
  base: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "fit-content",
    boxSizing: "border-box",
    position: "relative",
    borderStyle: "solid",
    transition: "all 150ms ease",
    overflow: "hidden",
    gap: varsThemeBase.spacing["3xs"],
    fontWeight: varsThemeBase.fontWeight.medium,
    fontFamily: varsThemeBase.fontFamily.body,
    borderWidth: varsThemeBase.shape.border.width[1],
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    borderColor: varsThemeBase.colors.border.subdued,
    backgroundColor: varsThemeBase.colors.surface.primary,
    color: varsThemeBase.colors.content.primary,
    ":focus-within": {
      outline: "none",
      boxShadow: varsThemeBase.utils["focus-ring"],
    },
    ":hover": {
      backgroundColor: varsThemeBase.colors.surface["brand-hover"],
      borderColor: varsThemeBase.colors.border.brand,
    },
    ":active": {
      backgroundColor: varsThemeBase.colors.surface["brand-press"],
    },
    ":disabled": {
      background: varsThemeBase.colors.surface.disabled,
      borderColor: varsThemeBase.colors.border.disabled,
      color: varsThemeBase.colors.content.disabled,
      cursor: "not-allowed",
    },
  },
  variants: {
    /**
     * Specifies whether the chip will be displayed in the pill shape
     */
    pill: {
      true: {
        borderRadius: varsThemeBase.shape.border.radius.pill,
      },
    },
    /**
     * Specifies whether the chip is selected
     */
    selected: {
      true: {
        borderColor: varsThemeBase.colors.surface.brand,
        backgroundColor: varsThemeBase.colors.surface.brand,
        color: varsThemeBase.colors.content["on-brand"],
        ":hover": {
          backgroundColor: varsThemeBase.colors.surface.brand,
        },
      },
    },
    /**
     * Specifies the size of the chip
     */
    size: {
      medium: {
        lineHeight: varsThemeBase.lineHeight.button.m,
        fontSize: varsThemeBase.fontSize.button.m,
        height: "2rem",
      },
      small: {
        lineHeight: varsThemeBase.lineHeight.button.s,
        fontSize: varsThemeBase.fontSize.button.s,
        height: "1.5rem",
      },
    },
    /**
     * Specifies whether to handle text overflow within the chip.
     * When true, overflowing text is typically truncated with an ellipsis.
     */
    textOverflow: {
      true: {
        minWidth: "auto",
        width: "100%",
      },
    },
  },
});

const content = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: varsThemeBase.spacing["3xs"],
  },
  variants: {
    /**
     * Specifies whether to handle text overflow within the chip.
     * When true, overflowing text is typically truncated with an ellipsis.
     */
    textOverflow: {
      true: {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        width: "100%",
        display: "block",
        overflow: "hidden",
      },
    },
  },
});

export const close = style({
  transition: "all 150ms ease",
  color: varsThemeBase.colors.content.secondary,
  borderRadius: varsThemeBase.shape.border.radius.pill,
  ":focus-within": {
    outline: "none",
    boxShadow: varsThemeBase.utils["focus-ring"],
  },
  ":hover": {
    color: varsThemeBase.colors.content.primary,
  },
  selectors: {
    "&[aria-disabled='true']": {
      color: varsThemeBase.colors.content.disabled,
    },
  },
});

export const overlay = style({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
});

globalStyle(`${chip()}:hover ${overlay}`, {
  borderColor: varsThemeBase.colors.surface.hover,
});

globalStyle(`${chip()}:active ${overlay}`, {
  opacity: 1,
  backgroundColor: varsThemeBase.colors.surface.press,
  borderColor: varsThemeBase.colors.surface.press,
});

globalStyle(`${chip()}:disabled ${overlay}`, {
  opacity: 0,
});

export const chipStyles = {
  chip,
  content,
  close,
  overlay,
};

/* -------------------------------------------------------------------------------------------------
 * Sprinkle
 * -----------------------------------------------------------------------------------------------*/

export const paddingProperties = {
  medium: `0 ${varsThemeBase.spacing.xs}`,
  small: `0 ${varsThemeBase.spacing["4xs"]}`,
};

const defineProperties = defineRainbowProperties({
  conditions: {
    xs: {
      "@media": mediaQueries.xs(),
    },
    md: {
      "@media": mediaQueries.md(),
    },
    lg: {
      "@media": mediaQueries.lg(),
    },
    xl: {
      "@media": mediaQueries.xl(),
    },
  },
  defaultCondition: "xs",
  dynamicProperties: {
    textTransform: true,
  },
  staticProperties: {
    padding: paddingProperties,
  },
});

export const chipSprinkle = createRainbowSprinkles(defineProperties);
