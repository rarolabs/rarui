import { recipe } from "@vanilla-extract/recipes";
import { styles } from "../input/rarui-input.css";
import { varsThemeBase } from "../../../themes";

const select = recipe({
  base: {
    display: "flex",
    alignItems: "stretch",
    position: "relative",
    width: "100%",
    overflow: "hidden",
    borderStyle: "solid",
    transition: "all 150ms ease",
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    borderWidth: varsThemeBase.shape.border.width[1],
    borderColor: varsThemeBase.colors.border.secondary,
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
});

export const selectStyles = {
  select,
};
