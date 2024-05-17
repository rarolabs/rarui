import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { varsThemeBase } from "../../../themes";

const stepper = recipe({
  base: {
    display: "flex",
    alignItems: "flex-start",
    fontFamily: varsThemeBase.fontFamily.inter,
    justifyContent: "space-between",
  },
  variants: {
    direction: {
      horizontal: {
        width: "100%",
        flexDirection: "row",
      },
      vertical: { flexDirection: "column", height: "100%" },
    },
  },
});

const stepContainer = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    ":after": {
      content: "",
      backgroundColor: varsThemeBase.colors.border.divider,
    },
    ":before": {
      content: "",
      backgroundColor: varsThemeBase.colors.border.divider,
    },
    selectors: {
      "div:first-child > &:before": {
        backgroundColor: "unset",
      },
      "div:last-child > &:after": {
        backgroundColor: "unset",
      },
    },
  },

  variants: {
    direction: {
      horizontal: {
        ":after": {
          height: "1px",
          marginLeft: "0.5rem",
          flexGrow: 1,
        },
        ":before": {
          marginRight: "0.5rem",
          height: "1px",
          flexGrow: 1,
        },
      },
      vertical: {
        flexDirection: "column",
        ":after": {
          marginTop: "0.5rem",
          width: "1px",
          height: "1px",
          flexGrow: 1,
        },
        ":before": {
          width: "1px",
          marginBottom: "0.5rem",
          flexGrow: 1,
        },
      },
    },
  },
});

const step = recipe({
  base: {
    display: "flex",
    flex: "1 1 100%",
  },
  variants: {
    direction: {
      horizontal: { flexDirection: "column", alignItems: "center" },
      vertical: {
        flexDirection: "row",
        gap: varsThemeBase.spacing.xs,
        // alignItems: "stretch",
        height: "100%",
      },
    },
  },
});

const textContainer = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: varsThemeBase.spacing["4xs"],
  },
  variants: {
    direction: {
      horizontal: {
        padding: varsThemeBase.spacing["4xs"],
        alignItems: "center",
      },
      vertical: {
        flex: "1 0 auto",
        justifyContent: "center",
        paddingLeft: 0,
      },
    },
  },
});

const title = recipe({
  base: {
    fontSize: varsThemeBase.fontSize.body.xs,
    fontWeight: varsThemeBase.fontWeight.medium,
    marginTop: "0.5rem",
  },
  variants: {
    appearance: {
      active: {
        color: varsThemeBase.colors.content.primary,
      },
      disabled: {
        color: varsThemeBase.colors.content.secondary,
      },
      done: {
        color: varsThemeBase.colors.content.primary,
      },
    },
  },
});

const description = style({
  color: varsThemeBase.colors.content.secondary,
  fontSize: varsThemeBase.fontSize.body.xxs,
});

const circle = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    width: "2.5rem",
    height: "2.5rem",
    fontSize: varsThemeBase.fontSize.body.s,
    fontWeight: varsThemeBase.fontWeight.semiBold,
  },
  variants: {
    appearance: {
      active: {
        backgroundColor: varsThemeBase.colors.surface["brand-subdued"],
        color: varsThemeBase.colors.content.brand,
      },
      disabled: {
        backgroundColor: varsThemeBase.colors.surface.disabled,
        color: varsThemeBase.colors.content.disabled,
      },
      done: {
        backgroundColor: varsThemeBase.colors.surface.success,
        color: varsThemeBase.colors.content["on-success"],
      },
    },
  },
});

export const styles = {
  circle,
  stepper,
  textContainer,
  step,
  title,
  description,
  stepContainer,
};
