import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

const banner = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
    width: "auto",
    marginRight: "auto",
    padding: `${varsThemeBase.spacing["4xs"]} ${varsThemeBase.spacing["3xs"]}`,
  },
  variants: {
    appearance: {
      brand: {
        backgroundColor: varsThemeBase.colors.surface.brand,
        color: varsThemeBase.colors.content["on-brand"],
      },
      info: {
        backgroundColor: varsThemeBase.colors.surface["info-subdued"],
        color: varsThemeBase.colors.content.info,
      },
      neutral: {
        backgroundColor: varsThemeBase.colors.surface.primary,
        color: varsThemeBase.colors.content.secondary,
      },
      inverted: {
        backgroundColor: varsThemeBase.colors.surface.invert,
        color: varsThemeBase.colors.content["invert-secondary"],
      },
      warning: {
        backgroundColor: varsThemeBase.colors.surface.warning,
        color: varsThemeBase.colors.content["on-warning"],
      },
      error: {
        backgroundColor: varsThemeBase.colors.surface.error,
        color: varsThemeBase.colors.content["on-error"],
      },
    },
    floating: {
      true: {
        borderRadius: varsThemeBase.shape.border.radius.xs,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        appearance: "neutral",
        floating: true,
      },
      style: {
        border: `1px solid ${varsThemeBase.colors.border.subdued}`,
      },
    },
    {
      variants: {
        appearance: "inverted",
        floating: true,
      },
      style: {
        border: `1px solid ${varsThemeBase.colors.border.invert}`,
      },
    },
  ],
});

export const styles = {
  banner,
};
