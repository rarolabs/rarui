import {
  Conditions,
  AddDollar,
  StandardLonghandProperties,
} from "../../../index.types";
import { colorProperties } from "../../../properties";

type IconDynamicProperties = Pick<StandardLonghandProperties, "cursor">;

export interface IconSprinkle extends IconDynamicProperties {
  /**
   * The color property sets the icon.
   */
  color?:
    | AddDollar<keyof typeof colorProperties>
    | Conditions<AddDollar<keyof typeof colorProperties>>;
}
