import {
  textFontSizeProperties,
  textLineHeightProperties,
} from "./rarui-text.css";
import {
  Conditions,
  AddDollar,
  StandardLonghandProperties,
  StandardShorthandProperties,
} from "../../../index.types";
import { colorProperties, fontWeightProperties } from "../../../properties";

type TextDynamicProperties = Pick<
  StandardLonghandProperties,
  | "textAlign"
  | "wordBreak"
  | "textTransform"
  | "textOverflow"
  | "width"
  | "whiteSpace"
> &
  Pick<StandardShorthandProperties, "textDecoration" | "overflow">;

export interface TextSprinkle extends TextDynamicProperties {
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
   * The fontSize property sets the size of the text.
   */
  fontSize?:
    | AddDollar<keyof typeof textFontSizeProperties>
    | Conditions<AddDollar<keyof typeof textFontSizeProperties>>;
  /**
   * The lineHeight property specifies the line height of the title.
   */
  lineHeight?:
    | AddDollar<keyof typeof textLineHeightProperties>
    | Conditions<AddDollar<keyof typeof textLineHeightProperties>>;
}
