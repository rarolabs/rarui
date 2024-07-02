import { recipe } from "@vanilla-extract/recipes";
import { varsThemeBase } from "../../../themes";

const stepper = recipe({
  base: {
    display: "flex",
    flexWrap: "wrap",
    margin: 0,
    padding: 0,
  },
  variants: {
    /**
     * Specifies the direction of the stepper. This prop accepts one of the following values: vertical or horizontal.
     * @default horizontal
     */
    direction: {
      horizontal: {
        width: "100%",
        flexDirection: "row",
      },
      vertical: {
        flexDirection: "column",
        height: "100%",
        alignItems: "flex-start",
      },
    },
  },
});

const step = recipe({
  base: {
    display: "flex",
    flex: 1,
    placeItems: "center",
    justifyContent: "center",
    position: "relative",
    gap: varsThemeBase.spacing["2xs"],
    selectors: {
      "&:not(:last-child):after": {
        content: "",
        position: "absolute",
        backgroundColor: varsThemeBase.colors.border.divider,
        borderRadius: varsThemeBase.shape.border.radius.pill,
      },
    },
  },
  variants: {
    direction: {
      /**
       * Specifies the direction of the stepper. This prop accepts one of the following values: vertical or horizontal.
       * @default horizontal
       */
      horizontal: {
        flexDirection: "column",
        ":after": {
          top: "20px",
          height: "1px",
          width: "calc(100% - 60px)",
          left: "calc(50% + 30px)",
        },
      },
      vertical: {
        ":after": {
          width: "1px",
          height: "calc(100% - 60px)",
          top: "calc(50% + 30px)",
          left: "18px",
        },
      },
    },
  },
});

const stepCircle = recipe({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    backgroundColor: varsThemeBase.colors.surface.disabled,
    color: varsThemeBase.colors.content.disabled,
    fontFamily: varsThemeBase.fontFamily.body,
    fontSize: varsThemeBase.fontSize.body.s,
    fontWeight: varsThemeBase.fontWeight.bold,
  },
  variants: {
    /**
     * Indicates whether the step is currently active. An active step is typically highlighted to show that it is the current step.
     */
    active: {
      true: {
        backgroundColor: varsThemeBase.colors.surface["brand-subdued"],
        color: varsThemeBase.colors.content.brand,
      },
    },
    /**
     * Indicates whether the step has been completed. A completed step is usually marked with a checkmark or other indicator.
     */
    done: {
      true: {
        backgroundColor: varsThemeBase.colors.surface.success,
        color: varsThemeBase.colors.content["on-success"],
      },
    },
  },
});

export const stepperStyles = {
  stepper,
  step,
  stepCircle,
};
