import { RecipeVariants } from "@vanilla-extract/recipes";
import { modalStyles } from "./rarui-modal.css";
import {
  AddDollar,
  Conditions,
  StandardLonghandProperties,
} from "../../../index.types";
import { zIndexProperties } from "../../../properties";

export type ModalVariants = Omit<
  NonNullable<RecipeVariants<typeof modalStyles.modal>>,
  "selected"
>;

type ModalDynamicProperties = Pick<StandardLonghandProperties, "maxWidth">;

export interface ModalSprinkle extends ModalDynamicProperties {
  /**
   * The zIndex property specifies the stack order of the box.
   */
  zIndex?:
    | AddDollar<keyof typeof zIndexProperties>
    | Conditions<AddDollar<keyof typeof zIndexProperties>>;
}
