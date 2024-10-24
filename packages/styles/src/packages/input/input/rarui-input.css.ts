import { recipe } from "@vanilla-extract/recipes";
import { globalStyle } from "@vanilla-extract/css";
import { varsThemeBase } from "../../../themes";

const container = recipe(
  {
    base: {
      display: "flex",
      alignItems: "stretch",
      position: "relative",
      width: "100%",
      overflow: "hidden",
      borderStyle: "solid",
      transition: "all 150ms ease",
      borderRadius: varsThemeBase.shape.border.radius["2xs"],
      borderColor: varsThemeBase.colors.border.secondary,
      ":hover": {
        borderColor: varsThemeBase.colors.border.primary,
      },
      ":focus": {
        borderColor: varsThemeBase.colors.border.primary,
      },
      ":focus-within": {
        outline: "none",
        boxShadow: varsThemeBase.elevation["focus-ring"],
      },
      selectors: {
        "&:has(input:disabled)": {
          borderColor: varsThemeBase.colors.surface.disabled,
        },
      },
    },
    variants: {
      /**
       * Determines the visual style of the input, affecting its border
       */
      appearance: {
        success: {
          borderColor: varsThemeBase.colors.border.success,
          ":hover": {
            borderColor: varsThemeBase.colors.border.success,
          },
          ":focus": {
            borderColor: varsThemeBase.colors.border.success,
          },
        },
        error: {
          borderColor: varsThemeBase.colors.border.error,
          ":hover": {
            borderColor: varsThemeBase.colors.border.error,
          },
          ":focus": {
            borderColor: varsThemeBase.colors.border.error,
          },
        },
      },
      /**
       * Determines if the input have borders or not.
       */
      border: {
        true: {
          borderWidth: varsThemeBase.shape.border.width[1],
        },
        false: {
          borderWidth: 0,
        },
      },
      size: {
        large: {
          height: "3rem",
        },
        medium: {
          height: "2.5rem",
        },
        small: {
          height: "2rem",
        },
      },
    },
  },
  "container",
);

const input = recipe(
  {
    base: {
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      border: "none",
      padding: varsThemeBase.spacing["2xs"],
      fontFamily: varsThemeBase.fontFamily.body,
      backgroundColor: varsThemeBase.colors.surface.primary,
      color: varsThemeBase.colors.content.primary,
      selectors: {
        "&[type='number']": {
          MozAppearance: "textfield",
        },
      },

      "::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
        margin: 0,
      },
      "::-webkit-outer-spin-button": {
        WebkitAppearance: "none",
        margin: 0,
      },
      ":focus-within": {
        outline: "none",
        boxShadow: "none",
      },
      ":disabled": {
        backgroundColor: varsThemeBase.colors.surface.disabled,
        borderColor: varsThemeBase.colors.surface.disabled,
        color: varsThemeBase.colors.content.disabled,
      },
      "::placeholder": {
        color: varsThemeBase.colors.content.disabled,
      },
    },
    variants: {
      /**
       * Places a divider between the input and the leading components
       */
      divider: {
        false: {},
      },
      /**
       * Specifies the size of the input, controlling its dimensions.
       */
      size: {
        large: {
          fontSize: varsThemeBase.fontSize.body.l,
          lineHeight: varsThemeBase.lineHeight.body.xl,
        },
        medium: {
          fontSize: varsThemeBase.fontSize.body.m,
          lineHeight: varsThemeBase.lineHeight.body.l,
        },
        small: {
          fontSize: varsThemeBase.fontSize.body.s,
          lineHeight: varsThemeBase.lineHeight.body.m,
          padding: `0 ${varsThemeBase.spacing["3xs"]}`,
        },
      },
    },
  },
  "",
);

const leading = recipe(
  {
    base: {
      cursor: "pointer",
      boxSizing: "border-box",
      borderRightColor: "transparent",
      borderWidth: 0,
      backgroundColor: varsThemeBase.colors.surface.primary,
      color: varsThemeBase.colors.content.secondary,
    },
    variants: {
      position: {
        start: {
          borderRightWidth: varsThemeBase.shape.border.width[1],
        },
        end: {
          borderLeftWidth: varsThemeBase.shape.border.width[1],
        },
      },
      divider: {
        true: {
          borderStyle: "solid",
          borderColor: varsThemeBase.colors.border.secondary,
        },
        false: {
          borderRightWidth: 0,
          borderLeftWidth: 0,
        },
      },
      appearance: {
        success: {
          color: varsThemeBase.colors.content.success,
          backgroundColor: varsThemeBase.colors.surface["success-subdued"],
          borderColor: varsThemeBase.colors.border.success,
        },
        error: {
          color: varsThemeBase.colors.content.error,
          backgroundColor: varsThemeBase.colors.surface["error-subdued"],
          borderColor: varsThemeBase.colors.border.error,
        },
      },
      size: {
        large: {
          padding: `0 ${varsThemeBase.spacing.xs}`,
        },
        medium: {
          padding: `0 ${varsThemeBase.spacing["2xs"]}`,
        },
        small: {
          padding: `0 ${varsThemeBase.spacing["3xs"]}`,
        },
      },
    },
    compoundVariants: [
      {
        variants: {
          position: "start",
          divider: false,
        },
        style: {
          paddingRight: 0,
        },
      },
      {
        variants: {
          position: "end",
          divider: false,
        },
        style: {
          paddingLeft: 0,
        },
      },
      {
        variants: {
          appearance: "error",
          divider: false,
        },
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        variants: {
          appearance: "success",
          divider: false,
        },
        style: {
          backgroundColor: "transparent",
        },
      },
    ],
  },
  "leading",
);

globalStyle(`${container()}:hover ${leading()}`, {
  borderColor: varsThemeBase.colors.border.primary,
});

globalStyle(
  `${container()}:hover ${leading({ appearance: "success" }).split(" ")[1]}`,
  {
    borderColor: varsThemeBase.colors.border.success,
  },
);

globalStyle(
  `${container()}:hover ${leading({ appearance: "error" }).split(" ")[1]}`,
  {
    borderColor: varsThemeBase.colors.border.error,
  },
);

globalStyle(`${container()}:has(${input()}:disabled) ${leading()}`, {
  cursor: "auto",
  borderColor: varsThemeBase.colors.border.disabled,
  backgroundColor: varsThemeBase.colors.surface.disabled,
  color: varsThemeBase.colors.content.disabled,
});

export const styles = {
  container,
  input,
  leading,
};
