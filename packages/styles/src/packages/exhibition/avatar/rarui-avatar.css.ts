import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

const container = style(
  {
    position: "relative",
    display: "inline-flex",
  },
  "container",
);

const avatar = recipe(
  {
    base: {
      display: "flex",
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      overflow: "hidden",
      borderStyle: "solid",
      borderWidth: varsThemeBase.shape.border.width[1],
      backgroundColor: varsThemeBase.colors.surface.secondary,
      borderColor: varsThemeBase.colors.border.subdued,
      color: varsThemeBase.colors.content.primary,
    },
    variants: {
      /**
       * Specifies the size of the Avatar component.
       * @default medium
       */
      size: {
        small: {
          width: "20px",
          height: "20px",
          fontSize: varsThemeBase.fontSize.body.xxs,
        },
        medium: {
          width: "30px",
          height: "30px",
          fontSize: varsThemeBase.fontSize.body.xs,
        },
        large: {
          width: "40px",
          height: "40px",
          fontSize: varsThemeBase.fontSize.body.s,
          borderWidth: varsThemeBase.shape.border.width[2],
        },
        xLarge: {
          width: "60px",
          height: "60px",
          fontSize: varsThemeBase.fontSize.body.m,
          borderWidth: varsThemeBase.shape.border.width[2],
        },
      },
    },
  },
  "",
);

const badge = recipe(
  {
    base: { position: "absolute", top: "0" },
    variants: {
      size: {
        small: {
          left: "18px",
        },
        medium: {
          left: "24px",
        },
        large: {
          top: "-4px",
          left: "30px",
        },
        xLarge: {
          left: "44px",
        },
      },
    },
  },
  "badge",
);

globalStyle(`${avatar()} img`, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const avatarStyles = {
  container,
  avatar,
  badge,
};
