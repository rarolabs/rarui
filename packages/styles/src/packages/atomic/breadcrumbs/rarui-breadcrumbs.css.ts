import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

const breadcrumbs = recipe({});

const breadcrumbsList = style({
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: 0,
  margin: 0,
});
const breadcrumbsWrapper = style({
  color: varsThemeBase.colors.content.secondary,

  ":hover": {
    color: varsThemeBase.colors.content.brand,
  },

  ":last-child": {
    color: varsThemeBase.colors.content.brand,
  },
});

const breadcrumbsTitle = style({
  fontFamily: varsThemeBase.fontFamily.inter,
  fontSize: varsThemeBase.fontSize.body.m,
  fontWeight: varsThemeBase.fontWeight.regular,
  lineHeight: varsThemeBase.lineHeight.body.l,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const breadcrumbsTruncate = style({
  cursor: "pointer",
  color: varsThemeBase.colors.content.secondary,

  ":hover": {
    color: varsThemeBase.colors.content.brand,
  },
});

export const styles = {
  breadcrumbs,
  breadcrumbsList,
  breadcrumbsTitle,
  breadcrumbsWrapper,
  breadcrumbsTruncate,
};
