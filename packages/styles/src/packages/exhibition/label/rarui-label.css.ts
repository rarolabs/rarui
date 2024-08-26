import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

const label = recipe(
  {
    base: {
      display: "flex",
      alignItems: "center",
      gap: varsThemeBase.spacing["4xs"],
      color: varsThemeBase.colors.content.primary,
      fontSize: varsThemeBase.fontSize.label.m,
      lineHeight: varsThemeBase.lineHeight.label.m,
      fontFamily: varsThemeBase.fontFamily.body,
      fontWeight: varsThemeBase.fontWeight.medium,
    },
    variants: {
      /**
       * Specifies whether the label is hidden or not
       */
      hidden: {
        true: {
          border: "0",
          clip: "rect(0 0 0 0)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: "0",
          position: "absolute",
          width: "1px",
        },
      },
    },
  },
  "",
);

export const styles = {
  label,
};
