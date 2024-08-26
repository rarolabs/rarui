import { dividerBorderWidthProperties } from "./rarui-divider.css";
import { Conditions, AddDollar } from "../../../index.types";
import { borderColorProperties } from "../../../properties";

type DividerBorderStyle = "solid" | "dashed";

export interface DividerSprinkle {
  /**
   * The **`size`** CSS property sets an element's area.
   * @default 100%
   */
  size?: string | Conditions<string>;
  /**
   * The **`type`** shorthand CSS property sets the line style for all four sides of an element's.
   */
  type?:
    | AddDollar<DividerBorderStyle>
    | Conditions<AddDollar<DividerBorderStyle>>;
  /**
   * The **`thickness`** shorthand CSS property sets the width of an element's.
   */
  thickness?:
    | AddDollar<keyof typeof dividerBorderWidthProperties>
    | Conditions<AddDollar<keyof typeof dividerBorderWidthProperties>>;
  /**
   * The **`color`** CSS property sets an element's color.
   */
  color?:
    | AddDollar<keyof typeof borderColorProperties>
    | Conditions<AddDollar<keyof typeof borderColorProperties>>;
}
