import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";
import { globalStyle, style } from "@vanilla-extract/css";

const chip = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    boxSizing: "border-box",
    position: "relative",
    gap: varsThemeBase.spacing["3xs"],
    padding: `0 ${varsThemeBase.spacing.xs}`,
    height: "2rem",
    fontWeight: varsThemeBase.fontWeight.medium,
    lineHeight: varsThemeBase.lineHeight.button.m,
    fontSize: varsThemeBase.fontSize.button.m,
    fontFamily: varsThemeBase.fontFamily.inter,
    borderWidth: varsThemeBase.shape.border.width[1],
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
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
    pill: {
      true: {
        borderRadius: varsThemeBase.shape.border.radius.pill,
      },
    },
    selected: {
      true: {
        border: "none",
        backgroundColor: varsThemeBase.colors.surface.brand,
        color: varsThemeBase.colors.content["on-brand"],
      },
    },
  },
});

export const overlay = style({
  position: "absolute",
  top: -1,
  left: -1,
  bottom: -1,
  right: -1,
  pointerEvents: "none",
  opacity: 0,
  borderRadius: "inherit",
});

globalStyle(`${chip()}:hover ${overlay}`, {
  opacity: 1,
  backgroundColor: varsThemeBase.colors.surface["on-brand-hover"],
  borderColor: varsThemeBase.colors.surface["on-brand-hover"],
});

globalStyle(`${chip()}:active ${overlay}`, {
  opacity: 1,
  backgroundColor: varsThemeBase.colors.surface["on-brand-press"],
  borderColor: varsThemeBase.colors.surface["on-brand-press"],
});

export const styles = {
  chip,
  overlay,
};
