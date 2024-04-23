import {
  Conditions,
  AddDollar,
  StandardLonghandProperties,
} from "../../../index.types";
import { colorProperties } from "../../../properties";

type DynamicProperties = Pick<StandardLonghandProperties, "cursor">;

export interface IconSprinkle extends DynamicProperties {
  /**
   * The color property sets the icon.
   */
  color?:
    | AddDollar<keyof typeof colorProperties>
    | Conditions<AddDollar<keyof typeof colorProperties>>;
}
