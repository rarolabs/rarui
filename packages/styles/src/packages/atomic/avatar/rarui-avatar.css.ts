import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

const avatar = recipe({
  base: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: "50%",
    overflow: "hidden",
    borderWidth: varsThemeBase.shape.border.width[1],
    borderColor: varsThemeBase.colors.border.subdued,
    fontSize: varsThemeBase.fontSize.body.xs,
  },
  variants: {
    size: {
      small: {
        width: "24px",
        height: "24px",
        fontSize: varsThemeBase.fontSize.body.xxs,
      },
      medium: {
        width: "32px",
        height: "32px",
      },
      large: {
        width: "44px",
        height: "44px",
        borderWidth: varsThemeBase.shape.border.width[2],
        fontSize: varsThemeBase.fontSize.body.s,
      },
      xLarge: {
        width: "64px",
        height: "64px",
        borderWidth: varsThemeBase.shape.border.width[2],
        fontSize: varsThemeBase.fontSize.body.m,
      },
    },
  },
});

const container = style({
  position: "relative",
  display: "inline-flex",
});

const badgeContainer = recipe({
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
});

globalStyle(`${avatar()} > img`, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const styles = {
  avatar,
  container,
  badgeContainer,
};
