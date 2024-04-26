import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

const divider = recipe({
  base: {
    width: "100%",
    height: "1px",
    backgroundColor: varsThemeBase.colors.border.divider,
  },
  variants: {
    direction: {
      horizontal: {
        width: "100%",
        height: "1px",
      },
      vertical: {
        width: "1px",
        height: "100%",
      },
    },
    width: {
      small: {
        width: "1px",
      },
      medium: {
        width: "2px",
      },
    },
    size: {
      xs: {
        height: "172px",
      },
      s: {
        height: "188px",
      },
      md: {
        height: "204px",
      },
      lg: {
        height: "220px",
      },
      xl: {
        height: "272px",
      },
      xxl: {
        height: "288px",
      },
      xlg: {
        height: "304px",
      },
      xxlg: {
        height: "320px",
      },
    },
    style: {
      dashed: {
        content: "''",
        backgroundColor: "transparent",
        backgroundImage: `linear-gradient(to bottom, ${varsThemeBase.colors.border.divider}, transparent 50%)`,
        backgroundSize: "4px 4px",
        backgroundRepeat: "repeat-y",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      solid: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        direction: "horizontal",
        width: "small",
        size: "xs",
        style: "solid",
      },
      style: {
        height: "1px",
        width: "172px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "small",
        size: "xs",
        style: "dashed",
      },
      style: {
        height: "1px",
        width: "172px",
        backgroundImage: `linear-gradient(to right, ${varsThemeBase.colors.border.divider}, transparent 50%)`,
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "small",
        size: "xs",
        style: "solid",
      },
      style: {
        width: "1px",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "small",
        size: "xs",
        style: "dashed",
      },
      style: {
        width: "1px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "small",
        size: "s",
        style: "solid",
      },
      style: {
        height: "1px",
        width: "188px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "small",
        size: "s",
        style: "dashed",
      },
      style: {
        height: "1px",
        width: "188px",
        backgroundImage: `linear-gradient(to right, ${varsThemeBase.colors.border.divider}, transparent 50%)`,
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "small",
        size: "s",
        style: "solid",
      },
      style: {
        width: "1px",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "small",
        size: "s",
        style: "dashed",
      },
      style: {
        width: "1px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "small",
        size: "md",
        style: "solid",
      },
      style: {
        height: "1px",
        width: "204px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "small",
        size: "md",
        style: "dashed",
      },
      style: {
        height: "1px",
        width: "204px",
        backgroundImage: `linear-gradient(to right, ${varsThemeBase.colors.border.divider}, transparent 50%)`,
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "small",
        size: "md",
        style: "solid",
      },
      style: {
        width: "1px",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "small",
        size: "md",
        style: "dashed",
      },
      style: {
        width: "1px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "small",
        size: "lg",
        style: "solid",
      },
      style: {
        height: "1px",
        width: "220px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "small",
        size: "lg",
        style: "dashed",
      },
      style: {
        height: "1px",
        width: "220px",
        backgroundImage: `linear-gradient(to right, ${varsThemeBase.colors.border.divider}, transparent 50%)`,
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "small",
        size: "lg",
        style: "solid",
      },
      style: {
        width: "1px",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "small",
        size: "lg",
        style: "dashed",
      },
      style: {
        width: "1px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "small",
        size: "xl",
        style: "solid",
      },
      style: {
        height: "1px",
        width: "272px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "small",
        size: "xl",
        style: "dashed",
      },
      style: {
        height: "1px",
        width: "272px",
        backgroundImage: `linear-gradient(to right, ${varsThemeBase.colors.border.divider}, transparent 50%)`,
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "small",
        size: "xl",
        style: "solid",
      },
      style: {
        width: "1px",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "small",
        size: "xl",
        style: "dashed",
      },
      style: {
        width: "1px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "small",
        size: "xxl",
        style: "solid",
      },
      style: {
        height: "1px",
        width: "288px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "small",
        size: "xxl",
        style: "dashed",
      },
      style: {
        height: "1px",
        width: "288px",
        backgroundImage: `linear-gradient(to right, ${varsThemeBase.colors.border.divider}, transparent 50%)`,
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "small",
        size: "xxl",
        style: "solid",
      },
      style: {
        width: "1px",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "small",
        size: "xxl",
        style: "dashed",
      },
      style: {
        width: "1px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "small",
        size: "xlg",
        style: "solid",
      },
      style: {
        height: "1px",
        width: "304px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "small",
        size: "xlg",
        style: "dashed",
      },
      style: {
        height: "1px",
        width: "304px",
        backgroundImage: `linear-gradient(to right, ${varsThemeBase.colors.border.divider}, transparent 50%)`,
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "small",
        size: "xlg",
        style: "solid",
      },
      style: {
        width: "1px",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "small",
        size: "xlg",
        style: "dashed",
      },
      style: {
        width: "1px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "small",
        size: "xxlg",
        style: "solid",
      },
      style: {
        height: "1px",
        width: "320px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "small",
        size: "xxlg",
        style: "dashed",
      },
      style: {
        height: "1px",
        width: "320px",
        backgroundImage: `linear-gradient(to right, ${varsThemeBase.colors.border.divider}, transparent 50%)`,
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "small",
        size: "xxlg",
        style: "solid",
      },
      style: {
        width: "1px",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "small",
        size: "xxlg",
        style: "dashed",
      },
      style: {
        width: "1px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "medium",
        size: "xs",
        style: "solid",
      },
      style: {
        height: "2px",
        width: "172px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "medium",
        size: "xs",
        style: "dashed",
      },
      style: {
        height: "2px",
        width: "172px",
        backgroundImage: `linear-gradient(to right, ${varsThemeBase.colors.border.divider}, transparent 50%)`,
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "medium",
        size: "xs",
        style: "solid",
      },
      style: {
        width: "2px",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "medium",
        size: "xs",
        style: "dashed",
      },
      style: {
        width: "2px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "medium",
        size: "s",
        style: "solid",
      },
      style: {
        height: "2px",
        width: "188px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "medium",
        size: "s",
        style: "dashed",
      },
      style: {
        height: "2px",
        width: "188px",
        backgroundImage: `linear-gradient(to right, ${varsThemeBase.colors.border.divider}, transparent 50%)`,
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "medium",
        size: "s",
        style: "solid",
      },
      style: {
        width: "2px",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "medium",
        size: "s",
        style: "dashed",
      },
      style: {
        width: "2px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "medium",
        size: "md",
        style: "solid",
      },
      style: {
        height: "2px",
        width: "204px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "medium",
        size: "md",
        style: "dashed",
      },
      style: {
        height: "2px",
        width: "204px",
        backgroundImage: `linear-gradient(to right, ${varsThemeBase.colors.border.divider}, transparent 50%)`,
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "medium",
        size: "md",
        style: "solid",
      },
      style: {
        width: "2px",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "medium",
        size: "md",
        style: "dashed",
      },
      style: {
        width: "2px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "medium",
        size: "lg",
        style: "solid",
      },
      style: {
        height: "2px",
        width: "220px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "medium",
        size: "lg",
        style: "dashed",
      },
      style: {
        height: "2px",
        width: "220px",
        backgroundImage: `linear-gradient(to right, ${varsThemeBase.colors.border.divider}, transparent 50%)`,
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "medium",
        size: "lg",
        style: "solid",
      },
      style: {
        width: "2px",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "medium",
        size: "lg",
        style: "dashed",
      },
      style: {
        width: "2px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "medium",
        size: "xl",
        style: "solid",
      },
      style: {
        height: "2px",
        width: "272px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "medium",
        size: "xl",
        style: "dashed",
      },
      style: {
        height: "2px",
        width: "272px",
        backgroundImage: `linear-gradient(to right, ${varsThemeBase.colors.border.divider}, transparent 50%)`,
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "medium",
        size: "xl",
        style: "solid",
      },
      style: {
        width: "2px",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "medium",
        size: "xl",
        style: "dashed",
      },
      style: {
        width: "2px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "medium",
        size: "xxl",
        style: "solid",
      },
      style: {
        height: "2px",
        width: "288px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "medium",
        size: "xxl",
        style: "dashed",
      },
      style: {
        height: "2px",
        width: "288px",
        backgroundImage: `linear-gradient(to right, ${varsThemeBase.colors.border.divider}, transparent 50%)`,
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "medium",
        size: "xxl",
        style: "solid",
      },
      style: {
        width: "2px",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "medium",
        size: "xxl",
        style: "dashed",
      },
      style: {
        width: "2px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "medium",
        size: "xlg",
        style: "solid",
      },
      style: {
        height: "2px",
        width: "304px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "medium",
        size: "xlg",
        style: "dashed",
      },
      style: {
        height: "2px",
        width: "304px",
        backgroundImage: `linear-gradient(to right, ${varsThemeBase.colors.border.divider}, transparent 50%)`,
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "medium",
        size: "xlg",
        style: "solid",
      },
      style: {
        width: "2px",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "medium",
        size: "xlg",
        style: "dashed",
      },
      style: {
        width: "2px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "medium",
        size: "xxlg",
        style: "solid",
      },
      style: {
        height: "2px",
        width: "320px",
      },
    },
    {
      variants: {
        direction: "horizontal",
        width: "medium",
        size: "xxlg",
        style: "dashed",
      },
      style: {
        height: "2px",
        width: "320px",
        backgroundImage: `linear-gradient(to right, ${varsThemeBase.colors.border.divider}, transparent 50%)`,
        backgroundRepeat: "repeat-x",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "medium",
        size: "xxlg",
        style: "solid",
      },
      style: {
        width: "2px",
      },
    },
    {
      variants: {
        direction: "vertical",
        width: "medium",
        size: "xxlg",
        style: "dashed",
      },
      style: {
        width: "2px",
      },
    },
  ],
});

export const styles = {
  divider,
};
