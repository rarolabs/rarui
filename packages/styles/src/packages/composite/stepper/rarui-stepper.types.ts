import { RecipeVariants } from "@vanilla-extract/recipes";
import { stepperStyles } from "./rarui-stepper.css";

export type StepperVariants = NonNullable<
  RecipeVariants<typeof stepperStyles.stepper> &
    RecipeVariants<typeof stepperStyles.circle>
>;
