import { RecipeVariants } from "@vanilla-extract/recipes";
import { stepperStyles } from "./rarui-stepper.css";

export type StepperVariants = RecipeVariants<typeof stepperStyles.stepper>;
export type StepperStepVariants = RecipeVariants<typeof stepperStyles.circle>;
