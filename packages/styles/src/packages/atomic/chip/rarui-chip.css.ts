import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

const chip = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
    gap: varsThemeBase.spacing["3xs"],
    padding: `0 ${varsThemeBase.spacing.xs}`,
    height: "2rem",
    fontWeight: varsThemeBase.fontWeight.medium,
    lineHeight: varsThemeBase.lineHeight.button.m,
    fontSize: varsThemeBase.fontSize.button.m,
    fontFamily: varsThemeBase.fontFamily.inter,
    borderWidth: varsThemeBase.shape.border.width[1],
    borderStyle: "solid",
    borderColor: varsThemeBase.colors.border.subdued,
    backgroundColor: varsThemeBase.colors.surface.primary,
    color: varsThemeBase.colors.content.primary,
    ":disabled": {
      background: varsThemeBase.colors.surface.disabled,
      borderColor: varsThemeBase.colors.surface.disabled,
      color: varsThemeBase.colors.content.disabled,
      cursor: "not-allowed",
    },
    ":hover": {
      backgroundColor: varsThemeBase.colors.surface["brand-hover"],
      borderColor: varsThemeBase.colors.border.brand,
    },
    ":active": {
      backgroundColor: varsThemeBase.colors.surface["brand-press"],
    },
  },
  variants: {
    shape: {
      pill: {
        borderRadius: varsThemeBase.shape.border.radius.pill,
      },
      rounded: {
        borderRadius: varsThemeBase.shape.border.radius["2xs"],
      },
    },
    variantdsa: {
      selected: {
        border: "none",
        backgroundColor: varsThemeBase.colors.surface.brand,
        color: varsThemeBase.colors.content["on-brand"],
        ":hover": {
          backgroundColor: varsThemeBase.colors.surface["on-brand-hover"],
        },
        ":active": {
          backgroundColor: varsThemeBase.colors.surface["on-brand-press"],
        },
      },
    },
  },
});

export const styles = {
  chip,
};
