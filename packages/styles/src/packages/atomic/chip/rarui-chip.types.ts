import { RecipeVariants } from "@vanilla-extract/recipes";
import { chipStyles, paddingProperties } from "./rarui-chip.css";

import { Conditions, AddDollar } from "../../../index.types";

export type ChipVariants = RecipeVariants<typeof chipStyles.chip>;

export interface ChipSprinkle {
  /**
   * The padding properties are used to generate space around an chip's content area.
   */
  padding?:
    | AddDollar<keyof typeof paddingProperties>
    | Conditions<AddDollar<keyof typeof paddingProperties>>;
}
