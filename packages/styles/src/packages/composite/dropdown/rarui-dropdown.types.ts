import { RecipeVariants } from "@vanilla-extract/recipes";
import { dropdownStyles } from "./rarui-dropdown.css";
import {
  StandardLonghandProperties,
  Conditions,
  AddDollar,
} from "../../../index.types";
import { zIndexProperties } from "../../../properties";

export type DropdownVariants = NonNullable<
  RecipeVariants<typeof dropdownStyles.dropdown> &
    RecipeVariants<typeof dropdownStyles.item>
>;
export type DropdownDynamicProperties = Pick<
  StandardLonghandProperties,
  "width" | "maxWidth"
>;

export interface DropdownSprinkle extends DropdownDynamicProperties {
  /**
   * The zIndex property specifies the stack order of the box.
   */
  zIndex?:
    | AddDollar<keyof typeof zIndexProperties>
    | Conditions<AddDollar<keyof typeof zIndexProperties>>;
}
