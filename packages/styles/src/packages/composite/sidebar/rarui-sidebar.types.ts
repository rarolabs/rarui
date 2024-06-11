import { RecipeVariants } from "@vanilla-extract/recipes";
import { zIndexProperties } from "../../../properties";

import {
  AddDollar,
  Conditions,
  StandardLonghandProperties,
} from "../../../index.types";
import { sidebarPaddingProperties, sidebarStyles } from "./rarui-sidebar.css";

export type SidebarVariants = RecipeVariants<typeof sidebarStyles.sidebar>;

type SidebarDynamicProperties = Pick<StandardLonghandProperties, "maxWidth">;

export interface SidebarSprinkle extends SidebarDynamicProperties {
  /**
   * The **`padding`** CSS shorthand property sets the padding area on all four sides of an element at once.
   * @default small
   */
  padding?:
    | AddDollar<keyof typeof sidebarPaddingProperties>
    | Conditions<AddDollar<keyof typeof sidebarPaddingProperties>>;
  /**
   * The zIndex property specifies the stack order of the box.
   */
  zIndex?:
    | AddDollar<keyof typeof zIndexProperties>
    | Conditions<AddDollar<keyof typeof zIndexProperties>>;
}
