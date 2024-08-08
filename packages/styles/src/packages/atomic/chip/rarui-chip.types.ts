import { RecipeVariants } from "@vanilla-extract/recipes";
import { chipStyles, paddingProperties } from "./rarui-chip.css";

import {
  Conditions,
  AddDollar,
  StandardLonghandProperties,
} from "../../../index.types";

export type ChipVariants = NonNullable<RecipeVariants<typeof chipStyles.chip>>;

type ChipDynamicProperties = Pick<StandardLonghandProperties, "textTransform">;

export interface ChipSprinkle extends ChipDynamicProperties {
  /**
   * The padding properties are used to generate space around an chip's content area.
   */
  padding?:
    | AddDollar<keyof typeof paddingProperties>
    | Conditions<AddDollar<keyof typeof paddingProperties>>;
}
