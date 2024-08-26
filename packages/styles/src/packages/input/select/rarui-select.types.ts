import { RecipeVariants } from "@vanilla-extract/recipes";
import { selectStyles } from "./rarui-select.css";
import { DropdownSprinkle } from "../dropdown/rarui-dropdown.types";
import { StandardLonghandProperties } from "../../../index.types";

export type SelectVariants = NonNullable<
  RecipeVariants<typeof selectStyles.select>
>;

export type SelectSprinkle = Pick<StandardLonghandProperties, "maxHeight"> &
  Pick<DropdownSprinkle, "zIndex">;
