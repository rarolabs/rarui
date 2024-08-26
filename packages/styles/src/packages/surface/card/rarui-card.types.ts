import { RecipeVariants } from "@vanilla-extract/recipes";

import { Conditions, AddDollar } from "../../../index.types";
import { cardBackgroundColorProperties, cardStyles } from "./rarui-card.css";

export type CardVariants = NonNullable<RecipeVariants<typeof cardStyles.card>>;

export interface CardSprinkle {
  /**
   * Specifies the background color of the card.
   * This prop accepts one of the following values: "$transparent", "$background", "$primary", or "$secondary"
   * @default $primary
   * @examples ["$brand", { xs: "$brand", md: "$secondary" }]
   */
  backgroundColor?:
    | AddDollar<keyof typeof cardBackgroundColorProperties>
    | Conditions<AddDollar<keyof typeof cardBackgroundColorProperties>>;
}
