import { RecipeVariants } from "@vanilla-extract/recipes";
import { dropdownStyles } from "./raui-dropdown.css";
import { StandardLonghandProperties } from "../../../index.types";

export type DropdownVariants = RecipeVariants<typeof dropdownStyles.dropdown>;
export type DropdownSprinkle = Pick<
  StandardLonghandProperties,
  "width" | "maxWidth"
>;
