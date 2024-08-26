import { RecipeVariants } from "@vanilla-extract/recipes";
import { accordionStyles } from "./rarui-accordion.css";

export type AccordionVariants = Omit<
  NonNullable<RecipeVariants<typeof accordionStyles.item>>,
  "selected"
> &
  NonNullable<RecipeVariants<typeof accordionStyles.body>>;
