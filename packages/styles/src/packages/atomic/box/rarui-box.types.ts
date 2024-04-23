import {
  Conditions,
  AddDollar,
  StandardLonghandProperties,
  StandardShorthandProperties,
} from "../../../index.types";
import {
  colorProperties,
  borderColorProperties,
  backgroundColorProperties,
  spacingProperties,
  zIndexProperties,
  borderRadiusProperties,
  borderWidthProperties,
  marginProperties,
  shadowProperties,
  lineHeightProperties,
  fontSizeProperties,
  fontWeightProperties,
} from "../../../properties";

interface BoxConditions<T> extends Conditions<T> {
  focus?: T;
  focusWithin?: T;
  active?: T;
  hover?: T;
  disabled?: T;
}

type DynamicProperties = Pick<
  StandardLonghandProperties,
  | "display"
  | "width"
  | "height"
  | "maxWidth"
  | "maxHeight"
  | "minWidth"
  | "minHeight"
  | "bottom"
  | "left"
  | "right"
  | "top"
  | "gridTemplateAreas"
  | "gridTemplateColumns"
  | "gridTemplateRows"
  | "flexShrink"
  | "flexGrow"
  | "order"
  | "transitionDelay"
  | "transitionProperty"
  | "backgroundImage"
  | "backgroundBlendMode"
  | "backgroundRepeat"
  | "backgroundSize"
  | "flexDirection"
  | "flexWrap"
  | "flexBasis"
  | "justifyContent"
  | "justifyItems"
  | "alignContent"
  | "alignItems"
  | "alignSelf"
  | "pointerEvents"
  | "position"
  | "boxSizing"
  | "cursor"
  | "overflowX"
  | "overflowY"
  | "transitionTimingFunction"
  | "textAlign"
> &
  Pick<
    StandardShorthandProperties,
    | "flex"
    | "gridArea"
    | "backgroundPosition"
    | "flexFlow"
    | "borderStyle"
    | "overflow"
    | "textDecoration"
  >;

export interface BoxSprinkle extends DynamicProperties {
  /**
   * The gap property sets the gaps between rows and columns. It is a shorthand for rowGap and columnGap.
   */
  gap?:
    | AddDollar<keyof typeof spacingProperties>
    | BoxConditions<AddDollar<keyof typeof spacingProperties>>;
  /**
   * The gridGap property sets the gaps between rows and columns. It is a shorthand for rowGap and columnGap.
   */
  gridGap?:
    | AddDollar<keyof typeof spacingProperties>
    | BoxConditions<AddDollar<keyof typeof spacingProperties>>;
  /**
   * The backgroundColor property sets the background color of the box.
   * @examples ["$brand", { xs: "$brand", md: "$secondary" }]
   */
  backgroundColor?:
    | AddDollar<keyof typeof backgroundColorProperties>
    | BoxConditions<AddDollar<keyof typeof backgroundColorProperties>>;
  /**
   * The color property is used to set the color of the box.
   */
  color?:
    | AddDollar<keyof typeof colorProperties>
    | BoxConditions<AddDollar<keyof typeof colorProperties>>;
  /**
   * The borderRadius property rounds the corners of an box's outer border edge.
   */
  borderRadius?:
    | AddDollar<keyof typeof borderRadiusProperties>
    | BoxConditions<AddDollar<keyof typeof borderRadiusProperties>>;
  /**
   * The borderWidth property sets the width of an box's border.
   */
  borderWidth?:
    | AddDollar<keyof typeof borderWidthProperties>
    | BoxConditions<AddDollar<keyof typeof borderWidthProperties>>;
  /**
   * The borderTopWidth property defines the width of the border at the top of a box.
   */
  borderTopWidth?:
    | AddDollar<keyof typeof borderWidthProperties>
    | BoxConditions<AddDollar<keyof typeof borderWidthProperties>>;
  /**
   * The borderBottomWidth property defines the width of the border at the bottom of a box.
   */
  borderBottomWidth?:
    | AddDollar<keyof typeof borderWidthProperties>
    | BoxConditions<AddDollar<keyof typeof borderWidthProperties>>;
  /**
   * The borderLeftWidth property defines the width of the border at the left of a box.
   */
  borderLeftWidth?:
    | AddDollar<keyof typeof borderWidthProperties>
    | BoxConditions<AddDollar<keyof typeof borderWidthProperties>>;
  /**
   * The borderRightWidth property defines the width of the border at the right of a box.
   */
  borderRightWidth?:
    | AddDollar<keyof typeof borderWidthProperties>
    | BoxConditions<AddDollar<keyof typeof borderWidthProperties>>;
  /**
   * The borderWidthX shorthand property defines the width of the element's border on the left and right.
   */
  borderWidthX?:
    | AddDollar<keyof typeof borderWidthProperties>
    | BoxConditions<AddDollar<keyof typeof borderWidthProperties>>;
  /**
   * The borderWidthY shorthand property defines the width of the element's border on the top and bottom.
   */
  borderWidthY?:
    | AddDollar<keyof typeof borderWidthProperties>
    | BoxConditions<AddDollar<keyof typeof borderWidthProperties>>;
  /**
   * The borderColor property sets the color of the box's four borders.
   */
  borderColor?:
    | AddDollar<keyof typeof borderColorProperties>
    | BoxConditions<AddDollar<keyof typeof borderColorProperties>>;
  /**
   * The boxShadow property adds shadow effects around an box's frame.
   */
  boxShadow?:
    | AddDollar<keyof typeof shadowProperties>
    | BoxConditions<AddDollar<keyof typeof shadowProperties>>;
  /**
   * The padding properties are used to generate space around an box's content area.
   */
  padding?:
    | AddDollar<keyof typeof spacingProperties>
    | BoxConditions<AddDollar<keyof typeof spacingProperties>>;
  /**
   * The paddingTop property sets the height of the padding area on the top of an box.
   */
  paddingTop?:
    | AddDollar<keyof typeof spacingProperties>
    | BoxConditions<AddDollar<keyof typeof spacingProperties>>;
  /**
   * The paddingBottom property sets the height of the padding area on the bottom of an box.
   */
  paddingBottom?:
    | AddDollar<keyof typeof spacingProperties>
    | BoxConditions<AddDollar<keyof typeof spacingProperties>>;
  /**
   * The paddingLeft property sets the width of the padding area to the left of an box.
   */
  paddingLeft?:
    | AddDollar<keyof typeof spacingProperties>
    | BoxConditions<AddDollar<keyof typeof spacingProperties>>;
  /**
   * The paddingLeft property sets the width of the padding area to the right of an box.
   */
  paddingRight?:
    | AddDollar<keyof typeof spacingProperties>
    | BoxConditions<AddDollar<keyof typeof spacingProperties>>;
  /**
   * The margin shorthand property sets the margin area on all four sides of an box.
   */
  margin?:
    | AddDollar<keyof typeof marginProperties>
    | BoxConditions<AddDollar<keyof typeof marginProperties>>;
  /**
   * The marginTop property sets the margin area on the top of an box.
   */
  marginTop?:
    | AddDollar<keyof typeof marginProperties>
    | BoxConditions<AddDollar<keyof typeof marginProperties>>;
  /**
   * The marginBottom property sets the margin area on the bottom of an box.
   */
  marginBottom?:
    | AddDollar<keyof typeof marginProperties>
    | BoxConditions<AddDollar<keyof typeof marginProperties>>;
  /**
   * The marginLeft property sets the margin area on the left side of an box.
   */
  marginLeft?:
    | AddDollar<keyof typeof marginProperties>
    | BoxConditions<AddDollar<keyof typeof marginProperties>>;
  /**
   * The marginRight property sets the margin area on the right side of an box.
   */
  marginRight?:
    | AddDollar<keyof typeof marginProperties>
    | BoxConditions<AddDollar<keyof typeof marginProperties>>;

  /**
   * The zIndex property specifies the stack order of the box.
   */
  zIndex?:
    | AddDollar<keyof typeof zIndexProperties>
    | BoxConditions<AddDollar<keyof typeof zIndexProperties>>;
  /**
   * The p shorthand property sets the margin area on all four sides of an box.
   */
  p?:
    | AddDollar<keyof typeof spacingProperties>
    | BoxConditions<AddDollar<keyof typeof spacingProperties>>;
  /**
   * The pl shorthand property sets the width of the padding area to the left of an box.
   */
  pl?:
    | AddDollar<keyof typeof spacingProperties>
    | BoxConditions<AddDollar<keyof typeof spacingProperties>>;
  /**
   * The pl shorthand property sets the width of the padding area to the right of an box.
   */
  pr?:
    | AddDollar<keyof typeof spacingProperties>
    | BoxConditions<AddDollar<keyof typeof spacingProperties>>;
  /**
   * The pt shorthand property sets the height of the padding area on the top of an box.
   */
  pt?:
    | AddDollar<keyof typeof spacingProperties>
    | BoxConditions<AddDollar<keyof typeof spacingProperties>>;
  /**
   * The pb shorthand property sets the height of the padding area on the botton of an box.
   */
  pb?:
    | AddDollar<keyof typeof spacingProperties>
    | BoxConditions<AddDollar<keyof typeof spacingProperties>>;
  /**
   * The px shorthand property defines the width of the left and right padding area of a box.
   */
  px?:
    | AddDollar<keyof typeof spacingProperties>
    | BoxConditions<AddDollar<keyof typeof spacingProperties>>;
  /**
   * The py pt shorthand property sets the height of the padding area at the top and bottom of a box.
   */
  py?:
    | AddDollar<keyof typeof spacingProperties>
    | BoxConditions<AddDollar<keyof typeof spacingProperties>>;
  /**
   * The paddingX shorthand property defines the width of the left and right padding area of a box.
   */
  paddingX?:
    | AddDollar<keyof typeof spacingProperties>
    | BoxConditions<AddDollar<keyof typeof spacingProperties>>;
  /**
   * The paddingY pt shorthand property sets the height of the padding area at the top and bottom of a box.
   */
  paddingY?:
    | AddDollar<keyof typeof spacingProperties>
    | BoxConditions<AddDollar<keyof typeof spacingProperties>>;
  /**
   * The m shorthand property sets the margin area on all four sides of an box.
   */
  m?:
    | AddDollar<keyof typeof marginProperties>
    | BoxConditions<AddDollar<keyof typeof marginProperties>>;
  /**
   * The mr property sets the margin area on the right side of an box.
   */
  mr?:
    | AddDollar<keyof typeof marginProperties>
    | BoxConditions<AddDollar<keyof typeof marginProperties>>;
  /**
   * The ml property sets the margin area on the left side of an box.
   */
  ml?:
    | AddDollar<keyof typeof marginProperties>
    | BoxConditions<AddDollar<keyof typeof marginProperties>>;
  /**
   * The mt property sets the margin area on the top of an box.
   */
  mt?:
    | AddDollar<keyof typeof marginProperties>
    | BoxConditions<AddDollar<keyof typeof marginProperties>>;
  /**
   * The marginBottom property sets the margin area on the bottom of an box.
   */
  mb?:
    | AddDollar<keyof typeof marginProperties>
    | BoxConditions<AddDollar<keyof typeof marginProperties>>;
  /**
   * The mx property defines the margin area on the left and right side of a box.
   */
  mx?:
    | AddDollar<keyof typeof marginProperties>
    | BoxConditions<AddDollar<keyof typeof marginProperties>>;
  /**
   * The my property defines the margin area on the top and bottom of a box
   */
  my?:
    | AddDollar<keyof typeof marginProperties>
    | BoxConditions<AddDollar<keyof typeof marginProperties>>;
  /**
   * The marginX property defines the margin area on the left and right side of a box.
   */
  marginX?:
    | AddDollar<keyof typeof marginProperties>
    | BoxConditions<AddDollar<keyof typeof marginProperties>>;
  /**
   * The marginY property defines the margin area on the top and bottom of a box
   */
  marginY?:
    | AddDollar<keyof typeof marginProperties>
    | BoxConditions<AddDollar<keyof typeof marginProperties>>;
  /**
   * The fontSize property sets the size of the box.
   */
  fontSize?:
    | AddDollar<keyof typeof fontSizeProperties>
    | BoxConditions<AddDollar<keyof typeof fontSizeProperties>>;
  /**
   * The fontWeight property sets how thick or thin characters in box should be displayed.
   */
  fontWeight?:
    | AddDollar<keyof typeof fontWeightProperties>
    | BoxConditions<AddDollar<keyof typeof fontWeightProperties>>;
  /**
   * The lineHeight property specifies the line height of the box.
   * @default base
   */
  lineHeight?:
    | AddDollar<keyof typeof lineHeightProperties>
    | BoxConditions<AddDollar<keyof typeof lineHeightProperties>>;
}
