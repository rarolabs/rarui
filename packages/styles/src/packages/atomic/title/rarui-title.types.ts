import {
  titleFontSizeProperties,
  titleLineHeightProperties,
} from "./rarui-title.css";
import {
  Conditions,
  AddDollar,
  StandardLonghandProperties,
} from "../../../index.types";
import { colorProperties, fontWeightProperties } from "../../../properties";

type DynamicProperties = Pick<StandardLonghandProperties, "textAlign">;

export interface TitleSprinkle extends DynamicProperties {
  /**
   * The color property is used to set the color of the title.
   */
  color?:
    | AddDollar<keyof typeof colorProperties>
    | Conditions<AddDollar<keyof typeof colorProperties>>;
  /**
   * The color property is used to set the color of the title.
   * @default $regular
   */
  fontWeight?:
    | AddDollar<keyof typeof fontWeightProperties>
    | Conditions<AddDollar<keyof typeof fontWeightProperties>>;
  /**
   * The fontSize property sets the size of the title.
   */
  fontSize?:
    | AddDollar<keyof typeof titleFontSizeProperties>
    | Conditions<AddDollar<keyof typeof titleFontSizeProperties>>;
  /**
   * The lineHeight property specifies the line height of the title.
   */
  lineHeight?:
    | AddDollar<keyof typeof titleLineHeightProperties>
    | Conditions<AddDollar<keyof typeof titleLineHeightProperties>>;
}
