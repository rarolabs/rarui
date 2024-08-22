import { Conditions } from "../index.types";

/** @license MIT License
 * Copyright (c) 2017-present, Fredrik Nicol
 * Copyright (c) 2021-present, Jonathan Neal
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * https://github.com/modulz/stitches/blob/74c3b96e5cadd7d1434a3c4bc5d7cb2089cc783a/packages/react/types/css.d.ts
 */

export {};

export interface StandardLonghandProperties {
  /**
   * The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.
   *
   *
   * **Initial value**: `normal`
   *
   */
  alignContent?: Property.AlignContent | Conditions<Property.AlignContent>;
  /**
   * The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
   *
   *
   * **Initial value**: `normal`
   *
   */
  alignItems?: Property.AlignItems | Conditions<Property.AlignItems>;
  /**
   * The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.
   *
   *
   * **Initial value**: `auto`
   *
   */
  alignSelf?: Property.AlignSelf | Conditions<Property.AlignSelf>;
  /**
   * The **`align-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their block axis.
   *
   *
   * **Initial value**: `normal`
   *
   */
  alignTracks?: Property.AlignTracks | Conditions<Property.AlignTracks>;
  /**
   * The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
   *
   *
   * **Initial value**: `0s`
   *
   */
  animationDelay?:
    | Property.AnimationDelay
    | Conditions<Property.AnimationDelay>;
  /**
   * The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
   *
   *
   * **Initial value**: `normal`
   *
   */
  animationDirection?:
    | Property.AnimationDirection
    | Conditions<Property.AnimationDirection>;
  /**
   * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
   *
   *
   * **Initial value**: `0s`
   *
   */
  animationDuration?:
    | Property.AnimationDuration
    | Conditions<Property.AnimationDuration>;
  /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   *
   *
   * **Initial value**: `none`
   *
   */
  animationFillMode?:
    | Property.AnimationFillMode
    | Conditions<Property.AnimationFillMode>;
  /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.
   *
   *
   * **Initial value**: `1`
   *
   */
  animationIterationCount?:
    | Property.AnimationIterationCount
    | Conditions<Property.AnimationIterationCount>;
  /**
   * The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.
   *
   *
   * **Initial value**: `none`
   *
   */
  animationName?: Property.AnimationName | Conditions<Property.AnimationName>;
  /**
   * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
   *
   *
   * **Initial value**: `running`
   *
   */
  animationPlayState?:
    | Property.AnimationPlayState
    | Conditions<Property.AnimationPlayState>;
  /**
   * The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.
   *
   *
   * **Initial value**: `ease`
   *
   */
  animationTimingFunction?:
    | Property.AnimationTimingFunction
    | Conditions<Property.AnimationTimingFunction>;
  /**
   * The `**appearance**` CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.
   *
   *
   * **Initial value**: `auto`
   *
   */
  appearance?: Property.Appearance | Conditions<Property.Appearance>;
  /**
   * The **`aspect-ratio`**  CSS property sets a **preferred aspect ratio** for the box, which will be used in the calculation of auto sizes and some other layout functions.
   *
   *
   * **Initial value**: `auto`
   *
   */
  aspectRatio?: Property.AspectRatio | Conditions<Property.AspectRatio>;
  /**
   * The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.
   *
   *
   * **Initial value**: `none`
   *
   */
  backdropFilter?:
    | Property.BackdropFilter
    | Conditions<Property.BackdropFilter>;
  /**
   * The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.
   *
   *
   * **Initial value**: `visible`
   *
   */
  backfaceVisibility?:
    | Property.BackfaceVisibility
    | Conditions<Property.BackfaceVisibility>;
  /**
   * The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
   *
   *
   * **Initial value**: `scroll`
   *
   */
  backgroundAttachment?:
    | Property.BackgroundAttachment
    | Conditions<Property.BackgroundAttachment>;
  /**
   * The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.
   *
   *
   * **Initial value**: `normal`
   *
   */
  backgroundBlendMode?:
    | Property.BackgroundBlendMode
    | Conditions<Property.BackgroundBlendMode>;
  /**
   * The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.
   *
   *
   * **Initial value**: `border-box`
   *
   */
  backgroundClip?:
    | Property.BackgroundClip
    | Conditions<Property.BackgroundClip>;
  /**
   * The **`background-color`** CSS property sets the background color of an element.
   *
   *
   * **Initial value**: `transparent`
   *
   */
  backgroundColor?:
    | Property.BackgroundColor
    | Conditions<Property.BackgroundColor>;
  /**
   * The **`background-image`** CSS property sets one or more background images on an element.
   *
   *
   * **Initial value**: `none`
   *
   */
  backgroundImage?:
    | Property.BackgroundImage
    | Conditions<Property.BackgroundImage>;
  /**
   * The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.
   *
   *
   * **Initial value**: `padding-box`
   *
   */
  backgroundOrigin?:
    | Property.BackgroundOrigin
    | Conditions<Property.BackgroundOrigin>;
  /**
   * The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   *
   * **Initial value**: `left`
   *
   */
  backgroundPositionX?:
    | Property.BackgroundPositionX
    | Conditions<Property.BackgroundPositionX>;
  /**
   * The **`background-position-y`** CSS property sets the initial vertical position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   *
   * **Initial value**: `top`
   *
   */
  backgroundPositionY?:
    | Property.BackgroundPositionY
    | Conditions<Property.BackgroundPositionY>;
  /**
   * The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
   *
   *
   * **Initial value**: `repeat`
   *
   */
  backgroundRepeat?:
    | Property.BackgroundRepeat
    | Conditions<Property.BackgroundRepeat>;
  /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   *
   * **Initial value**: `auto auto`
   *
   */
  backgroundSize?:
    | Property.BackgroundSize
    | Conditions<Property.BackgroundSize>;
  /**
   *
   * **Initial value**: `clip`
   */
  blockOverflow?: Property.BlockOverflow | Conditions<Property.BlockOverflow>;
  /**
   * The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  blockSize?: Property.BlockSize | Conditions<Property.BlockSize>;
  /**
   * The **`border-block-color`** CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  borderBlockColor?:
    | Property.BorderBlockColor
    | Conditions<Property.BorderBlockColor>;
  /**
   * The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  borderBlockEndColor?:
    | Property.BorderBlockEndColor
    | Conditions<Property.BorderBlockEndColor>;
  /**
   * The **`border-block-end-style`** CSS property defines the style of the logical block-end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `none`
   *
   */
  borderBlockEndStyle?:
    | Property.BorderBlockEndStyle
    | Conditions<Property.BorderBlockEndStyle>;
  /**
   * The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `medium`
   *
   */
  borderBlockEndWidth?:
    | Property.BorderBlockEndWidth
    | Conditions<Property.BorderBlockEndWidth>;
  /**
   * The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  borderBlockStartColor?:
    | Property.BorderBlockStartColor
    | Conditions<Property.BorderBlockStartColor>;
  /**
   * The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `none`
   *
   */
  borderBlockStartStyle?:
    | Property.BorderBlockStartStyle
    | Conditions<Property.BorderBlockStartStyle>;
  /**
   * The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `medium`
   *
   */
  borderBlockStartWidth?:
    | Property.BorderBlockStartWidth
    | Conditions<Property.BorderBlockStartWidth>;
  /**
   * The **`border-block-style`** CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `none`
   *
   */
  borderBlockStyle?:
    | Property.BorderBlockStyle
    | Conditions<Property.BorderBlockStyle>;
  /**
   * The **`border-block-width`** CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `medium`
   *
   */
  borderBlockWidth?:
    | Property.BorderBlockWidth
    | Conditions<Property.BorderBlockWidth>;
  /**
   * The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  borderBottomColor?:
    | Property.BorderBottomColor
    | Conditions<Property.BorderBottomColor>;
  /**
   * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   *
   * **Initial value**: `0`
   *
   */
  borderBottomLeftRadius?:
    | Property.BorderBottomLeftRadius
    | Conditions<Property.BorderBottomLeftRadius>;
  /**
   * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   *
   * **Initial value**: `0`
   *
   */
  borderBottomRightRadius?:
    | Property.BorderBottomRightRadius
    | Conditions<Property.BorderBottomRightRadius>;
  /**
   * The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.
   *
   *
   * **Initial value**: `none`
   *
   */
  borderBottomStyle?:
    | Property.BorderBottomStyle
    | Conditions<Property.BorderBottomStyle>;
  /**
   * The **`border-bottom-width`** CSS property sets the width of the bottom border of an element.
   *
   *
   * **Initial value**: `medium`
   *
   */
  borderBottomWidth?:
    | Property.BorderBottomWidth
    | Conditions<Property.BorderBottomWidth>;
  /**
   * The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.
   *
   *
   * **Initial value**: `separate`
   *
   */
  borderCollapse?:
    | Property.BorderCollapse
    | Conditions<Property.BorderCollapse>;
  /**
   * The **`border-end-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   *
   * **Initial value**: `0`
   *
   */
  borderEndEndRadius?:
    | Property.BorderEndEndRadius
    | Conditions<Property.BorderEndEndRadius>;
  /**
   * The **`border-end-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   *
   * **Initial value**: `0`
   *
   */
  borderEndStartRadius?:
    | Property.BorderEndStartRadius
    | Conditions<Property.BorderEndStartRadius>;
  /**
   * The **`border-image-outset`** CSS property sets the distance by which an element's border image is set out from its border box.
   *
   *
   * **Initial value**: `0`
   *
   */
  borderImageOutset?:
    | Property.BorderImageOutset
    | Conditions<Property.BorderImageOutset>;
  /**
   * The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.
   *
   *
   * **Initial value**: `stretch`
   *
   */
  borderImageRepeat?:
    | Property.BorderImageRepeat
    | Conditions<Property.BorderImageRepeat>;
  /**
   * The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.
   *
   *
   * **Initial value**: `100%`
   *
   */
  borderImageSlice?:
    | Property.BorderImageSlice
    | Conditions<Property.BorderImageSlice>;
  /**
   * The **`border-image-source`** CSS property sets the source image used to create an element's border image.
   *
   *
   * **Initial value**: `none`
   *
   */
  borderImageSource?:
    | Property.BorderImageSource
    | Conditions<Property.BorderImageSource>;
  /**
   * The **`border-image-width`** CSS property sets the width of an element's border image.
   *
   *
   * **Initial value**: `1`
   *
   */
  borderImageWidth?:
    | Property.BorderImageWidth
    | Conditions<Property.BorderImageWidth>;
  /**
   * The **`border-inline-color`** CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  borderInlineColor?:
    | Property.BorderInlineColor
    | Conditions<Property.BorderInlineColor>;
  /**
   * The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  borderInlineEndColor?:
    | Property.BorderInlineEndColor
    | Conditions<Property.BorderInlineEndColor>;
  /**
   * The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `none`
   *
   */
  borderInlineEndStyle?:
    | Property.BorderInlineEndStyle
    | Conditions<Property.BorderInlineEndStyle>;
  /**
   * The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `medium`
   *
   */
  borderInlineEndWidth?:
    | Property.BorderInlineEndWidth
    | Conditions<Property.BorderInlineEndWidth>;
  /**
   * The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  borderInlineStartColor?:
    | Property.BorderInlineStartColor
    | Conditions<Property.BorderInlineStartColor>;
  /**
   * The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `none`
   *
   */
  borderInlineStartStyle?:
    | Property.BorderInlineStartStyle
    | Conditions<Property.BorderInlineStartStyle>;
  /**
   * The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `medium`
   *
   */
  borderInlineStartWidth?:
    | Property.BorderInlineStartWidth
    | Conditions<Property.BorderInlineStartWidth>;
  /**
   * The **`border-inline-style`** CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `none`
   *
   */
  borderInlineStyle?:
    | Property.BorderInlineStyle
    | Conditions<Property.BorderInlineStyle>;
  /**
   * The **`border-inline-width`** CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `medium`
   *
   */
  borderInlineWidth?:
    | Property.BorderInlineWidth
    | Conditions<Property.BorderInlineWidth>;
  /**
   * The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  borderLeftColor?:
    | Property.BorderLeftColor
    | Conditions<Property.BorderLeftColor>;
  /**
   * The **`border-left-style`** CSS property sets the line style of an element's left `border`.
   *
   *
   * **Initial value**: `none`
   *
   */
  borderLeftStyle?:
    | Property.BorderLeftStyle
    | Conditions<Property.BorderLeftStyle>;
  /**
   * The **`border-left-width`** CSS property sets the width of the left border of an element.
   *
   *
   * **Initial value**: `medium`
   *
   */
  borderLeftWidth?:
    | Property.BorderLeftWidth
    | Conditions<Property.BorderLeftWidth>;
  /**
   * The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  borderRightColor?:
    | Property.BorderRightColor
    | Conditions<Property.BorderRightColor>;
  /**
   * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
   *
   *
   * **Initial value**: `none`
   *
   */
  borderRightStyle?:
    | Property.BorderRightStyle
    | Conditions<Property.BorderRightStyle>;
  /**
   * The **`border-right-width`** CSS property sets the width of the right border of an element.
   *
   *
   * **Initial value**: `medium`
   *
   */
  borderRightWidth?:
    | Property.BorderRightWidth
    | Conditions<Property.BorderRightWidth>;
  /**
   * The **`border-spacing`** CSS property sets the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.
   *
   *
   * **Initial value**: `0`
   *
   */
  borderSpacing?: Property.BorderSpacing | Conditions<Property.BorderSpacing>;
  /**
   * The **`border-start-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   *
   * **Initial value**: `0`
   *
   */
  borderStartEndRadius?:
    | Property.BorderStartEndRadius
    | Conditions<Property.BorderStartEndRadius>;
  /**
   * The **`border-start-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   *
   * **Initial value**: `0`
   *
   */
  borderStartStartRadius?:
    | Property.BorderStartStartRadius
    | Conditions<Property.BorderStartStartRadius>;
  /**
   * The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  borderTopColor?:
    | Property.BorderTopColor
    | Conditions<Property.BorderTopColor>;
  /**
   * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   *
   * **Initial value**: `0`
   *
   */
  borderTopLeftRadius?:
    | Property.BorderTopLeftRadius
    | Conditions<Property.BorderTopLeftRadius>;
  /**
   * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   *
   * **Initial value**: `0`
   *
   */
  borderTopRightRadius?:
    | Property.BorderTopRightRadius
    | Conditions<Property.BorderTopRightRadius>;
  /**
   * The **`border-top-style`** CSS property sets the line style of an element's top `border`.
   *
   *
   * **Initial value**: `none`
   *
   */
  borderTopStyle?:
    | Property.BorderTopStyle
    | Conditions<Property.BorderTopStyle>;
  /**
   * The **`border-top-width`** CSS property sets the width of the top border of an element.
   *
   *
   * **Initial value**: `medium`
   *
   */
  borderTopWidth?:
    | Property.BorderTopWidth
    | Conditions<Property.BorderTopWidth>;
  /**
   * The **`bottom`** CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.
   *
   *
   * **Initial value**: `auto`
   *
   */
  bottom?: Property.Bottom | Conditions<Property.Bottom>;
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   *
   *
   * **Initial value**: `slice`
   *
   */
  boxDecorationBreak?:
    | Property.BoxDecorationBreak
    | Conditions<Property.BoxDecorationBreak>;
  /**
   * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.
   *
   *
   * **Initial value**: `none`
   *
   */
  boxShadow?: Property.BoxShadow | Conditions<Property.BoxShadow>;
  /**
   * The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.
   *
   *
   * **Initial value**: `content-box`
   *
   */
  boxSizing?: Property.BoxSizing | Conditions<Property.BoxSizing>;
  /**
   * The **`break-after`** CSS property sets how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.
   *
   *
   * **Initial value**: `auto`
   *
   */
  breakAfter?: Property.BreakAfter | Conditions<Property.BreakAfter>;
  /**
   * The **`break-before`** CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.
   *
   *
   * **Initial value**: `auto`
   *
   */
  breakBefore?: Property.BreakBefore | Conditions<Property.BreakBefore>;
  /**
   * The **`break-inside`** CSS property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.
   *
   *
   * **Initial value**: `auto`
   *
   */
  breakInside?: Property.BreakInside | Conditions<Property.BreakInside>;
  /**
   * The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.
   *
   *
   * **Initial value**: `top`
   *
   */
  captionSide?: Property.CaptionSide | Conditions<Property.CaptionSide>;
  /**
   * The **`caret-color`** CSS property sets the color of the **insertion caret**, the visible marker where the next character typed will be inserted. This is sometimes referred to as the **text input cursor**. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.
   *
   *
   * **Initial value**: `auto`
   *
   */
  caretColor?: Property.CaretColor | Conditions<Property.CaretColor>;
  /**
   * The **`clear`** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.
   *
   *
   * **Initial value**: `none`
   *
   */
  clear?: Property.Clear | Conditions<Property.Clear>;
  /**
   * The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.
   *
   *
   * **Initial value**: `none`
   *
   */
  clipPath?: Property.ClipPath | Conditions<Property.ClipPath>;
  /**
   * The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `<currentcolor>` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.
   *
   *
   * **Initial value**: Varies from one browser to another
   *
   */
  color?: Property.Color | Conditions<Property.Color>;
  /**
   * The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
   *
   *
   * **Initial value**: `economy`
   *
   */
  colorAdjust?: Property.ColorAdjust | Conditions<Property.ColorAdjust>;
  /**
   * The **`color-scheme`** CSS property allows an element to indicate which color schemes it can comfortably be rendered in.
   *
   *
   * **Initial value**: `normal`
   *
   */
  colorScheme?: Property.ColorScheme | Conditions<Property.ColorScheme>;
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   *
   *
   * **Initial value**: `auto`
   *
   */
  columnCount?: Property.ColumnCount | Conditions<Property.ColumnCount>;
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   *
   *
   * **Initial value**: `balance`
   *
   */
  columnFill?: Property.ColumnFill | Conditions<Property.ColumnFill>;
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   *
   * **Initial value**: `normal`
   *
   */
  columnGap?: Property.ColumnGap | Conditions<Property.ColumnGap>;
  /**
   * The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  columnRuleColor?:
    | Property.ColumnRuleColor
    | Conditions<Property.ColumnRuleColor>;
  /**
   * The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.
   *
   *
   * **Initial value**: `none`
   *
   */
  columnRuleStyle?:
    | Property.ColumnRuleStyle
    | Conditions<Property.ColumnRuleStyle>;
  /**
   * The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.
   *
   *
   * **Initial value**: `medium`
   *
   */
  columnRuleWidth?:
    | Property.ColumnRuleWidth
    | Conditions<Property.ColumnRuleWidth>;
  /**
   * The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.
   *
   *
   * **Initial value**: `none`
   *
   */
  columnSpan?: Property.ColumnSpan | Conditions<Property.ColumnSpan>;
  /**
   * The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.
   *
   *
   * **Initial value**: `auto`
   *
   */
  columnWidth?: Property.ColumnWidth | Conditions<Property.ColumnWidth>;
  /**
   * The **`contain`** CSS property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page, leading to obvious performance benefits.
   *
   *
   * **Initial value**: `none`
   *
   */
  contain?: Property.Contain | Conditions<Property.Contain>;
  /**
   * The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are **anonymous replaced elements**_._
   *
   *
   * **Initial value**: `normal`
   *
   */
  content?: Property.Content | Conditions<Property.Content>;
  /**
   * The **`content-visibility`** CSS property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed. Basically it enables the user agent to skip an element's rendering work, including layout and painting, until it is needed, makes the initial page load much faster.
   *
   *
   * **Initial value**: `visible`
   *
   */
  contentVisibility?:
    | Property.ContentVisibility
    | Conditions<Property.ContentVisibility>;
  /**
   * The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.
   *
   *
   * **Initial value**: `none`
   *
   */
  counterIncrement?:
    | Property.CounterIncrement
    | Conditions<Property.CounterIncrement>;
  /**
   * The **`counter-reset`** CSS property resets a CSS counter to a given value.
   *
   *
   * **Initial value**: `none`
   *
   */
  counterReset?: Property.CounterReset | Conditions<Property.CounterReset>;
  /**
   * The **`counter-set`** CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element.
   *
   *
   * **Initial value**: `none`
   *
   */
  counterSet?: Property.CounterSet | Conditions<Property.CounterSet>;
  /**
   * The **`cursor`** CSS property sets the type of mouse cursor, if any, to show when the mouse pointer is over an element.
   *
   *
   * **Initial value**: `auto`
   *
   */
  cursor?: Property.Cursor | Conditions<Property.Cursor>;
  /**
   * The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).
   *
   *
   * **Initial value**: `ltr`
   *
   */
  direction?: Property.Direction | Conditions<Property.Direction>;
  /**
   * The **`display`** CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.
   *
   *
   * **Initial value**: `inline`
   *
   */
  display?: Property.Display | Conditions<Property.Display>;
  /**
   * The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.
   *
   *
   * **Initial value**: `show`
   *
   */
  emptyCells?: Property.EmptyCells | Conditions<Property.EmptyCells>;
  /**
   * The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
   *
   *
   * **Initial value**: `none`
   *
   */
  filter?: Property.Filter | Conditions<Property.Filter>;
  /**
   * The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  flexBasis?: Property.FlexBasis | Conditions<Property.FlexBasis>;
  /**
   * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   *
   * **Initial value**: `row`
   *
   */
  flexDirection?: Property.FlexDirection | Conditions<Property.FlexDirection>;
  /**
   * The **`flex-grow`** CSS property sets the flex grow factor of a flex item main size.
   *
   *
   * **Initial value**: `0`
   *
   */
  flexGrow?: Property.FlexGrow | Conditions<Property.FlexGrow>;
  /**
   * The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.
   *
   *
   * **Initial value**: `1`
   *
   */
  flexShrink?: Property.FlexShrink | Conditions<Property.FlexShrink>;
  /**
   * The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
   *
   *
   * **Initial value**: `nowrap`
   *
   */
  flexWrap?: Property.FlexWrap | Conditions<Property.FlexWrap>;
  /**
   * The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).
   *
   *
   * **Initial value**: `none`
   *
   */
  float?: Property.Float | Conditions<Property.Float>;
  /**
   * The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
   *
   *
   * **Initial value**: depends on user agent
   *
   */
  fontFamily?: Property.FontFamily | Conditions<Property.FontFamily>;
  /**
   * The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.
   *
   *
   * **Initial value**: `normal`
   *
   */
  fontFeatureSettings?:
    | Property.FontFeatureSettings
    | Conditions<Property.FontFeatureSettings>;
  /**
   * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.
   *
   *
   * **Initial value**: `auto`
   *
   */
  fontKerning?: Property.FontKerning | Conditions<Property.FontKerning>;
  /**
   * The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.
   *
   *
   * **Initial value**: `normal`
   *
   */
  fontLanguageOverride?:
    | Property.FontLanguageOverride
    | Conditions<Property.FontLanguageOverride>;
  /**
   * The **`font-optical-sizing`** CSS property sets whether text rendering is optimized for viewing at different sizes.
   *
   *
   * **Initial value**: `auto`
   *
   */
  fontOpticalSizing?:
    | Property.FontOpticalSizing
    | Conditions<Property.FontOpticalSizing>;
  /**
   * The **`font-size`** CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative `<length>` units, such as `em`, `ex`, and so forth.
   *
   *
   * **Initial value**: `medium`
   *
   */
  fontSize?: Property.FontSize | Conditions<Property.FontSize>;
  /**
   * The **`font-size-adjust`** CSS property sets the size of lower-case letters relative to the current font size (which defines the size of upper-case letters).
   *
   *
   * **Initial value**: `none`
   *
   */
  fontSizeAdjust?:
    | Property.FontSizeAdjust
    | Conditions<Property.FontSizeAdjust>;
  /**
   * The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.
   *
   *
   * **Initial value**: `auto`
   *
   */
  fontSmooth?: Property.FontSmooth | Conditions<Property.FontSmooth>;
  /**
   * The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.
   *
   *
   * **Initial value**: `normal`
   *
   */
  fontStretch?: Property.FontStretch | Conditions<Property.FontStretch>;
  /**
   * The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`.
   *
   *
   * **Initial value**: `normal`
   *
   */
  fontStyle?: Property.FontStyle | Conditions<Property.FontStyle>;
  /**
   * The **`font-synthesis`** CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.
   *
   *
   * **Initial value**: `weight style`
   *
   */
  fontSynthesis?: Property.FontSynthesis | Conditions<Property.FontSynthesis>;
  /**
   * The **`font-variant`** CSS shorthand property allows you to set all the font variants for a font.
   *
   *
   * **Initial value**: `normal`
   *
   */
  fontVariant?: Property.FontVariant | Conditions<Property.FontVariant>;
  /**
   * The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.
   *
   *
   * **Initial value**: `normal`
   *
   */
  fontVariantCaps?:
    | Property.FontVariantCaps
    | Conditions<Property.FontVariantCaps>;
  /**
   * The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.
   *
   *
   * **Initial value**: `normal`
   *
   */
  fontVariantEastAsian?:
    | Property.FontVariantEastAsian
    | Conditions<Property.FontVariantEastAsian>;
  /**
   * The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
   *
   *
   * **Initial value**: `normal`
   *
   */
  fontVariantLigatures?:
    | Property.FontVariantLigatures
    | Conditions<Property.FontVariantLigatures>;
  /**
   * The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
   *
   *
   * **Initial value**: `normal`
   *
   */
  fontVariantNumeric?:
    | Property.FontVariantNumeric
    | Conditions<Property.FontVariantNumeric>;
  /**
   * The **`font-variant-position`** CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.
   *
   *
   * **Initial value**: `normal`
   *
   */
  fontVariantPosition?:
    | Property.FontVariantPosition
    | Conditions<Property.FontVariantPosition>;
  /**
   * The **`font-variation-settings`** CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.
   *
   *
   * **Initial value**: `normal`
   *
   */
  fontVariationSettings?:
    | Property.FontVariationSettings
    | Conditions<Property.FontVariationSettings>;
  /**
   * The **`font-weight`** CSS property sets the weight (or boldness) of the font. The weights available depend on the `font-family` that is currently set.
   *
   *
   * **Initial value**: `normal`
   *
   */
  fontWeight?: Property.FontWeight | Conditions<Property.FontWeight>;
  /**
   * The **`forced-color-adjust`** CSS property allows authors to opt certain elements out of forced colors mode. This then restores the control of those values to CSS.
   *
   *
   * **Initial value**: `auto`
   *
   */
  forcedColorAdjust?:
    | Property.ForcedColorAdjust
    | Conditions<Property.ForcedColorAdjust>;
  /**
   * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.
   *
   *
   * **Initial value**: `auto`
   *
   */
  gridAutoColumns?:
    | Property.GridAutoColumns
    | Conditions<Property.GridAutoColumns>;
  /**
   * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
   *
   *
   * **Initial value**: `row`
   *
   */
  gridAutoFlow?: Property.GridAutoFlow | Conditions<Property.GridAutoFlow>;
  /**
   * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track or pattern of tracks.
   *
   *
   * **Initial value**: `auto`
   *
   */
  gridAutoRows?: Property.GridAutoRows | Conditions<Property.GridAutoRows>;
  /**
   * The **`grid-column-end`** CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
   *
   *
   * **Initial value**: `auto`
   *
   */
  gridColumnEnd?: Property.GridColumnEnd | Conditions<Property.GridColumnEnd>;
  /**
   * The **`grid-column-start`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
   *
   *
   * **Initial value**: `auto`
   *
   */
  gridColumnStart?:
    | Property.GridColumnStart
    | Conditions<Property.GridColumnStart>;
  /**
   * The **`grid-row-end`** CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.
   *
   *
   * **Initial value**: `auto`
   *
   */
  gridRowEnd?: Property.GridRowEnd | Conditions<Property.GridRowEnd>;
  /**
   * The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
   *
   *
   * **Initial value**: `auto`
   *
   */
  gridRowStart?: Property.GridRowStart | Conditions<Property.GridRowStart>;
  /**
   * The **`grid-template-areas`** CSS property specifies named grid areas, establishing the cells in the grid and assigning them names.
   *
   *
   * **Initial value**: `none`
   *
   */
  gridTemplateAreas?:
    | Property.GridTemplateAreas
    | Conditions<Property.GridTemplateAreas>;
  /**
   * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.
   *
   *
   * **Initial value**: `none`
   *
   */
  gridTemplateColumns?:
    | Property.GridTemplateColumns
    | Conditions<Property.GridTemplateColumns>;
  /**
   * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.
   *
   *
   * **Initial value**: `none`
   *
   */
  gridTemplateRows?:
    | Property.GridTemplateRows
    | Conditions<Property.GridTemplateRows>;
  /**
   * The **`hanging-punctuation`** CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.
   *
   *
   * **Initial value**: `none`
   *
   */
  hangingPunctuation?:
    | Property.HangingPunctuation
    | Conditions<Property.HangingPunctuation>;
  /**
   * The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area. It is also possible to pass a specific value.
   *
   *
   * **Initial value**: `auto`
   *
   */
  height?: Property.Height | Conditions<Property.Height>;
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   *
   * **Initial value**: `manual`
   *
   */
  hyphens?: Property.Hyphens | Conditions<Property.Hyphens>;
  /**
   * The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image. It should _not_ be used for any other orientation adjustments; instead, the `transform` property should be used with the `rotate` `<transform-function>`.
   *
   *
   * **Initial value**: `from-image`
   *
   */
  imageOrientation?:
    | Property.ImageOrientation
    | Conditions<Property.ImageOrientation>;
  /**
   * The **`image-rendering`** CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.
   *
   *
   * **Initial value**: `auto`
   *
   */
  imageRendering?:
    | Property.ImageRendering
    | Conditions<Property.ImageRendering>;
  /**
   *
   * **Initial value**: `1dppx`
   */
  imageResolution?:
    | Property.ImageResolution
    | Conditions<Property.ImageResolution>;
  /**
   * The `initial-letter` CSS property sets styling for dropped, raised, and sunken initial letters.
   *
   *
   * **Initial value**: `normal`
   *
   */
  initialLetter?: Property.InitialLetter | Conditions<Property.InitialLetter>;
  /**
   * The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  inlineSize?: Property.InlineSize | Conditions<Property.InlineSize>;
  /**
   * The **`inset`** CSS property is a shorthand that corresponds to the `top`, `right`, `bottom`, and/or `left` properties. It has the same multi-value syntax of the `margin` shorthand.
   *
   *
   * **Initial value**: `auto`
   *
   */
  inset?: Property.Inset | Conditions<Property.Inset>;
  /**
   * The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  insetBlock?: Property.InsetBlock | Conditions<Property.InsetBlock>;
  /**
   * The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  insetBlockEnd?: Property.InsetBlockEnd | Conditions<Property.InsetBlockEnd>;
  /**
   * The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  insetBlockStart?:
    | Property.InsetBlockStart
    | Conditions<Property.InsetBlockStart>;
  /**
   * The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  insetInline?: Property.InsetInline | Conditions<Property.InsetInline>;
  /**
   * The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  insetInlineEnd?:
    | Property.InsetInlineEnd
    | Conditions<Property.InsetInlineEnd>;
  /**
   * The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  insetInlineStart?:
    | Property.InsetInlineStart
    | Conditions<Property.InsetInlineStart>;
  /**
   * The **`isolation`** CSS property determines whether an element must create a new stacking context.
   *
   *
   * **Initial value**: `auto`
   *
   */
  isolation?: Property.Isolation | Conditions<Property.Isolation>;
  /**
   * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
   *
   *
   * **Initial value**: `normal`
   *
   */
  justifyContent?:
    | Property.JustifyContent
    | Conditions<Property.JustifyContent>;
  /**
   * The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
   *
   *
   * **Initial value**: `legacy`
   *
   */
  justifyItems?: Property.JustifyItems | Conditions<Property.JustifyItems>;
  /**
   * The CSS **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.
   *
   *
   * **Initial value**: `auto`
   *
   */
  justifySelf?: Property.JustifySelf | Conditions<Property.JustifySelf>;
  /**
   * The **`justify-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their inline axis.
   *
   *
   * **Initial value**: `normal`
   *
   */
  justifyTracks?: Property.JustifyTracks | Conditions<Property.JustifyTracks>;
  /**
   * The **`left`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
   *
   *
   * **Initial value**: `auto`
   *
   */
  left?: Property.Left | Conditions<Property.Left>;
  /**
   * The **`letter-spacing`** CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of `letter-spacing` causes characters to spread farther apart, while negative values of `letter-spacing` bring characters closer together.
   *
   *
   * **Initial value**: `normal`
   *
   */
  letterSpacing?: Property.LetterSpacing | Conditions<Property.LetterSpacing>;
  /**
   * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
   *
   *
   * **Initial value**: `auto`
   *
   */
  lineBreak?: Property.LineBreak | Conditions<Property.LineBreak>;
  /**
   * The **`line-height`** CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   *
   * **Initial value**: `normal`
   *
   */
  lineHeight?: Property.LineHeight | Conditions<Property.LineHeight>;
  /**
   * The **`line-height-step`** CSS property sets the step unit for line box heights. When the property is set, line box heights are rounded up to the closest multiple of the unit.
   *
   *
   * **Initial value**: `0`
   *
   */
  lineHeightStep?:
    | Property.LineHeightStep
    | Conditions<Property.LineHeightStep>;
  /**
   * The **`list-style-image`** CSS property sets an image to be used as the list item marker.
   *
   *
   * **Initial value**: `none`
   *
   */
  listStyleImage?:
    | Property.ListStyleImage
    | Conditions<Property.ListStyleImage>;
  /**
   * The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.
   *
   *
   * **Initial value**: `outside`
   *
   */
  listStylePosition?:
    | Property.ListStylePosition
    | Conditions<Property.ListStylePosition>;
  /**
   * The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.
   *
   *
   * **Initial value**: `disc`
   *
   */
  listStyleType?: Property.ListStyleType | Conditions<Property.ListStyleType>;
  /**
   * The **`margin-block`** CSS shorthand property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  marginBlock?: Property.MarginBlock | Conditions<Property.MarginBlock>;
  /**
   * The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  marginBlockEnd?:
    | Property.MarginBlockEnd
    | Conditions<Property.MarginBlockEnd>;
  /**
   * The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  marginBlockStart?:
    | Property.MarginBlockStart
    | Conditions<Property.MarginBlockStart>;
  /**
   * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   *
   * **Initial value**: `0`
   *
   */
  marginBottom?: Property.MarginBottom | Conditions<Property.MarginBottom>;
  /**
   * The **`margin-inline`** CSS shorthand property is a shorthand property that defines both the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  marginInline?: Property.MarginInline | Conditions<Property.MarginInline>;
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `0`
   *
   */
  marginInlineEnd?:
    | Property.MarginInlineEnd
    | Conditions<Property.MarginInlineEnd>;
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `0`
   *
   */
  marginInlineStart?:
    | Property.MarginInlineStart
    | Conditions<Property.MarginInlineStart>;
  /**
   * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   *
   * **Initial value**: `0`
   *
   */
  marginLeft?: Property.MarginLeft | Conditions<Property.MarginLeft>;
  /**
   * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   *
   * **Initial value**: `0`
   *
   */
  marginRight?: Property.MarginRight | Conditions<Property.MarginRight>;
  /**
   * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   *
   * **Initial value**: `0`
   *
   */
  marginTop?: Property.MarginTop | Conditions<Property.MarginTop>;
  /**
   * The **`mask-border-mode`** CSS property specifies the blending mode used in a mask border.
   *
   *
   * **Initial value**: `alpha`
   */
  maskBorderMode?:
    | Property.MaskBorderMode
    | Conditions<Property.MaskBorderMode>;
  /**
   * The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.
   *
   *
   * **Initial value**: `0`
   *
   */
  maskBorderOutset?:
    | Property.MaskBorderOutset
    | Conditions<Property.MaskBorderOutset>;
  /**
   * The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.
   *
   *
   * **Initial value**: `stretch`
   *
   */
  maskBorderRepeat?:
    | Property.MaskBorderRepeat
    | Conditions<Property.MaskBorderRepeat>;
  /**
   * The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.
   *
   *
   * **Initial value**: `0`
   *
   */
  maskBorderSlice?:
    | Property.MaskBorderSlice
    | Conditions<Property.MaskBorderSlice>;
  /**
   * The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.
   *
   *
   * **Initial value**: `none`
   *
   */
  maskBorderSource?:
    | Property.MaskBorderSource
    | Conditions<Property.MaskBorderSource>;
  /**
   * The **`mask-border-width`** CSS property sets the width of an element's mask border.
   *
   *
   * **Initial value**: `auto`
   *
   */
  maskBorderWidth?:
    | Property.MaskBorderWidth
    | Conditions<Property.MaskBorderWidth>;
  /**
   * The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.
   *
   *
   * **Initial value**: `border-box`
   *
   */
  maskClip?: Property.MaskClip | Conditions<Property.MaskClip>;
  /**
   * The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
   *
   *
   * **Initial value**: `add`
   *
   */
  maskComposite?: Property.MaskComposite | Conditions<Property.MaskComposite>;
  /**
   * The **`mask-image`** CSS property sets the image that is used as mask layer for an element.
   *
   *
   * **Initial value**: `none`
   *
   */
  maskImage?: Property.MaskImage | Conditions<Property.MaskImage>;
  /**
   * The **`mask-mode`** CSS property sets whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.
   *
   *
   * **Initial value**: `match-source`
   *
   */
  maskMode?: Property.MaskMode | Conditions<Property.MaskMode>;
  /**
   * The **`mask-origin`** CSS property sets the origin of a mask.
   *
   *
   * **Initial value**: `border-box`
   *
   */
  maskOrigin?: Property.MaskOrigin | Conditions<Property.MaskOrigin>;
  /**
   * The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.
   *
   *
   * **Initial value**: `center`
   *
   */
  maskPosition?: Property.MaskPosition | Conditions<Property.MaskPosition>;
  /**
   * The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   *
   *
   * **Initial value**: `no-repeat`
   *
   */
  maskRepeat?: Property.MaskRepeat | Conditions<Property.MaskRepeat>;
  /**
   * The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.
   *
   *
   * **Initial value**: `auto`
   *
   */
  maskSize?: Property.MaskSize | Conditions<Property.MaskSize>;
  /**
   * The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.
   *
   *
   * **Initial value**: `luminance`
   *
   */
  maskType?: Property.MaskType | Conditions<Property.MaskType>;
  /**
   * The `math-style` property indicates whether MathML equations should render with normal or compact height.
   *
   *
   * **Initial value**: `normal`
   *
   */
  mathStyle?: Property.MathStyle | Conditions<Property.MathStyle>;
  /**
   * The `**max-block-size**` CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by `writing-mode`. That is, if the writing direction is horizontal, then `max-block-size` is equivalent to `max-height`; if the writing direction is vertical, `max-block-size` is the same as `max-width`.
   *
   *
   * **Initial value**: `0`
   *
   */
  maxBlockSize?: Property.MaxBlockSize | Conditions<Property.MaxBlockSize>;
  /**
   * The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`. It is also possible to pass a specific value.
   *
   *
   * **Initial value**: `none`
   *
   */
  maxHeight?: Property.MaxHeight | Conditions<Property.MaxHeight>;
  /**
   * The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.
   *
   *
   * **Initial value**: `0`
   *
   */
  maxInlineSize?: Property.MaxInlineSize | Conditions<Property.MaxInlineSize>;
  /**
   *
   * **Initial value**: `none`
   */
  maxLines?: Property.MaxLines | Conditions<Property.MaxLines>;
  /**
   * The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`. It is also possible to pass a specific value.
   *
   *
   * **Initial value**: `none`
   *
   */
  maxWidth?: Property.MaxWidth | Conditions<Property.MaxWidth>;
  /**
   * The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   *
   * **Initial value**: `0`
   *
   */
  minBlockSize?: Property.MinBlockSize | Conditions<Property.MinBlockSize>;
  /**
   * The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`. It is also possible to pass a specific value.
   *
   *
   * **Initial value**: `auto`
   *
   */
  minHeight?: Property.MinHeight | Conditions<Property.MinHeight>;
  /**
   * The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   *
   * **Initial value**: `0`
   *
   */
  minInlineSize?: Property.MinInlineSize | Conditions<Property.MinInlineSize>;
  /**
   * The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`. It is also possible to pass a specific value.
   *
   *
   * **Initial value**: `auto`
   *
   */
  minWidth?: Property.MinWidth | Conditions<Property.MinWidth>;
  /**
   * The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.
   *
   *
   * **Initial value**: `normal`
   *
   */
  mixBlendMode?: Property.MixBlendMode | Conditions<Property.MixBlendMode>;
  /**
   * The **`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.
   *
   *
   * **Initial value**: `0`
   *
   */
  motionDistance?:
    | Property.OffsetDistance
    | Conditions<Property.OffsetDistance>;
  /**
   * The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.
   *
   *
   * **Initial value**: `none`
   *
   */
  motionPath?: Property.OffsetPath | Conditions<Property.OffsetPath>;
  /**
   * The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  motionRotation?: Property.OffsetRotate | Conditions<Property.OffsetRotate>;
  /**
   * The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.
   *
   *
   * **Initial value**: `fill`
   *
   */
  objectFit?: Property.ObjectFit | Conditions<Property.ObjectFit>;
  /**
   * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
   *
   *
   * **Initial value**: `50% 50%`
   *
   */
  objectPosition?:
    | Property.ObjectPosition
    | Conditions<Property.ObjectPosition>;
  /**
   *
   * **Initial value**: `auto`
   *
   */
  offsetAnchor?: Property.OffsetAnchor | Conditions<Property.OffsetAnchor>;
  /**
   * The **`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.
   *
   *
   * **Initial value**: `0`
   *
   */
  offsetDistance?:
    | Property.OffsetDistance
    | Conditions<Property.OffsetDistance>;
  /**
   * The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.
   *
   *
   * **Initial value**: `none`
   *
   */
  offsetPath?: Property.OffsetPath | Conditions<Property.OffsetPath>;
  /**
   * The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  offsetRotate?: Property.OffsetRotate | Conditions<Property.OffsetRotate>;
  /**
   * The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  offsetRotation?: Property.OffsetRotate | Conditions<Property.OffsetRotate>;
  /**
   * The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
   *
   *
   * **Initial value**: `1.0`
   *
   */
  opacity?: Property.Opacity | Conditions<Property.Opacity>;
  /**
   * The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.
   *
   *
   * **Initial value**: `0`
   *
   */
  order?: Property.Order | Conditions<Property.Order>;
  /**
   * The **`orphans`** CSS property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column.
   *
   *
   * **Initial value**: `2`
   *
   */
  orphans?: Property.Orphans | Conditions<Property.Orphans>;
  /**
   * The **`outline-color`** CSS property sets the color of an element's outline.
   *
   *
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   */
  outlineColor?: Property.OutlineColor | Conditions<Property.OutlineColor>;
  /**
   * The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.
   *
   *
   * **Initial value**: `0px`
   *
   */
  outlineOffset?: Property.OutlineOffset | Conditions<Property.OutlineOffset>;
  /**
   * The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   *
   * **Initial value**: `none`
   *
   */
  outlineStyle?: Property.OutlineStyle | Conditions<Property.OutlineStyle>;
  /**
   * The CSS **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   *
   * **Initial value**: `medium`
   *
   */
  outlineWidth?: Property.OutlineWidth | Conditions<Property.OutlineWidth>;
  /**
   *
   * **Initial value**: `auto`
   *
   */
  overflowAnchor?:
    | Property.OverflowAnchor
    | Conditions<Property.OverflowAnchor>;
  /**
   *
   * **Initial value**: `auto`
   *
   */
  overflowBlock?: Property.OverflowBlock | Conditions<Property.OverflowBlock>;
  /**
   * The **`overflow-clip-box`** CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the `overflow-clip-box-inline` and `overflow-clip-box-block` properties.
   *
   *
   * **Initial value**: `padding-box`
   *
   */
  overflowClipBox?:
    | Property.OverflowClipBox
    | Conditions<Property.OverflowClipBox>;
  /**
   *
   * **Initial value**: `0px`
   *
   */
  overflowClipMargin?:
    | Property.OverflowClipMargin
    | Conditions<Property.OverflowClipMargin>;
  /**
   *
   * **Initial value**: `auto`
   *
   */
  overflowInline?:
    | Property.OverflowInline
    | Conditions<Property.OverflowInline>;
  /**
   * The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
   *
   *
   * **Initial value**: `normal`
   *
   */
  overflowWrap?: Property.OverflowWrap | Conditions<Property.OverflowWrap>;
  /**
   * The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
   *
   *
   * **Initial value**: `visible`
   *
   */
  overflowX?: Property.OverflowX | Conditions<Property.OverflowX>;
  /**
   * The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
   *
   *
   * **Initial value**: `visible`
   *
   */
  overflowY?: Property.OverflowY | Conditions<Property.OverflowY>;
  /**
   * The **`overscroll-behavior-block`** CSS property sets the browser's behavior when the block direction boundary of a scrolling area is reached.
   *
   *
   * **Initial value**: `auto`
   *
   */
  overscrollBehaviorBlock?:
    | Property.OverscrollBehaviorBlock
    | Conditions<Property.OverscrollBehaviorBlock>;
  /**
   * The **`overscroll-behavior-inline`** CSS property sets the browser's behavior when the inline direction boundary of a scrolling area is reached.
   *
   *
   * **Initial value**: `auto`
   *
   */
  overscrollBehaviorInline?:
    | Property.OverscrollBehaviorInline
    | Conditions<Property.OverscrollBehaviorInline>;
  /**
   * The **`overscroll-behavior-x`** CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached.
   *
   *
   * **Initial value**: `auto`
   *
   */
  overscrollBehaviorX?:
    | Property.OverscrollBehaviorX
    | Conditions<Property.OverscrollBehaviorX>;
  /**
   * The **`overscroll-behavior-y`** CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.
   *
   *
   * **Initial value**: `auto`
   *
   */
  overscrollBehaviorY?:
    | Property.OverscrollBehaviorY
    | Conditions<Property.OverscrollBehaviorY>;
  /**
   * The **`padding-block`** CSS shorthand property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  paddingBlock?: Property.PaddingBlock | Conditions<Property.PaddingBlock>;
  /**
   * The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  paddingBlockEnd?:
    | Property.PaddingBlockEnd
    | Conditions<Property.PaddingBlockEnd>;
  /**
   * The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  paddingBlockStart?:
    | Property.PaddingBlockStart
    | Conditions<Property.PaddingBlockStart>;
  /**
   * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
   *
   *
   * **Initial value**: `0`
   *
   */
  paddingBottom?: Property.PaddingBottom | Conditions<Property.PaddingBottom>;
  /**
   * The **`padding-inline`** CSS shorthand property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  paddingInline?: Property.PaddingInline | Conditions<Property.PaddingInline>;
  /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  paddingInlineEnd?:
    | Property.PaddingInlineEnd
    | Conditions<Property.PaddingInlineEnd>;
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  paddingInlineStart?:
    | Property.PaddingInlineStart
    | Conditions<Property.PaddingInlineStart>;
  /**
   * The **`padding-left`** CSS property sets the width of the padding area to the left of an element.
   *
   *
   * **Initial value**: `0`
   *
   */
  paddingLeft?: Property.PaddingLeft | Conditions<Property.PaddingLeft>;
  /**
   * The **`padding-right`** CSS property sets the width of the padding area on the right of an element.
   *
   *
   * **Initial value**: `0`
   *
   */
  paddingRight?: Property.PaddingRight | Conditions<Property.PaddingRight>;
  /**
   * The **`padding-top`** CSS property sets the height of the padding area on the top of an element.
   *
   *
   * **Initial value**: `0`
   *
   */
  paddingTop?: Property.PaddingTop | Conditions<Property.PaddingTop>;
  /**
   * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.
   *
   *
   * **Initial value**: `auto`
   *
   */
  pageBreakAfter?:
    | Property.PageBreakAfter
    | Conditions<Property.PageBreakAfter>;
  /**
   * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.
   *
   *
   * **Initial value**: `auto`
   *
   */
  pageBreakBefore?:
    | Property.PageBreakBefore
    | Conditions<Property.PageBreakBefore>;
  /**
   * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.
   *
   *
   * **Initial value**: `auto`
   *
   */
  pageBreakInside?:
    | Property.PageBreakInside
    | Conditions<Property.PageBreakInside>;
  /**
   * The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.
   *
   *
   * **Initial value**: `normal`
   *
   */
  paintOrder?: Property.PaintOrder | Conditions<Property.PaintOrder>;
  /**
   * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.
   *
   *
   * **Initial value**: `none`
   *
   */
  perspective?: Property.Perspective | Conditions<Property.Perspective>;
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   *
   *
   * **Initial value**: `50% 50%`
   *
   */
  perspectiveOrigin?:
    | Property.PerspectiveOrigin
    | Conditions<Property.PerspectiveOrigin>;
  /**
   * The `**place-content**` CSS shorthand property allows you to align content along both the block and inline directions at once (i.e. the `align-content` and `justify-content` properties) in a relevant layout system such as Grid or Flexbox.
   *
   *
   * **Initial value**: `normal`
   *
   */
  placeContent?: Property.PlaceContent | Conditions<Property.PlaceContent>;
  /**
   * The **`pointer-events`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.
   *
   *
   * **Initial value**: `auto`
   *
   */
  pointerEvents?: Property.PointerEvents | Conditions<Property.PointerEvents>;
  /**
   * The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
   *
   *
   * **Initial value**: `static`
   *
   */
  position?: Property.Position | Conditions<Property.Position>;
  /**
   * The **`quotes`** CSS property sets how the browser should render quotation marks that are added using the `open-quotes` or `close-quotes` values of the CSS `content` property.
   *
   *
   * **Initial value**: depends on user agent
   *
   */
  quotes?: Property.Quotes | Conditions<Property.Quotes>;
  /**
   * The **`resize`** CSS property sets whether an element is resizable, and if so, in which directions.
   *
   *
   * **Initial value**: `none`
   *
   */
  resize?: Property.Resize | Conditions<Property.Resize>;
  /**
   * The **`right`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
   *
   *
   * **Initial value**: `auto`
   *
   */
  right?: Property.Right | Conditions<Property.Right>;
  /**
   * The **`rotate`** CSS property allows you to specify rotation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` property.
   *
   *
   * **Initial value**: `none`
   *
   */
  rotate?: Property.Rotate | Conditions<Property.Rotate>;
  /**
   * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.
   *
   *
   * **Initial value**: `normal`
   *
   */
  rowGap?: Property.RowGap | Conditions<Property.RowGap>;
  /**
   * The `**ruby-align**` CSS property defines the distribution of the different ruby elements over the base.
   *
   *
   * **Initial value**: `space-around`
   *
   */
  rubyAlign?: Property.RubyAlign | Conditions<Property.RubyAlign>;
  /**
   *
   * **Initial value**: `separate`
   */
  rubyMerge?: Property.RubyMerge | Conditions<Property.RubyMerge>;
  /**
   * The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).
   *
   *
   * **Initial value**: `alternate`
   *
   */
  rubyPosition?: Property.RubyPosition | Conditions<Property.RubyPosition>;
  /**
   * The **`scale`** CSS property allows you to specify scale transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   *
   * **Initial value**: `none`
   *
   */
  scale?: Property.Scale | Conditions<Property.Scale>;
  /**
   * The **`scroll-behavior`** CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.
   *
   *
   * **Initial value**: `auto`
   *
   */
  scrollBehavior?:
    | Property.ScrollBehavior
    | Conditions<Property.ScrollBehavior>;
  /**
   * The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.
   *
   *
   * **Initial value**: `0`
   *
   */
  scrollMargin?: Property.ScrollMargin | Conditions<Property.ScrollMargin>;
  /**
   * The `scroll-margin-block` shorthand property sets the scroll margins of an element in the block dimension.
   *
   *
   * **Initial value**: `0`
   *
   */
  scrollMarginBlock?:
    | Property.ScrollMarginBlock
    | Conditions<Property.ScrollMarginBlock>;
  /**
   * The `scroll-margin-block-end` property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  scrollMarginBlockEnd?:
    | Property.ScrollMarginBlockEnd
    | Conditions<Property.ScrollMarginBlockEnd>;
  /**
   * The `scroll-margin-block-start` property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  scrollMarginBlockStart?:
    | Property.ScrollMarginBlockStart
    | Conditions<Property.ScrollMarginBlockStart>;
  /**
   * The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  scrollMarginBottom?:
    | Property.ScrollMarginBottom
    | Conditions<Property.ScrollMarginBottom>;
  /**
   * The `scroll-margin-inline` shorthand property sets the scroll margins of an element in the inline dimension.
   *
   *
   * **Initial value**: `0`
   *
   */
  scrollMarginInline?:
    | Property.ScrollMarginInline
    | Conditions<Property.ScrollMarginInline>;
  /**
   * The `scroll-margin-inline-end` property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  scrollMarginInlineEnd?:
    | Property.ScrollMarginInlineEnd
    | Conditions<Property.ScrollMarginInlineEnd>;
  /**
   * The `scroll-margin-inline-start` property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  scrollMarginInlineStart?:
    | Property.ScrollMarginInlineStart
    | Conditions<Property.ScrollMarginInlineStart>;
  /**
   * The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  scrollMarginLeft?:
    | Property.ScrollMarginLeft
    | Conditions<Property.ScrollMarginLeft>;
  /**
   * The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  scrollMarginRight?:
    | Property.ScrollMarginRight
    | Conditions<Property.ScrollMarginRight>;
  /**
   * The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  scrollMarginTop?:
    | Property.ScrollMarginTop
    | Conditions<Property.ScrollMarginTop>;
  /**
   * The **`scroll-padding`** shorthand property sets scroll padding on all sides of an element at once, much like the `padding` property does for padding on an element.
   *
   *
   * **Initial value**: `auto`
   *
   */
  scrollPadding?: Property.ScrollPadding | Conditions<Property.ScrollPadding>;
  /**
   * The `scroll-padding-block` shorthand property sets the scroll padding of an element in the block dimension.
   *
   *
   * **Initial value**: `auto`
   *
   */
  scrollPaddingBlock?:
    | Property.ScrollPaddingBlock
    | Conditions<Property.ScrollPaddingBlock>;
  /**
   * The `scroll-padding-block-end` property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   *
   * **Initial value**: `auto`
   *
   */
  scrollPaddingBlockEnd?:
    | Property.ScrollPaddingBlockEnd
    | Conditions<Property.ScrollPaddingBlockEnd>;
  /**
   * The `scroll-padding-block-start` property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   *
   * **Initial value**: `auto`
   *
   */
  scrollPaddingBlockStart?:
    | Property.ScrollPaddingBlockStart
    | Conditions<Property.ScrollPaddingBlockStart>;
  /**
   * The `scroll-padding-bottom` property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   *
   * **Initial value**: `auto`
   *
   */
  scrollPaddingBottom?:
    | Property.ScrollPaddingBottom
    | Conditions<Property.ScrollPaddingBottom>;
  /**
   * The `scroll-padding-inline` shorthand property sets the scroll padding of an element in the inline dimension.
   *
   *
   * **Initial value**: `auto`
   *
   */
  scrollPaddingInline?:
    | Property.ScrollPaddingInline
    | Conditions<Property.ScrollPaddingInline>;
  /**
   * The `scroll-padding-inline-end` property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   *
   * **Initial value**: `auto`
   *
   */
  scrollPaddingInlineEnd?:
    | Property.ScrollPaddingInlineEnd
    | Conditions<Property.ScrollPaddingInlineEnd>;
  /**
   * The `scroll-padding-inline-start` property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   *
   * **Initial value**: `auto`
   *
   */
  scrollPaddingInlineStart?:
    | Property.ScrollPaddingInlineStart
    | Conditions<Property.ScrollPaddingInlineStart>;
  /**
   * The `scroll-padding-left` property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   *
   * **Initial value**: `auto`
   *
   */
  scrollPaddingLeft?:
    | Property.ScrollPaddingLeft
    | Conditions<Property.ScrollPaddingLeft>;
  /**
   * The `scroll-padding-right` property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   *
   * **Initial value**: `auto`
   *
   */
  scrollPaddingRight?:
    | Property.ScrollPaddingRight
    | Conditions<Property.ScrollPaddingRight>;
  /**
   * The **`scroll-padding-top`** property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   *
   * **Initial value**: `auto`
   *
   */
  scrollPaddingTop?:
    | Property.ScrollPaddingTop
    | Conditions<Property.ScrollPaddingTop>;
  /**
   * The `scroll-snap-align` property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.
   *
   *
   * **Initial value**: `none`
   *
   */
  scrollSnapAlign?:
    | Property.ScrollSnapAlign
    | Conditions<Property.ScrollSnapAlign>;
  /**
   * The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.
   *
   *
   * **Initial value**: `0`
   *
   */
  scrollSnapMargin?: Property.ScrollMargin | Conditions<Property.ScrollMargin>;
  /**
   * The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  scrollSnapMarginBottom?:
    | Property.ScrollMarginBottom
    | Conditions<Property.ScrollMarginBottom>;
  /**
   * The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  scrollSnapMarginLeft?:
    | Property.ScrollMarginLeft
    | Conditions<Property.ScrollMarginLeft>;
  /**
   * The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  scrollSnapMarginRight?:
    | Property.ScrollMarginRight
    | Conditions<Property.ScrollMarginRight>;
  /**
   * The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  scrollSnapMarginTop?:
    | Property.ScrollMarginTop
    | Conditions<Property.ScrollMarginTop>;
  /**
   * The **`scroll-snap-stop`** CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.
   *
   *
   * **Initial value**: `normal`
   *
   */
  scrollSnapStop?:
    | Property.ScrollSnapStop
    | Conditions<Property.ScrollSnapStop>;
  /**
   * The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.
   *
   *
   * **Initial value**: `none`
   *
   */
  scrollSnapType?:
    | Property.ScrollSnapType
    | Conditions<Property.ScrollSnapType>;
  /**
   * The **`scrollbar-color`** CSS property sets the color of the scrollbar track and thumb.
   *
   *
   * **Initial value**: `auto`
   *
   */
  scrollbarColor?:
    | Property.ScrollbarColor
    | Conditions<Property.ScrollbarColor>;
  /**
   * The **`scrollbar-gutter`** CSS property allows authors to reserve space for the scrollbar, preventing unwanted layout changes as the content grows while also avoiding unnecessary visuals when scrolling isn't needed.
   *
   *
   * **Initial value**: `auto`
   *
   */
  scrollbarGutter?:
    | Property.ScrollbarGutter
    | Conditions<Property.ScrollbarGutter>;
  /**
   * The **`scrollbar-width`** property allows the author to set the maximum thickness of an element’s scrollbars when they are shown.
   *
   *
   * **Initial value**: `auto`
   *
   */
  scrollbarWidth?:
    | Property.ScrollbarWidth
    | Conditions<Property.ScrollbarWidth>;
  /**
   * The **`shape-image-threshold`** CSS property sets the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.
   *
   *
   * **Initial value**: `0.0`
   *
   */
  shapeImageThreshold?:
    | Property.ShapeImageThreshold
    | Conditions<Property.ShapeImageThreshold>;
  /**
   * The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.
   *
   *
   * **Initial value**: `0`
   *
   */
  shapeMargin?: Property.ShapeMargin | Conditions<Property.ShapeMargin>;
  /**
   * The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.
   *
   *
   * **Initial value**: `none`
   *
   */
  shapeOutside?: Property.ShapeOutside | Conditions<Property.ShapeOutside>;
  /**
   * The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).
   *
   *
   * **Initial value**: `8`
   *
   */
  tabSize?: Property.TabSize | Conditions<Property.TabSize>;
  /**
   * The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.
   *
   *
   * **Initial value**: `auto`
   *
   */
  tableLayout?: Property.TableLayout | Conditions<Property.TableLayout>;
  /**
   * The **`text-align`** CSS property sets the horizontal alignment of a block element or table-cell box. This means it works like `vertical-align` but in the horizontal direction.
   *
   *
   * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
   *
   */
  textAlign?: Property.TextAlign | Conditions<Property.TextAlign>;
  /**
   * The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.
   *
   *
   * **Initial value**: `auto`
   *
   */
  textAlignLast?: Property.TextAlignLast | Conditions<Property.TextAlignLast>;
  /**
   * The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   *
   * **Initial value**: `none`
   *
   */
  textCombineUpright?:
    | Property.TextCombineUpright
    | Conditions<Property.TextCombineUpright>;
  /**
   * The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  textDecorationColor?:
    | Property.TextDecorationColor
    | Conditions<Property.TextDecorationColor>;
  /**
   * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.
   *
   *
   * **Initial value**: `none`
   *
   */
  textDecorationLine?:
    | Property.TextDecorationLine
    | Conditions<Property.TextDecorationLine>;
  /**
   * The **`text-decoration-skip`** CSS property sets what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
   *
   *
   * **Initial value**: `objects`
   *
   */
  textDecorationSkip?:
    | Property.TextDecorationSkip
    | Conditions<Property.TextDecorationSkip>;
  /**
   * The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.
   *
   *
   * **Initial value**: `auto`
   *
   */
  textDecorationSkipInk?:
    | Property.TextDecorationSkipInk
    | Conditions<Property.TextDecorationSkipInk>;
  /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.
   *
   *
   * **Initial value**: `solid`
   *
   */
  textDecorationStyle?:
    | Property.TextDecorationStyle
    | Conditions<Property.TextDecorationStyle>;
  /**
   * The **`text-decoration-thickness`** CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.
   *
   *
   * **Initial value**: `auto`
   *
   */
  textDecorationThickness?:
    | Property.TextDecorationThickness
    | Conditions<Property.TextDecorationThickness>;
  /**
   * The **`text-decoration-thickness`** CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.
   *
   *
   * **Initial value**: `auto`
   *
   */
  textDecorationWidth?:
    | Property.TextDecorationThickness
    | Conditions<Property.TextDecorationThickness>;
  /**
   * The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  textEmphasisColor?:
    | Property.TextEmphasisColor
    | Conditions<Property.TextEmphasisColor>;
  /**
   * The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.
   *
   *
   * **Initial value**: `over right`
   *
   */
  textEmphasisPosition?:
    | Property.TextEmphasisPosition
    | Conditions<Property.TextEmphasisPosition>;
  /**
   * The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.
   *
   *
   * **Initial value**: `none`
   *
   */
  textEmphasisStyle?:
    | Property.TextEmphasisStyle
    | Conditions<Property.TextEmphasisStyle>;
  /**
   * The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.
   *
   *
   * **Initial value**: `0`
   *
   */
  textIndent?: Property.TextIndent | Conditions<Property.TextIndent>;
  /**
   * The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.
   *
   *
   * **Initial value**: `auto`
   *
   */
  textJustify?: Property.TextJustify | Conditions<Property.TextJustify>;
  /**
   * The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.
   *
   *
   * **Initial value**: `mixed`
   *
   */
  textOrientation?:
    | Property.TextOrientation
    | Conditions<Property.TextOrientation>;
  /**
   * The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.
   *
   *
   * **Initial value**: `clip`
   *
   */
  textOverflow?: Property.TextOverflow | Conditions<Property.TextOverflow>;
  /**
   * The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.
   *
   *
   * **Initial value**: `auto`
   *
   */
  textRendering?: Property.TextRendering | Conditions<Property.TextRendering>;
  /**
   * The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
   *
   *
   * **Initial value**: `none`
   *
   */
  textShadow?: Property.TextShadow | Conditions<Property.TextShadow>;
  /**
   * The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
   *
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   *
   */
  textSizeAdjust?:
    | Property.TextSizeAdjust
    | Conditions<Property.TextSizeAdjust>;
  /**
   * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.
   *
   *
   * **Initial value**: `none`
   *
   */
  textTransform?: Property.TextTransform | Conditions<Property.TextTransform>;
  /**
   * The **`text-underline-offset`** CSS property sets the offset distance of an underline text decoration line (applied using `text-decoration`) from its original position.
   *
   *
   * **Initial value**: `auto`
   *
   */
  textUnderlineOffset?:
    | Property.TextUnderlineOffset
    | Conditions<Property.TextUnderlineOffset>;
  /**
   * The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.
   *
   *
   * **Initial value**: `auto`
   *
   */
  textUnderlinePosition?:
    | Property.TextUnderlinePosition
    | Conditions<Property.TextUnderlinePosition>;
  /**
   * The **`top`** CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.
   *
   *
   * **Initial value**: `auto`
   *
   */
  top?: Property.Top | Conditions<Property.Top>;
  /**
   * The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
   *
   *
   * **Initial value**: `auto`
   *
   */
  touchAction?: Property.TouchAction | Conditions<Property.TouchAction>;
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   *
   *
   * **Initial value**: `none`
   *
   */
  transform?: Property.Transform | Conditions<Property.Transform>;
  /**
   * The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.
   *
   *
   * **Initial value**: `view-box`
   *
   */
  transformBox?: Property.TransformBox | Conditions<Property.TransformBox>;
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   *
   * **Initial value**: `50% 50% 0`
   *
   */
  transformOrigin?:
    | Property.TransformOrigin
    | Conditions<Property.TransformOrigin>;
  /**
   * The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
   *
   *
   * **Initial value**: `flat`
   *
   */
  transformStyle?:
    | Property.TransformStyle
    | Conditions<Property.TransformStyle>;
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   *
   * **Initial value**: `0s`
   *
   */
  transitionDelay?: string;
  /* | Conditions<string;
  /*>*
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   *
   * **Initial value**: `0s`
   *
   */
  transitionDuration?:
    | Property.TransitionDuration
    | Conditions<Property.TransitionDuration>;
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   *
   * **Initial value**: all
   *
   */
  transitionProperty?:
    | Property.TransitionProperty
    | Conditions<Property.TransitionProperty>;
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   *
   * **Initial value**: `ease`
   *
   */
  transitionTimingFunction?:
    | Property.TransitionTimingFunction
    | Conditions<Property.TransitionTimingFunction>;
  /**
   * The **`translate`** CSS property allows you to specify translation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   *
   * **Initial value**: `none`
   *
   */
  translate?: Property.Translate | Conditions<Property.Translate>;
  /**
   * The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.
   *
   *
   * **Initial value**: `normal`
   *
   */
  unicodeBidi?: Property.UnicodeBidi | Conditions<Property.UnicodeBidi>;
  /**
   * The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
   *
   *
   * **Initial value**: `auto`
   *
   */
  userSelect?: Property.UserSelect | Conditions<Property.UserSelect>;
  /**
   * The **`vertical-align`** CSS property sets vertical alignment of an inline, inline-block or table-cell box.
   *
   *
   * **Initial value**: `baseline`
   *
   */
  verticalAlign?: Property.VerticalAlign | Conditions<Property.VerticalAlign>;
  /**
   * The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.
   *
   *
   * **Initial value**: `visible`
   *
   */
  visibility?: Property.Visibility | Conditions<Property.Visibility>;
  /**
   * The **`white-space`** CSS property sets how white space inside an element is handled.
   *
   *
   * **Initial value**: `normal`
   *
   */
  whiteSpace?: Property.WhiteSpace | Conditions<Property.WhiteSpace>;
  /**
   * The **`widows`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.
   *
   *
   * **Initial value**: `2`
   *
   */
  widows?: Property.Widows | Conditions<Property.Widows>;
  /**
   * The **`width`** CSS property sets an element's width. By default, it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area. It is also possible to pass a specific value.
   *
   *
   * **Initial value**: `auto`
   *
   */
  width?: Property.Width | Conditions<Property.Width>;
  /**
   * The **`will-change`** CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.
   *
   *
   * **Initial value**: `auto`
   *
   */
  willChange?: Property.WillChange | Conditions<Property.WillChange>;
  /**
   * The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
   *
   *
   * **Initial value**: `normal`
   *
   */
  wordBreak?: Property.WordBreak | Conditions<Property.WordBreak>;
  /**
   * The **`word-spacing`** CSS property sets the length of space between words and between tags.
   *
   *
   * **Initial value**: `normal`
   *
   */
  wordSpacing?: Property.WordSpacing | Conditions<Property.WordSpacing>;
  /**
   * The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
   *
   *
   * **Initial value**: `normal`
   */
  wordWrap?: Property.WordWrap | Conditions<Property.WordWrap>;
  /**
   * The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).
   *
   *
   * **Initial value**: `horizontal-tb`
   *
   */
  writingMode?: Property.WritingMode | Conditions<Property.WritingMode>;
  /**
   * The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   *
   *
   * **Initial value**: `auto`
   *
   */
  zIndex?: Property.ZIndex | Conditions<Property.ZIndex>;
  /**
   * The non-standard **`zoom`** CSS property can be used to control the magnification level of an element. `transform: scale()` should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.
   *
   *
   * **Initial value**: `normal`
   *
   */
  zoom?: Property.Zoom | Conditions<Property.Zoom>;
}

export interface StandardShorthandProperties {
  /**
   * The `**all**` shorthand CSS property resets all of an element's properties except `unicode-bidi`, `direction`, and CSS Custom Properties. It can set properties to their initial or inherited values, or to the values specified in another stylesheet origin.
   *
   *
   * **Initial value**: There is no practical initial value for it.
   *
   */
  all?: Property.All | Conditions<Property.All>;
  /**
   * The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   *
   *
   */
  animation?: Property.Animation | Conditions<Property.Animation>;
  /**
   * The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.
   *
   *
   */
  background?: Property.Background | Conditions<Property.Background>;
  /**
   * The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   *
   * **Initial value**: `0% 0%`
   *
   */
  backgroundPosition?:
    | Property.BackgroundPosition
    | Conditions<Property.BackgroundPosition>;
  /**
   * The **`border`** shorthand CSS property sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`.
   *
   *
   */
  border?: Property.Border | Conditions<Property.Border>;
  /**
   * The **`border-block`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.
   *
   *
   */
  borderBlock?: Property.BorderBlock | Conditions<Property.BorderBlock>;
  /**
   * The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.
   *
   *
   */
  borderBlockEnd?:
    | Property.BorderBlockEnd
    | Conditions<Property.BorderBlockEnd>;
  /**
   * The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.
   *
   *
   */
  borderBlockStart?:
    | Property.BorderBlockStart
    | Conditions<Property.BorderBlockStart>;
  /**
   * The **`border-bottom`** shorthand CSS property sets an element's bottom border. It sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`.
   *
   *
   */
  borderBottom?: Property.BorderBottom | Conditions<Property.BorderBottom>;
  /**
   * The **`border-color`** shorthand CSS property sets the color of an element's border.
   *
   *
   */
  borderColor?: Property.BorderColor | Conditions<Property.BorderColor>;
  /**
   * The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.
   *
   *
   */
  borderImage?: Property.BorderImage | Conditions<Property.BorderImage>;
  /**
   * The **`border-inline`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.
   *
   *
   */
  borderInline?: Property.BorderInline | Conditions<Property.BorderInline>;
  /**
   * The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.
   *
   *
   */
  borderInlineEnd?:
    | Property.BorderInlineEnd
    | Conditions<Property.BorderInlineEnd>;
  /**
   * The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.
   *
   *
   */
  borderInlineStart?:
    | Property.BorderInlineStart
    | Conditions<Property.BorderInlineStart>;
  /**
   * The **`border-left`** shorthand CSS property sets all the properties of an element's left border.
   *
   *
   */
  borderLeft?: Property.BorderLeft | Conditions<Property.BorderLeft>;
  /**
   * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   *
   *
   */
  borderRadius?: Property.BorderRadius | Conditions<Property.BorderRadius>;
  /**
   * The **`border-right`** shorthand CSS property sets all the properties of an element's right border.
   *
   *
   */
  borderRight?: Property.BorderRight | Conditions<Property.BorderRight>;
  /**
   * The **`border-style`** shorthand CSS property sets the line style for all four sides of an element's border.
   *
   *
   */
  borderStyle?: Property.BorderStyle | Conditions<Property.BorderStyle>;
  /**
   * The **`border-top`** shorthand CSS property sets all the properties of an element's top border.
   *
   *
   */
  borderTop?: Property.BorderTop | Conditions<Property.BorderTop>;
  /**
   * The **`border-width`** shorthand CSS property sets the width of an element's border.
   *
   *
   */
  borderWidth?: Property.BorderWidth | Conditions<Property.BorderWidth>;
  /**
   * The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.
   *
   *
   */
  columnRule?: Property.ColumnRule | Conditions<Property.ColumnRule>;
  /**
   * The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.
   *
   *
   */
  columns?: Property.Columns | Conditions<Property.Columns>;
  /**
   * The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.
   *
   *
   */
  flex?: Property.Flex | Conditions<Property.Flex>;
  /**
   * The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.
   *
   *
   */
  flexFlow?: Property.FlexFlow | Conditions<Property.FlexFlow>;
  /**
   * The **`font`** CSS shorthand property sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.
   *
   *
   */
  font?: Property.Font | Conditions<Property.Font>;
  /**
   * The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   *
   *
   */
  gap?: Property.Gap | Conditions<Property.Gap>;
  /**
   * The **`grid`** CSS property is a shorthand property that sets all of the explicit and implicit grid properties in a single declaration.
   *
   *
   */
  grid?: Property.Grid | Conditions<Property.Grid>;
  /**
   * The **`grid-area`** CSS shorthand property specifies a grid item’s size and location within a grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
   *
   *
   */
  gridArea?: Property.GridArea | Conditions<Property.GridArea>;
  /**
   * The **`grid-column`** CSS shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   *
   */
  gridColumn?: Property.GridColumn | Conditions<Property.GridColumn>;
  /**
   * The **`grid-row`** CSS shorthand property specifies a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   *
   */
  gridRow?: Property.GridRow | Conditions<Property.GridRow>;
  /**
   * The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.
   *
   *
   */
  gridTemplate?: Property.GridTemplate | Conditions<Property.GridTemplate>;
  /**
   *
   * **Initial value**: `none`
   */
  lineClamp?: Property.LineClamp | Conditions<Property.LineClamp>;
  /**
   * The **`list-style`** CSS shorthand property allows you set all the list style properties at once.
   *
   *
   */
  listStyle?: Property.ListStyle | Conditions<Property.ListStyle>;
  /**
   * The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
   *
   *
   */
  margin?: Property.Margin | Conditions<Property.Margin>;
  /**
   * The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.
   *
   *
   */
  mask?: Property.Mask | Conditions<Property.Mask>;
  /**
   * The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.
   *
   *
   */
  maskBorder?: Property.MaskBorder | Conditions<Property.MaskBorder>;
  /**
   * The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.
   *
   *
   */
  motion?: Property.Offset | Conditions<Property.Offset>;
  /**
   * The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.
   *
   *
   */
  offset?: Property.Offset | Conditions<Property.Offset>;
  /**
   * The **`outline`** CSS shorthand property set all the outline properties in a single declaration.
   *
   *
   */
  outline?: Property.Outline | Conditions<Property.Outline>;
  /**
   * The **`overflow`** CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.
   *
   *
   * **Initial value**: `visible`
   *
   */
  overflow?: Property.Overflow | Conditions<Property.Overflow>;
  /**
   * The **`overscroll-behavior`** CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for `overscroll-behavior-x` and `overscroll-behavior-y`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  overscrollBehavior?:
    | Property.OverscrollBehavior
    | Conditions<Property.OverscrollBehavior>;
  /**
   * The **`padding`** CSS shorthand property sets the padding area on all four sides of an element at once.
   *
   *
   */
  padding?: Property.Padding | Conditions<Property.Padding>;
  /**
   * The CSS **`place-items`** shorthand property allows you to align items along both the block and inline directions at once (i.e. the `align-items` and `justify-items` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not set, the first value is also used for it.
   *
   *
   */
  placeItems?: Property.PlaceItems | Conditions<Property.PlaceItems>;
  /**
   * The **`place-self`** CSS shorthand property allows you to align an individual item in both the block and inline directions at once (i.e. the `align-self` and `justify-self` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not present, the first value is also used for it.
   *
   *
   */
  placeSelf?: Property.PlaceSelf | Conditions<Property.PlaceSelf>;
  /**
   * The **`text-decoration`** shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, `text-decoration-style`, and the newer `text-decoration-thickness` property.
   *
   *
   */
  textDecoration?:
    | Property.TextDecoration
    | Conditions<Property.TextDecoration>;
  /**
   * The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.
   *
   *
   */
  textEmphasis?: Property.TextEmphasis | Conditions<Property.TextEmphasis>;
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   *
   */
  transition?: Property.Transition | Conditions<Property.Transition>;
}

export interface StandardProperties
  extends StandardLonghandProperties,
    StandardShorthandProperties {}

export interface SvgProperties {
  alignmentBaseline?:
    | Property.AlignmentBaseline
    | Conditions<Property.AlignmentBaseline>;
  baselineShift?: Property.BaselineShift | Conditions<Property.BaselineShift>;
  clip?: Property.Clip | Conditions<Property.Clip>;
  clipPath?: Property.ClipPath | Conditions<Property.ClipPath>;
  clipRule?: Property.ClipRule | Conditions<Property.ClipRule>;
  color?: Property.Color | Conditions<Property.Color>;
  colorInterpolation?:
    | Property.ColorInterpolation
    | Conditions<Property.ColorInterpolation>;
  colorRendering?:
    | Property.ColorRendering
    | Conditions<Property.ColorRendering>;
  cursor?: Property.Cursor | Conditions<Property.Cursor>;
  direction?: Property.Direction | Conditions<Property.Direction>;
  display?: Property.Display | Conditions<Property.Display>;
  dominantBaseline?:
    | Property.DominantBaseline
    | Conditions<Property.DominantBaseline>;
  fill?: Property.Fill | Conditions<Property.Fill>;
  fillOpacity?: Property.FillOpacity | Conditions<Property.FillOpacity>;
  fillRule?: Property.FillRule | Conditions<Property.FillRule>;
  filter?: Property.Filter | Conditions<Property.Filter>;
  floodColor?: Property.FloodColor | Conditions<Property.FloodColor>;
  floodOpacity?: Property.FloodOpacity | Conditions<Property.FloodOpacity>;
  font?: Property.Font | Conditions<Property.Font>;
  fontFamily?: Property.FontFamily | Conditions<Property.FontFamily>;
  fontSize?: Property.FontSize | Conditions<Property.FontSize>;
  fontSizeAdjust?:
    | Property.FontSizeAdjust
    | Conditions<Property.FontSizeAdjust>;
  fontStretch?: Property.FontStretch | Conditions<Property.FontStretch>;
  fontStyle?: Property.FontStyle | Conditions<Property.FontStyle>;
  fontVariant?: Property.FontVariant | Conditions<Property.FontVariant>;
  fontWeight?: Property.FontWeight | Conditions<Property.FontWeight>;
  glyphOrientationVertical?:
    | Property.GlyphOrientationVertical
    | Conditions<Property.GlyphOrientationVertical>;
  imageRendering?:
    | Property.ImageRendering
    | Conditions<Property.ImageRendering>;
  letterSpacing?: Property.LetterSpacing | Conditions<Property.LetterSpacing>;
  lightingColor?: Property.LightingColor | Conditions<Property.LightingColor>;
  lineHeight?: Property.LineHeight | Conditions<Property.LineHeight>;
  marker?: Property.Marker | Conditions<Property.Marker>;
  markerEnd?: Property.MarkerEnd | Conditions<Property.MarkerEnd>;
  markerMid?: Property.MarkerMid | Conditions<Property.MarkerMid>;
  markerStart?: Property.MarkerStart | Conditions<Property.MarkerStart>;
  mask?: Property.Mask | Conditions<Property.Mask>;
  opacity?: Property.Opacity | Conditions<Property.Opacity>;
  overflow?: Property.Overflow | Conditions<Property.Overflow>;
  paintOrder?: Property.PaintOrder | Conditions<Property.PaintOrder>;
  pointerEvents?: Property.PointerEvents | Conditions<Property.PointerEvents>;
  shapeRendering?:
    | Property.ShapeRendering
    | Conditions<Property.ShapeRendering>;
  stopColor?: Property.StopColor | Conditions<Property.StopColor>;
  stopOpacity?: Property.StopOpacity | Conditions<Property.StopOpacity>;
  stroke?: Property.Stroke | Conditions<Property.Stroke>;
  strokeDasharray?:
    | Property.StrokeDasharray
    | Conditions<Property.StrokeDasharray>;
  strokeDashoffset?:
    | Property.StrokeDashoffset
    | Conditions<Property.StrokeDashoffset>;
  strokeLinecap?: Property.StrokeLinecap | Conditions<Property.StrokeLinecap>;
  strokeLinejoin?:
    | Property.StrokeLinejoin
    | Conditions<Property.StrokeLinejoin>;
  strokeMiterlimit?:
    | Property.StrokeMiterlimit
    | Conditions<Property.StrokeMiterlimit>;
  strokeOpacity?: Property.StrokeOpacity | Conditions<Property.StrokeOpacity>;
  strokeWidth?: Property.StrokeWidth | Conditions<Property.StrokeWidth>;
  textAnchor?: Property.TextAnchor | Conditions<Property.TextAnchor>;
  textDecoration?:
    | Property.TextDecoration
    | Conditions<Property.TextDecoration>;
  textRendering?: Property.TextRendering | Conditions<Property.TextRendering>;
  unicodeBidi?: Property.UnicodeBidi | Conditions<Property.UnicodeBidi>;
  vectorEffect?: Property.VectorEffect | Conditions<Property.VectorEffect>;
  visibility?: Property.Visibility | Conditions<Property.Visibility>;
  whiteSpace?: Property.WhiteSpace | Conditions<Property.WhiteSpace>;
  wordSpacing?: Property.WordSpacing | Conditions<Property.WordSpacing>;
  writingMode?: Property.WritingMode | Conditions<Property.WritingMode>;
}

export interface Properties extends StandardProperties, SvgProperties {}

export interface StandardLonghandPropertiesHyphen {
  /**
   * The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "align-content"?: Property.AlignContent | Conditions<Property.AlignContent>;
  /**
   * The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "align-items"?: Property.AlignItems | Conditions<Property.AlignItems>;
  /**
   * The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "align-self"?: Property.AlignSelf | Conditions<Property.AlignSelf>;
  /**
   * The **`align-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their block axis.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "align-tracks"?: Property.AlignTracks | Conditions<Property.AlignTracks>;
  /**
   * The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
   *
   *
   * **Initial value**: `0s`
   *
   */
  "animation-delay"?:
    | Property.AnimationDelay
    | Conditions<Property.AnimationDelay>;
  /**
   * The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "animation-direction"?:
    | Property.AnimationDirection
    | Conditions<Property.AnimationDirection>;
  /**
   * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
   *
   *
   * **Initial value**: `0s`
   *
   */
  "animation-duration"?:
    | Property.AnimationDuration
    | Conditions<Property.AnimationDuration>;
  /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   *
   *
   * **Initial value**: `none`
   *
   */
  "animation-fill-mode"?:
    | Property.AnimationFillMode
    | Conditions<Property.AnimationFillMode>;
  /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.
   *
   *
   * **Initial value**: `1`
   *
   */
  "animation-iteration-count"?:
    | Property.AnimationIterationCount
    | Conditions<Property.AnimationIterationCount>;
  /**
   * The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.
   *
   *
   * **Initial value**: `none`
   *
   */
  "animation-name"?:
    | Property.AnimationName
    | Conditions<Property.AnimationName>;
  /**
   * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
   *
   *
   * **Initial value**: `running`
   *
   */
  "animation-play-state"?:
    | Property.AnimationPlayState
    | Conditions<Property.AnimationPlayState>;
  /**
   * The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.
   *
   *
   * **Initial value**: `ease`
   *
   */
  "animation-timing-function"?:
    | Property.AnimationTimingFunction
    | Conditions<Property.AnimationTimingFunction>;
  /**
   * The `**appearance**` CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.
   *
   *
   * **Initial value**: `auto`
   *
   */
  appearance?: Property.Appearance | Conditions<Property.Appearance>;
  /**
   * The **`aspect-ratio`**  CSS property sets a **preferred aspect ratio** for the box, which will be used in the calculation of auto sizes and some other layout functions.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "aspect-ratio"?: Property.AspectRatio | Conditions<Property.AspectRatio>;
  /**
   * The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.
   *
   *
   * **Initial value**: `none`
   *
   */
  "backdrop-filter"?:
    | Property.BackdropFilter
    | Conditions<Property.BackdropFilter>;
  /**
   * The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.
   *
   *
   * **Initial value**: `visible`
   *
   */
  "backface-visibility"?:
    | Property.BackfaceVisibility
    | Conditions<Property.BackfaceVisibility>;
  /**
   * The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
   *
   *
   * **Initial value**: `scroll`
   *
   */
  "background-attachment"?:
    | Property.BackgroundAttachment
    | Conditions<Property.BackgroundAttachment>;
  /**
   * The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "background-blend-mode"?:
    | Property.BackgroundBlendMode
    | Conditions<Property.BackgroundBlendMode>;
  /**
   * The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.
   *
   *
   * **Initial value**: `border-box`
   *
   */
  "background-clip"?:
    | Property.BackgroundClip
    | Conditions<Property.BackgroundClip>;
  /**
   * The **`background-color`** CSS property sets the background color of an element.
   *
   *
   * **Initial value**: `transparent`
   *
   */
  "background-color"?:
    | Property.BackgroundColor
    | Conditions<Property.BackgroundColor>;
  /**
   * The **`background-image`** CSS property sets one or more background images on an element.
   *
   *
   * **Initial value**: `none`
   *
   */
  "background-image"?:
    | Property.BackgroundImage
    | Conditions<Property.BackgroundImage>;
  /**
   * The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.
   *
   *
   * **Initial value**: `padding-box`
   *
   */
  "background-origin"?:
    | Property.BackgroundOrigin
    | Conditions<Property.BackgroundOrigin>;
  /**
   * The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   *
   * **Initial value**: `left`
   *
   */
  "background-position-x"?:
    | Property.BackgroundPositionX
    | Conditions<Property.BackgroundPositionX>;
  /**
   * The **`background-position-y`** CSS property sets the initial vertical position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   *
   * **Initial value**: `top`
   *
   */
  "background-position-y"?:
    | Property.BackgroundPositionY
    | Conditions<Property.BackgroundPositionY>;
  /**
   * The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
   *
   *
   * **Initial value**: `repeat`
   *
   */
  "background-repeat"?:
    | Property.BackgroundRepeat
    | Conditions<Property.BackgroundRepeat>;
  /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   *
   * **Initial value**: `auto auto`
   *
   */
  "background-size"?:
    | Property.BackgroundSize
    | Conditions<Property.BackgroundSize>;
  /**
   *
   * **Initial value**: `clip`
   */
  "block-overflow"?:
    | Property.BlockOverflow
    | Conditions<Property.BlockOverflow>;
  /**
   * The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "block-size"?: Property.BlockSize | Conditions<Property.BlockSize>;
  /**
   * The **`border-block-color`** CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  "border-block-color"?:
    | Property.BorderBlockColor
    | Conditions<Property.BorderBlockColor>;
  /**
   * The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  "border-block-end-color"?:
    | Property.BorderBlockEndColor
    | Conditions<Property.BorderBlockEndColor>;
  /**
   * The **`border-block-end-style`** CSS property defines the style of the logical block-end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `none`
   *
   */
  "border-block-end-style"?:
    | Property.BorderBlockEndStyle
    | Conditions<Property.BorderBlockEndStyle>;
  /**
   * The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `medium`
   *
   */
  "border-block-end-width"?:
    | Property.BorderBlockEndWidth
    | Conditions<Property.BorderBlockEndWidth>;
  /**
   * The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  "border-block-start-color"?:
    | Property.BorderBlockStartColor
    | Conditions<Property.BorderBlockStartColor>;
  /**
   * The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `none`
   *
   */
  "border-block-start-style"?:
    | Property.BorderBlockStartStyle
    | Conditions<Property.BorderBlockStartStyle>;
  /**
   * The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `medium`
   *
   */
  "border-block-start-width"?:
    | Property.BorderBlockStartWidth
    | Conditions<Property.BorderBlockStartWidth>;
  /**
   * The **`border-block-style`** CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `none`
   *
   */
  "border-block-style"?:
    | Property.BorderBlockStyle
    | Conditions<Property.BorderBlockStyle>;
  /**
   * The **`border-block-width`** CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `medium`
   *
   */
  "border-block-width"?:
    | Property.BorderBlockWidth
    | Conditions<Property.BorderBlockWidth>;
  /**
   * The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  "border-bottom-color"?:
    | Property.BorderBottomColor
    | Conditions<Property.BorderBottomColor>;
  /**
   * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   *
   * **Initial value**: `0`
   *
   */
  "border-bottom-left-radius"?:
    | Property.BorderBottomLeftRadius
    | Conditions<Property.BorderBottomLeftRadius>;
  /**
   * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   *
   * **Initial value**: `0`
   *
   */
  "border-bottom-right-radius"?:
    | Property.BorderBottomRightRadius
    | Conditions<Property.BorderBottomRightRadius>;
  /**
   * The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.
   *
   *
   * **Initial value**: `none`
   *
   */
  "border-bottom-style"?:
    | Property.BorderBottomStyle
    | Conditions<Property.BorderBottomStyle>;
  /**
   * The **`border-bottom-width`** CSS property sets the width of the bottom border of an element.
   *
   *
   * **Initial value**: `medium`
   *
   */
  "border-bottom-width"?:
    | Property.BorderBottomWidth
    | Conditions<Property.BorderBottomWidth>;
  /**
   * The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.
   *
   *
   * **Initial value**: `separate`
   *
   */
  "border-collapse"?:
    | Property.BorderCollapse
    | Conditions<Property.BorderCollapse>;
  /**
   * The **`border-end-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   *
   * **Initial value**: `0`
   *
   */
  "border-end-end-radius"?:
    | Property.BorderEndEndRadius
    | Conditions<Property.BorderEndEndRadius>;
  /**
   * The **`border-end-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   *
   * **Initial value**: `0`
   *
   */
  "border-end-start-radius"?:
    | Property.BorderEndStartRadius
    | Conditions<Property.BorderEndStartRadius>;
  /**
   * The **`border-image-outset`** CSS property sets the distance by which an element's border image is set out from its border box.
   *
   *
   * **Initial value**: `0`
   *
   */
  "border-image-outset"?:
    | Property.BorderImageOutset
    | Conditions<Property.BorderImageOutset>;
  /**
   * The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.
   *
   *
   * **Initial value**: `stretch`
   *
   */
  "border-image-repeat"?:
    | Property.BorderImageRepeat
    | Conditions<Property.BorderImageRepeat>;
  /**
   * The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.
   *
   *
   * **Initial value**: `100%`
   *
   */
  "border-image-slice"?:
    | Property.BorderImageSlice
    | Conditions<Property.BorderImageSlice>;
  /**
   * The **`border-image-source`** CSS property sets the source image used to create an element's border image.
   *
   *
   * **Initial value**: `none`
   *
   */
  "border-image-source"?:
    | Property.BorderImageSource
    | Conditions<Property.BorderImageSource>;
  /**
   * The **`border-image-width`** CSS property sets the width of an element's border image.
   *
   *
   * **Initial value**: `1`
   *
   */
  "border-image-width"?:
    | Property.BorderImageWidth
    | Conditions<Property.BorderImageWidth>;
  /**
   * The **`border-inline-color`** CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  "border-inline-color"?:
    | Property.BorderInlineColor
    | Conditions<Property.BorderInlineColor>;
  /**
   * The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  "border-inline-end-color"?:
    | Property.BorderInlineEndColor
    | Conditions<Property.BorderInlineEndColor>;
  /**
   * The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `none`
   *
   */
  "border-inline-end-style"?:
    | Property.BorderInlineEndStyle
    | Conditions<Property.BorderInlineEndStyle>;
  /**
   * The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `medium`
   *
   */
  "border-inline-end-width"?:
    | Property.BorderInlineEndWidth
    | Conditions<Property.BorderInlineEndWidth>;
  /**
   * The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  "border-inline-start-color"?:
    | Property.BorderInlineStartColor
    | Conditions<Property.BorderInlineStartColor>;
  /**
   * The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `none`
   *
   */
  "border-inline-start-style"?:
    | Property.BorderInlineStartStyle
    | Conditions<Property.BorderInlineStartStyle>;
  /**
   * The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `medium`
   *
   */
  "border-inline-start-width"?:
    | Property.BorderInlineStartWidth
    | Conditions<Property.BorderInlineStartWidth>;
  /**
   * The **`border-inline-style`** CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `none`
   *
   */
  "border-inline-style"?:
    | Property.BorderInlineStyle
    | Conditions<Property.BorderInlineStyle>;
  /**
   * The **`border-inline-width`** CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `medium`
   *
   */
  "border-inline-width"?:
    | Property.BorderInlineWidth
    | Conditions<Property.BorderInlineWidth>;
  /**
   * The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  "border-left-color"?:
    | Property.BorderLeftColor
    | Conditions<Property.BorderLeftColor>;
  /**
   * The **`border-left-style`** CSS property sets the line style of an element's left `border`.
   *
   *
   * **Initial value**: `none`
   *
   */
  "border-left-style"?:
    | Property.BorderLeftStyle
    | Conditions<Property.BorderLeftStyle>;
  /**
   * The **`border-left-width`** CSS property sets the width of the left border of an element.
   *
   *
   * **Initial value**: `medium`
   *
   */
  "border-left-width"?:
    | Property.BorderLeftWidth
    | Conditions<Property.BorderLeftWidth>;
  /**
   * The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  "border-right-color"?:
    | Property.BorderRightColor
    | Conditions<Property.BorderRightColor>;
  /**
   * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
   *
   *
   * **Initial value**: `none`
   *
   */
  "border-right-style"?:
    | Property.BorderRightStyle
    | Conditions<Property.BorderRightStyle>;
  /**
   * The **`border-right-width`** CSS property sets the width of the right border of an element.
   *
   *
   * **Initial value**: `medium`
   *
   */
  "border-right-width"?:
    | Property.BorderRightWidth
    | Conditions<Property.BorderRightWidth>;
  /**
   * The **`border-spacing`** CSS property sets the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.
   *
   *
   * **Initial value**: `0`
   *
   */
  "border-spacing"?:
    | Property.BorderSpacing
    | Conditions<Property.BorderSpacing>;
  /**
   * The **`border-start-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   *
   * **Initial value**: `0`
   *
   */
  "border-start-end-radius"?:
    | Property.BorderStartEndRadius
    | Conditions<Property.BorderStartEndRadius>;
  /**
   * The **`border-start-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   *
   * **Initial value**: `0`
   *
   */
  "border-start-start-radius"?:
    | Property.BorderStartStartRadius
    | Conditions<Property.BorderStartStartRadius>;
  /**
   * The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  "border-top-color"?:
    | Property.BorderTopColor
    | Conditions<Property.BorderTopColor>;
  /**
   * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   *
   * **Initial value**: `0`
   *
   */
  "border-top-left-radius"?:
    | Property.BorderTopLeftRadius
    | Conditions<Property.BorderTopLeftRadius>;
  /**
   * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   *
   * **Initial value**: `0`
   *
   */
  "border-top-right-radius"?:
    | Property.BorderTopRightRadius
    | Conditions<Property.BorderTopRightRadius>;
  /**
   * The **`border-top-style`** CSS property sets the line style of an element's top `border`.
   *
   *
   * **Initial value**: `none`
   *
   */
  "border-top-style"?:
    | Property.BorderTopStyle
    | Conditions<Property.BorderTopStyle>;
  /**
   * The **`border-top-width`** CSS property sets the width of the top border of an element.
   *
   *
   * **Initial value**: `medium`
   *
   */
  "border-top-width"?:
    | Property.BorderTopWidth
    | Conditions<Property.BorderTopWidth>;
  /**
   * The **`bottom`** CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.
   *
   *
   * **Initial value**: `auto`
   *
   */
  bottom?: Property.Bottom | Conditions<Property.Bottom>;
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   *
   *
   * **Initial value**: `slice`
   *
   */
  "box-decoration-break"?:
    | Property.BoxDecorationBreak
    | Conditions<Property.BoxDecorationBreak>;
  /**
   * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.
   *
   *
   * **Initial value**: `none`
   *
   */
  "box-shadow"?: Property.BoxShadow | Conditions<Property.BoxShadow>;
  /**
   * The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.
   *
   *
   * **Initial value**: `content-box`
   *
   */
  "box-sizing"?: Property.BoxSizing | Conditions<Property.BoxSizing>;
  /**
   * The **`break-after`** CSS property sets how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "break-after"?: Property.BreakAfter | Conditions<Property.BreakAfter>;
  /**
   * The **`break-before`** CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "break-before"?: Property.BreakBefore | Conditions<Property.BreakBefore>;
  /**
   * The **`break-inside`** CSS property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "break-inside"?: Property.BreakInside | Conditions<Property.BreakInside>;
  /**
   * The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.
   *
   *
   * **Initial value**: `top`
   *
   */
  "caption-side"?: Property.CaptionSide | Conditions<Property.CaptionSide>;
  /**
   * The **`caret-color`** CSS property sets the color of the **insertion caret**, the visible marker where the next character typed will be inserted. This is sometimes referred to as the **text input cursor**. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "caret-color"?: Property.CaretColor | Conditions<Property.CaretColor>;
  /**
   * The **`clear`** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.
   *
   *
   * **Initial value**: `none`
   *
   */
  clear?: Property.Clear | Conditions<Property.Clear>;
  /**
   * The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.
   *
   *
   * **Initial value**: `none`
   *
   */
  "clip-path"?: Property.ClipPath | Conditions<Property.ClipPath>;
  /**
   * The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `<currentcolor>` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.
   *
   *
   * **Initial value**: Varies from one browser to another
   *
   */
  color?: Property.Color | Conditions<Property.Color>;
  /**
   * The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
   *
   *
   * **Initial value**: `economy`
   *
   */
  "color-adjust"?: Property.ColorAdjust | Conditions<Property.ColorAdjust>;
  /**
   * The **`color-scheme`** CSS property allows an element to indicate which color schemes it can comfortably be rendered in.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "color-scheme"?: Property.ColorScheme | Conditions<Property.ColorScheme>;
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "column-count"?: Property.ColumnCount | Conditions<Property.ColumnCount>;
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   *
   *
   * **Initial value**: `balance`
   *
   */
  "column-fill"?: Property.ColumnFill | Conditions<Property.ColumnFill>;
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "column-gap"?: Property.ColumnGap | Conditions<Property.ColumnGap>;
  /**
   * The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  "column-rule-color"?:
    | Property.ColumnRuleColor
    | Conditions<Property.ColumnRuleColor>;
  /**
   * The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.
   *
   *
   * **Initial value**: `none`
   *
   */
  "column-rule-style"?:
    | Property.ColumnRuleStyle
    | Conditions<Property.ColumnRuleStyle>;
  /**
   * The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.
   *
   *
   * **Initial value**: `medium`
   *
   */
  "column-rule-width"?:
    | Property.ColumnRuleWidth
    | Conditions<Property.ColumnRuleWidth>;
  /**
   * The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.
   *
   *
   * **Initial value**: `none`
   *
   */
  "column-span"?: Property.ColumnSpan | Conditions<Property.ColumnSpan>;
  /**
   * The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "column-width"?: Property.ColumnWidth | Conditions<Property.ColumnWidth>;
  /**
   * The **`contain`** CSS property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page, leading to obvious performance benefits.
   *
   *
   * **Initial value**: `none`
   *
   */
  contain?: Property.Contain | Conditions<Property.Contain>;
  /**
   * The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are **anonymous replaced elements**_._
   *
   *
   * **Initial value**: `normal`
   *
   */
  content?: Property.Content | Conditions<Property.Content>;
  /**
   * The **`content-visibility`** CSS property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed. Basically it enables the user agent to skip an element's rendering work, including layout and painting, until it is needed, makes the initial page load much faster.
   *
   *
   * **Initial value**: `visible`
   *
   */
  "content-visibility"?:
    | Property.ContentVisibility
    | Conditions<Property.ContentVisibility>;
  /**
   * The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.
   *
   *
   * **Initial value**: `none`
   *
   */
  "counter-increment"?:
    | Property.CounterIncrement
    | Conditions<Property.CounterIncrement>;
  /**
   * The **`counter-reset`** CSS property resets a CSS counter to a given value.
   *
   *
   * **Initial value**: `none`
   *
   */
  "counter-reset"?: Property.CounterReset | Conditions<Property.CounterReset>;
  /**
   * The **`counter-set`** CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element.
   *
   *
   * **Initial value**: `none`
   *
   */
  "counter-set"?: Property.CounterSet | Conditions<Property.CounterSet>;
  /**
   * The **`cursor`** CSS property sets the type of mouse cursor, if any, to show when the mouse pointer is over an element.
   *
   *
   * **Initial value**: `auto`
   *
   */
  cursor?: Property.Cursor | Conditions<Property.Cursor>;
  /**
   * The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).
   *
   *
   * **Initial value**: `ltr`
   *
   */
  direction?: Property.Direction | Conditions<Property.Direction>;
  /**
   * The **`display`** CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.
   *
   *
   * **Initial value**: `inline`
   *
   */
  display?: Property.Display | Conditions<Property.Display>;
  /**
   * The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.
   *
   *
   * **Initial value**: `show`
   *
   */
  "empty-cells"?: Property.EmptyCells | Conditions<Property.EmptyCells>;
  /**
   * The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
   *
   *
   * **Initial value**: `none`
   *
   */
  filter?: Property.Filter | Conditions<Property.Filter>;
  /**
   * The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "flex-basis"?: Property.FlexBasis | Conditions<Property.FlexBasis>;
  /**
   * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   *
   * **Initial value**: `row`
   *
   */
  "flex-direction"?:
    | Property.FlexDirection
    | Conditions<Property.FlexDirection>;
  /**
   * The **`flex-grow`** CSS property sets the flex grow factor of a flex item main size.
   *
   *
   * **Initial value**: `0`
   *
   */
  "flex-grow"?: Property.FlexGrow | Conditions<Property.FlexGrow>;
  /**
   * The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.
   *
   *
   * **Initial value**: `1`
   *
   */
  "flex-shrink"?: Property.FlexShrink | Conditions<Property.FlexShrink>;
  /**
   * The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
   *
   *
   * **Initial value**: `nowrap`
   *
   */
  "flex-wrap"?: Property.FlexWrap | Conditions<Property.FlexWrap>;
  /**
   * The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).
   *
   *
   * **Initial value**: `none`
   *
   */
  float?: Property.Float | Conditions<Property.Float>;
  /**
   * The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
   *
   *
   * **Initial value**: depends on user agent
   *
   */
  "font-family"?: Property.FontFamily | Conditions<Property.FontFamily>;
  /**
   * The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "font-feature-settings"?:
    | Property.FontFeatureSettings
    | Conditions<Property.FontFeatureSettings>;
  /**
   * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "font-kerning"?: Property.FontKerning | Conditions<Property.FontKerning>;
  /**
   * The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "font-language-override"?:
    | Property.FontLanguageOverride
    | Conditions<Property.FontLanguageOverride>;
  /**
   * The **`font-optical-sizing`** CSS property sets whether text rendering is optimized for viewing at different sizes.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "font-optical-sizing"?:
    | Property.FontOpticalSizing
    | Conditions<Property.FontOpticalSizing>;
  /**
   * The **`font-size`** CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative `<length>` units, such as `em`, `ex`, and so forth.
   *
   *
   * **Initial value**: `medium`
   *
   */
  "font-size"?: Property.FontSize | Conditions<Property.FontSize>;
  /**
   * The **`font-size-adjust`** CSS property sets the size of lower-case letters relative to the current font size (which defines the size of upper-case letters).
   *
   *
   * **Initial value**: `none`
   *
   */
  "font-size-adjust"?:
    | Property.FontSizeAdjust
    | Conditions<Property.FontSizeAdjust>;
  /**
   * The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "font-smooth"?: Property.FontSmooth | Conditions<Property.FontSmooth>;
  /**
   * The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "font-stretch"?: Property.FontStretch | Conditions<Property.FontStretch>;
  /**
   * The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "font-style"?: Property.FontStyle | Conditions<Property.FontStyle>;
  /**
   * The **`font-synthesis`** CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.
   *
   *
   * **Initial value**: `weight style`
   *
   */
  "font-synthesis"?:
    | Property.FontSynthesis
    | Conditions<Property.FontSynthesis>;
  /**
   * The **`font-variant`** CSS shorthand property allows you to set all the font variants for a font.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "font-variant"?: Property.FontVariant | Conditions<Property.FontVariant>;
  /**
   * The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "font-variant-caps"?:
    | Property.FontVariantCaps
    | Conditions<Property.FontVariantCaps>;
  /**
   * The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "font-variant-east-asian"?:
    | Property.FontVariantEastAsian
    | Conditions<Property.FontVariantEastAsian>;
  /**
   * The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "font-variant-ligatures"?:
    | Property.FontVariantLigatures
    | Conditions<Property.FontVariantLigatures>;
  /**
   * The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "font-variant-numeric"?:
    | Property.FontVariantNumeric
    | Conditions<Property.FontVariantNumeric>;
  /**
   * The **`font-variant-position`** CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "font-variant-position"?:
    | Property.FontVariantPosition
    | Conditions<Property.FontVariantPosition>;
  /**
   * The **`font-variation-settings`** CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "font-variation-settings"?:
    | Property.FontVariationSettings
    | Conditions<Property.FontVariationSettings>;
  /**
   * The **`font-weight`** CSS property sets the weight (or boldness) of the font. The weights available depend on the `font-family` that is currently set.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "font-weight"?: Property.FontWeight | Conditions<Property.FontWeight>;
  /**
   * The **`forced-color-adjust`** CSS property allows authors to opt certain elements out of forced colors mode. This then restores the control of those values to CSS.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "forced-color-adjust"?:
    | Property.ForcedColorAdjust
    | Conditions<Property.ForcedColorAdjust>;
  /**
   * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "grid-auto-columns"?:
    | Property.GridAutoColumns
    | Conditions<Property.GridAutoColumns>;
  /**
   * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
   *
   *
   * **Initial value**: `row`
   *
   */
  "grid-auto-flow"?: Property.GridAutoFlow | Conditions<Property.GridAutoFlow>;
  /**
   * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track or pattern of tracks.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "grid-auto-rows"?: Property.GridAutoRows | Conditions<Property.GridAutoRows>;
  /**
   * The **`grid-column-end`** CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "grid-column-end"?:
    | Property.GridColumnEnd
    | Conditions<Property.GridColumnEnd>;
  /**
   * The **`grid-column-start`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "grid-column-start"?:
    | Property.GridColumnStart
    | Conditions<Property.GridColumnStart>;
  /**
   * The **`grid-row-end`** CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "grid-row-end"?: Property.GridRowEnd | Conditions<Property.GridRowEnd>;
  /**
   * The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "grid-row-start"?: Property.GridRowStart | Conditions<Property.GridRowStart>;
  /**
   * The **`grid-template-areas`** CSS property specifies named grid areas, establishing the cells in the grid and assigning them names.
   *
   *
   * **Initial value**: `none`
   *
   */
  "grid-template-areas"?:
    | Property.GridTemplateAreas
    | Conditions<Property.GridTemplateAreas>;
  /**
   * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.
   *
   *
   * **Initial value**: `none`
   *
   */
  "grid-template-columns"?:
    | Property.GridTemplateColumns
    | Conditions<Property.GridTemplateColumns>;
  /**
   * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.
   *
   *
   * **Initial value**: `none`
   *
   */
  "grid-template-rows"?:
    | Property.GridTemplateRows
    | Conditions<Property.GridTemplateRows>;
  /**
   * The **`hanging-punctuation`** CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.
   *
   *
   * **Initial value**: `none`
   *
   */
  "hanging-punctuation"?:
    | Property.HangingPunctuation
    | Conditions<Property.HangingPunctuation>;
  /**
   * The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area. It is also possible to pass a specific value.
   *
   *
   * **Initial value**: `auto`
   *
   */
  height?: Property.Height | Conditions<Property.Height>;
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   *
   * **Initial value**: `manual`
   *
   */
  hyphens?: Property.Hyphens | Conditions<Property.Hyphens>;
  /**
   * The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image. It should _not_ be used for any other orientation adjustments; instead, the `transform` property should be used with the `rotate` `<transform-function>`.
   *
   *
   * **Initial value**: `from-image`
   *
   */
  "image-orientation"?:
    | Property.ImageOrientation
    | Conditions<Property.ImageOrientation>;
  /**
   * The **`image-rendering`** CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "image-rendering"?:
    | Property.ImageRendering
    | Conditions<Property.ImageRendering>;
  /**
   *
   * **Initial value**: `1dppx`
   */
  "image-resolution"?:
    | Property.ImageResolution
    | Conditions<Property.ImageResolution>;
  /**
   * The `initial-letter` CSS property sets styling for dropped, raised, and sunken initial letters.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "initial-letter"?:
    | Property.InitialLetter
    | Conditions<Property.InitialLetter>;
  /**
   * The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "inline-size"?: Property.InlineSize | Conditions<Property.InlineSize>;
  /**
   * The **`inset`** CSS property is a shorthand that corresponds to the `top`, `right`, `bottom`, and/or `left` properties. It has the same multi-value syntax of the `margin` shorthand.
   *
   *
   * **Initial value**: `auto`
   *
   */
  inset?: Property.Inset | Conditions<Property.Inset>;
  /**
   * The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "inset-block"?: Property.InsetBlock | Conditions<Property.InsetBlock>;
  /**
   * The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "inset-block-end"?:
    | Property.InsetBlockEnd
    | Conditions<Property.InsetBlockEnd>;
  /**
   * The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "inset-block-start"?:
    | Property.InsetBlockStart
    | Conditions<Property.InsetBlockStart>;
  /**
   * The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "inset-inline"?: Property.InsetInline | Conditions<Property.InsetInline>;
  /**
   * The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "inset-inline-end"?:
    | Property.InsetInlineEnd
    | Conditions<Property.InsetInlineEnd>;
  /**
   * The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "inset-inline-start"?:
    | Property.InsetInlineStart
    | Conditions<Property.InsetInlineStart>;
  /**
   * The **`isolation`** CSS property determines whether an element must create a new stacking context.
   *
   *
   * **Initial value**: `auto`
   *
   */
  isolation?: Property.Isolation | Conditions<Property.Isolation>;
  /**
   * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "justify-content"?:
    | Property.JustifyContent
    | Conditions<Property.JustifyContent>;
  /**
   * The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
   *
   *
   * **Initial value**: `legacy`
   *
   */
  "justify-items"?: Property.JustifyItems | Conditions<Property.JustifyItems>;
  /**
   * The CSS **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "justify-self"?: Property.JustifySelf | Conditions<Property.JustifySelf>;
  /**
   * The **`justify-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their inline axis.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "justify-tracks"?:
    | Property.JustifyTracks
    | Conditions<Property.JustifyTracks>;
  /**
   * The **`left`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
   *
   *
   * **Initial value**: `auto`
   *
   */
  left?: Property.Left | Conditions<Property.Left>;
  /**
   * The **`letter-spacing`** CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of `letter-spacing` causes characters to spread farther apart, while negative values of `letter-spacing` bring characters closer together.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "letter-spacing"?:
    | Property.LetterSpacing
    | Conditions<Property.LetterSpacing>;
  /**
   * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "line-break"?: Property.LineBreak | Conditions<Property.LineBreak>;
  /**
   * The **`line-height`** CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "line-height"?: Property.LineHeight | Conditions<Property.LineHeight>;
  /**
   * The **`line-height-step`** CSS property sets the step unit for line box heights. When the property is set, line box heights are rounded up to the closest multiple of the unit.
   *
   *
   * **Initial value**: `0`
   *
   */
  "line-height-step"?:
    | Property.LineHeightStep
    | Conditions<Property.LineHeightStep>;
  /**
   * The **`list-style-image`** CSS property sets an image to be used as the list item marker.
   *
   *
   * **Initial value**: `none`
   *
   */
  "list-style-image"?:
    | Property.ListStyleImage
    | Conditions<Property.ListStyleImage>;
  /**
   * The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.
   *
   *
   * **Initial value**: `outside`
   *
   */
  "list-style-position"?:
    | Property.ListStylePosition
    | Conditions<Property.ListStylePosition>;
  /**
   * The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.
   *
   *
   * **Initial value**: `disc`
   *
   */
  "list-style-type"?:
    | Property.ListStyleType
    | Conditions<Property.ListStyleType>;
  /**
   * The **`margin-block`** CSS shorthand property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  "margin-block"?: Property.MarginBlock | Conditions<Property.MarginBlock>;
  /**
   * The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  "margin-block-end"?:
    | Property.MarginBlockEnd
    | Conditions<Property.MarginBlockEnd>;
  /**
   * The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  "margin-block-start"?:
    | Property.MarginBlockStart
    | Conditions<Property.MarginBlockStart>;
  /**
   * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   *
   * **Initial value**: `0`
   *
   */
  "margin-bottom"?: Property.MarginBottom | Conditions<Property.MarginBottom>;
  /**
   * The **`margin-inline`** CSS shorthand property is a shorthand property that defines both the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  "margin-inline"?: Property.MarginInline | Conditions<Property.MarginInline>;
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `0`
   *
   */
  "margin-inline-end"?:
    | Property.MarginInlineEnd
    | Conditions<Property.MarginInlineEnd>;
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   *
   * **Initial value**: `0`
   *
   */
  "margin-inline-start"?:
    | Property.MarginInlineStart
    | Conditions<Property.MarginInlineStart>;
  /**
   * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   *
   * **Initial value**: `0`
   *
   */
  "margin-left"?: Property.MarginLeft | Conditions<Property.MarginLeft>;
  /**
   * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   *
   * **Initial value**: `0`
   *
   */
  "margin-right"?: Property.MarginRight | Conditions<Property.MarginRight>;
  /**
   * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   *
   * **Initial value**: `0`
   *
   */
  "margin-top"?: Property.MarginTop | Conditions<Property.MarginTop>;
  /**
   * The **`mask-border-mode`** CSS property specifies the blending mode used in a mask border.
   *
   *
   * **Initial value**: `alpha`
   */
  "mask-border-mode"?:
    | Property.MaskBorderMode
    | Conditions<Property.MaskBorderMode>;
  /**
   * The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.
   *
   *
   * **Initial value**: `0`
   *
   */
  "mask-border-outset"?:
    | Property.MaskBorderOutset
    | Conditions<Property.MaskBorderOutset>;
  /**
   * The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.
   *
   *
   * **Initial value**: `stretch`
   *
   */
  "mask-border-repeat"?:
    | Property.MaskBorderRepeat
    | Conditions<Property.MaskBorderRepeat>;
  /**
   * The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.
   *
   *
   * **Initial value**: `0`
   *
   */
  "mask-border-slice"?:
    | Property.MaskBorderSlice
    | Conditions<Property.MaskBorderSlice>;
  /**
   * The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.
   *
   *
   * **Initial value**: `none`
   *
   */
  "mask-border-source"?:
    | Property.MaskBorderSource
    | Conditions<Property.MaskBorderSource>;
  /**
   * The **`mask-border-width`** CSS property sets the width of an element's mask border.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "mask-border-width"?:
    | Property.MaskBorderWidth
    | Conditions<Property.MaskBorderWidth>;
  /**
   * The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.
   *
   *
   * **Initial value**: `border-box`
   *
   */
  "mask-clip"?: Property.MaskClip | Conditions<Property.MaskClip>;
  /**
   * The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
   *
   *
   * **Initial value**: `add`
   *
   */
  "mask-composite"?:
    | Property.MaskComposite
    | Conditions<Property.MaskComposite>;
  /**
   * The **`mask-image`** CSS property sets the image that is used as mask layer for an element.
   *
   *
   * **Initial value**: `none`
   *
   */
  "mask-image"?: Property.MaskImage | Conditions<Property.MaskImage>;
  /**
   * The **`mask-mode`** CSS property sets whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.
   *
   *
   * **Initial value**: `match-source`
   *
   */
  "mask-mode"?: Property.MaskMode | Conditions<Property.MaskMode>;
  /**
   * The **`mask-origin`** CSS property sets the origin of a mask.
   *
   *
   * **Initial value**: `border-box`
   *
   */
  "mask-origin"?: Property.MaskOrigin | Conditions<Property.MaskOrigin>;
  /**
   * The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.
   *
   *
   * **Initial value**: `center`
   *
   */
  "mask-position"?: Property.MaskPosition | Conditions<Property.MaskPosition>;
  /**
   * The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   *
   *
   * **Initial value**: `no-repeat`
   *
   */
  "mask-repeat"?: Property.MaskRepeat | Conditions<Property.MaskRepeat>;
  /**
   * The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "mask-size"?: Property.MaskSize | Conditions<Property.MaskSize>;
  /**
   * The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.
   *
   *
   * **Initial value**: `luminance`
   *
   */
  "mask-type"?: Property.MaskType | Conditions<Property.MaskType>;
  /**
   * The `math-style` property indicates whether MathML equations should render with normal or compact height.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "math-style"?: Property.MathStyle | Conditions<Property.MathStyle>;
  /**
   * The `**max-block-size**` CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by `writing-mode`. That is, if the writing direction is horizontal, then `max-block-size` is equivalent to `max-height`; if the writing direction is vertical, `max-block-size` is the same as `max-width`.
   *
   *
   * **Initial value**: `0`
   *
   */
  "max-block-size"?: Property.MaxBlockSize | Conditions<Property.MaxBlockSize>;
  /**
   * The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`. It is also possible to pass a specific value.
   *
   *
   * **Initial value**: `none`
   *
   */
  "max-height"?: Property.MaxHeight | Conditions<Property.MaxHeight>;
  /**
   * The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.
   *
   *
   * **Initial value**: `0`
   *
   */
  "max-inline-size"?:
    | Property.MaxInlineSize
    | Conditions<Property.MaxInlineSize>;
  /**
   *
   * **Initial value**: `none`
   */
  "max-lines"?: Property.MaxLines | Conditions<Property.MaxLines>;
  /**
   * The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.
   *
   *
   * **Initial value**: `none`
   *
   */
  "max-width"?: Property.MaxWidth | Conditions<Property.MaxWidth>;
  /**
   * The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   *
   * **Initial value**: `0`
   *
   */
  "min-block-size"?: Property.MinBlockSize | Conditions<Property.MinBlockSize>;
  /**
   * The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "min-height"?: Property.MinHeight | Conditions<Property.MinHeight>;
  /**
   * The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   *
   * **Initial value**: `0`
   *
   */
  "min-inline-size"?:
    | Property.MinInlineSize
    | Conditions<Property.MinInlineSize>;
  /**
   * The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "min-width"?: Property.MinWidth | Conditions<Property.MinWidth>;
  /**
   * The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "mix-blend-mode"?: Property.MixBlendMode | Conditions<Property.MixBlendMode>;
  /**
   * The **`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.
   *
   *
   * **Initial value**: `0`
   *
   */
  "motion-distance"?:
    | Property.OffsetDistance
    | Conditions<Property.OffsetDistance>;
  /**
   * The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.
   *
   *
   * **Initial value**: `none`
   *
   */
  "motion-path"?: Property.OffsetPath | Conditions<Property.OffsetPath>;
  /**
   * The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "motion-rotation"?: Property.OffsetRotate | Conditions<Property.OffsetRotate>;
  /**
   * The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.
   *
   *
   * **Initial value**: `fill`
   *
   */
  "object-fit"?: Property.ObjectFit | Conditions<Property.ObjectFit>;
  /**
   * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
   *
   *
   * **Initial value**: `50% 50%`
   *
   */
  "object-position"?:
    | Property.ObjectPosition
    | Conditions<Property.ObjectPosition>;
  /**
   *
   * **Initial value**: `auto`
   *
   */
  "offset-anchor"?: Property.OffsetAnchor | Conditions<Property.OffsetAnchor>;
  /**
   * The **`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.
   *
   *
   * **Initial value**: `0`
   *
   */
  "offset-distance"?:
    | Property.OffsetDistance
    | Conditions<Property.OffsetDistance>;
  /**
   * The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.
   *
   *
   * **Initial value**: `none`
   *
   */
  "offset-path"?: Property.OffsetPath | Conditions<Property.OffsetPath>;
  /**
   * The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "offset-rotate"?: Property.OffsetRotate | Conditions<Property.OffsetRotate>;
  /**
   * The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "offset-rotation"?: Property.OffsetRotate | Conditions<Property.OffsetRotate>;
  /**
   * The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
   *
   *
   * **Initial value**: `1.0`
   *
   */
  opacity?: Property.Opacity | Conditions<Property.Opacity>;
  /**
   * The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.
   *
   *
   * **Initial value**: `0`
   *
   */
  order?: Property.Order | Conditions<Property.Order>;
  /**
   * The **`orphans`** CSS property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column.
   *
   *
   * **Initial value**: `2`
   *
   */
  orphans?: Property.Orphans | Conditions<Property.Orphans>;
  /**
   * The **`outline-color`** CSS property sets the color of an element's outline.
   *
   *
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   */
  "outline-color"?: Property.OutlineColor | Conditions<Property.OutlineColor>;
  /**
   * The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.
   *
   *
   * **Initial value**: `0px`
   *
   */
  "outline-offset"?:
    | Property.OutlineOffset
    | Conditions<Property.OutlineOffset>;
  /**
   * The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   *
   * **Initial value**: `none`
   *
   */
  "outline-style"?: Property.OutlineStyle | Conditions<Property.OutlineStyle>;
  /**
   * The CSS **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   *
   * **Initial value**: `medium`
   *
   */
  "outline-width"?: Property.OutlineWidth | Conditions<Property.OutlineWidth>;
  /**
   *
   * **Initial value**: `auto`
   *
   */
  "overflow-anchor"?:
    | Property.OverflowAnchor
    | Conditions<Property.OverflowAnchor>;
  /**
   *
   * **Initial value**: `auto`
   *
   */
  "overflow-block"?:
    | Property.OverflowBlock
    | Conditions<Property.OverflowBlock>;
  /**
   * The **`overflow-clip-box`** CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the `overflow-clip-box-inline` and `overflow-clip-box-block` properties.
   *
   *
   * **Initial value**: `padding-box`
   *
   */
  "overflow-clip-box"?:
    | Property.OverflowClipBox
    | Conditions<Property.OverflowClipBox>;
  /**
   *
   * **Initial value**: `0px`
   *
   */
  "overflow-clip-margin"?:
    | Property.OverflowClipMargin
    | Conditions<Property.OverflowClipMargin>;
  /**
   *
   * **Initial value**: `auto`
   *
   */
  "overflow-inline"?:
    | Property.OverflowInline
    | Conditions<Property.OverflowInline>;
  /**
   * The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "overflow-wrap"?: Property.OverflowWrap | Conditions<Property.OverflowWrap>;
  /**
   * The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
   *
   *
   * **Initial value**: `visible`
   *
   */
  "overflow-x"?: Property.OverflowX | Conditions<Property.OverflowX>;
  /**
   * The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
   *
   *
   * **Initial value**: `visible`
   *
   */
  "overflow-y"?: Property.OverflowY | Conditions<Property.OverflowY>;
  /**
   * The **`overscroll-behavior-block`** CSS property sets the browser's behavior when the block direction boundary of a scrolling area is reached.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "overscroll-behavior-block"?:
    | Property.OverscrollBehaviorBlock
    | Conditions<Property.OverscrollBehaviorBlock>;
  /**
   * The **`overscroll-behavior-inline`** CSS property sets the browser's behavior when the inline direction boundary of a scrolling area is reached.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "overscroll-behavior-inline"?:
    | Property.OverscrollBehaviorInline
    | Conditions<Property.OverscrollBehaviorInline>;
  /**
   * The **`overscroll-behavior-x`** CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "overscroll-behavior-x"?:
    | Property.OverscrollBehaviorX
    | Conditions<Property.OverscrollBehaviorX>;
  /**
   * The **`overscroll-behavior-y`** CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "overscroll-behavior-y"?:
    | Property.OverscrollBehaviorY
    | Conditions<Property.OverscrollBehaviorY>;
  /**
   * The **`padding-block`** CSS shorthand property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  "padding-block"?: Property.PaddingBlock | Conditions<Property.PaddingBlock>;
  /**
   * The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  "padding-block-end"?:
    | Property.PaddingBlockEnd
    | Conditions<Property.PaddingBlockEnd>;
  /**
   * The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  "padding-block-start"?:
    | Property.PaddingBlockStart
    | Conditions<Property.PaddingBlockStart>;
  /**
   * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
   *
   *
   * **Initial value**: `0`
   *
   */
  "padding-bottom"?:
    | Property.PaddingBottom
    | Conditions<Property.PaddingBottom>;
  /**
   * The **`padding-inline`** CSS shorthand property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  "padding-inline"?:
    | Property.PaddingInline
    | Conditions<Property.PaddingInline>;
  /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  "padding-inline-end"?:
    | Property.PaddingInlineEnd
    | Conditions<Property.PaddingInlineEnd>;
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   *
   * **Initial value**: `0`
   *
   */
  "padding-inline-start"?:
    | Property.PaddingInlineStart
    | Conditions<Property.PaddingInlineStart>;
  /**
   * The **`padding-left`** CSS property sets the width of the padding area to the left of an element.
   *
   *
   * **Initial value**: `0`
   *
   */
  "padding-left"?: Property.PaddingLeft | Conditions<Property.PaddingLeft>;
  /**
   * The **`padding-right`** CSS property sets the width of the padding area on the right of an element.
   *
   *
   * **Initial value**: `0`
   *
   */
  "padding-right"?: Property.PaddingRight | Conditions<Property.PaddingRight>;
  /**
   * The **`padding-top`** CSS property sets the height of the padding area on the top of an element.
   *
   *
   * **Initial value**: `0`
   *
   */
  "padding-top"?: Property.PaddingTop | Conditions<Property.PaddingTop>;
  /**
   * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "page-break-after"?:
    | Property.PageBreakAfter
    | Conditions<Property.PageBreakAfter>;
  /**
   * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "page-break-before"?:
    | Property.PageBreakBefore
    | Conditions<Property.PageBreakBefore>;
  /**
   * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "page-break-inside"?:
    | Property.PageBreakInside
    | Conditions<Property.PageBreakInside>;
  /**
   * The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "paint-order"?: Property.PaintOrder | Conditions<Property.PaintOrder>;
  /**
   * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.
   *
   *
   * **Initial value**: `none`
   *
   */
  perspective?: Property.Perspective | Conditions<Property.Perspective>;
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   *
   *
   * **Initial value**: `50% 50%`
   *
   */
  "perspective-origin"?:
    | Property.PerspectiveOrigin
    | Conditions<Property.PerspectiveOrigin>;
  /**
   * The `**place-content**` CSS shorthand property allows you to align content along both the block and inline directions at once (i.e. the `align-content` and `justify-content` properties) in a relevant layout system such as Grid or Flexbox.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "place-content"?: Property.PlaceContent | Conditions<Property.PlaceContent>;
  /**
   * The **`pointer-events`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "pointer-events"?:
    | Property.PointerEvents
    | Conditions<Property.PointerEvents>;
  /**
   * The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
   *
   *
   * **Initial value**: `static`
   *
   */
  position?: Property.Position | Conditions<Property.Position>;
  /**
   * The **`quotes`** CSS property sets how the browser should render quotation marks that are added using the `open-quotes` or `close-quotes` values of the CSS `content` property.
   *
   *
   * **Initial value**: depends on user agent
   *
   */
  quotes?: Property.Quotes | Conditions<Property.Quotes>;
  /**
   * The **`resize`** CSS property sets whether an element is resizable, and if so, in which directions.
   *
   *
   * **Initial value**: `none`
   *
   */
  resize?: Property.Resize | Conditions<Property.Resize>;
  /**
   * The **`right`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
   *
   *
   * **Initial value**: `auto`
   *
   */
  right?: Property.Right | Conditions<Property.Right>;
  /**
   * The **`rotate`** CSS property allows you to specify rotation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` property.
   *
   *
   * **Initial value**: `none`
   *
   */
  rotate?: Property.Rotate | Conditions<Property.Rotate>;
  /**
   * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "row-gap"?: Property.RowGap | Conditions<Property.RowGap>;
  /**
   * The `**ruby-align**` CSS property defines the distribution of the different ruby elements over the base.
   *
   *
   * **Initial value**: `space-around`
   *
   */
  "ruby-align"?: Property.RubyAlign | Conditions<Property.RubyAlign>;
  /**
   *
   * **Initial value**: `separate`
   */
  "ruby-merge"?: Property.RubyMerge | Conditions<Property.RubyMerge>;
  /**
   * The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).
   *
   *
   * **Initial value**: `alternate`
   *
   */
  "ruby-position"?: Property.RubyPosition | Conditions<Property.RubyPosition>;
  /**
   * The **`scale`** CSS property allows you to specify scale transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   *
   * **Initial value**: `none`
   *
   */
  scale?: Property.Scale | Conditions<Property.Scale>;
  /**
   * The **`scroll-behavior`** CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "scroll-behavior"?:
    | Property.ScrollBehavior
    | Conditions<Property.ScrollBehavior>;
  /**
   * The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.
   *
   *
   * **Initial value**: `0`
   *
   */
  "scroll-margin"?: Property.ScrollMargin | Conditions<Property.ScrollMargin>;
  /**
   * The `scroll-margin-block` shorthand property sets the scroll margins of an element in the block dimension.
   *
   *
   * **Initial value**: `0`
   *
   */
  "scroll-margin-block"?:
    | Property.ScrollMarginBlock
    | Conditions<Property.ScrollMarginBlock>;
  /**
   * The `scroll-margin-block-end` property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  "scroll-margin-block-end"?:
    | Property.ScrollMarginBlockEnd
    | Conditions<Property.ScrollMarginBlockEnd>;
  /**
   * The `scroll-margin-block-start` property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  "scroll-margin-block-start"?:
    | Property.ScrollMarginBlockStart
    | Conditions<Property.ScrollMarginBlockStart>;
  /**
   * The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  "scroll-margin-bottom"?:
    | Property.ScrollMarginBottom
    | Conditions<Property.ScrollMarginBottom>;
  /**
   * The `scroll-margin-inline` shorthand property sets the scroll margins of an element in the inline dimension.
   *
   *
   * **Initial value**: `0`
   *
   */
  "scroll-margin-inline"?:
    | Property.ScrollMarginInline
    | Conditions<Property.ScrollMarginInline>;
  /**
   * The `scroll-margin-inline-end` property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  "scroll-margin-inline-end"?:
    | Property.ScrollMarginInlineEnd
    | Conditions<Property.ScrollMarginInlineEnd>;
  /**
   * The `scroll-margin-inline-start` property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  "scroll-margin-inline-start"?:
    | Property.ScrollMarginInlineStart
    | Conditions<Property.ScrollMarginInlineStart>;
  /**
   * The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  "scroll-margin-left"?:
    | Property.ScrollMarginLeft
    | Conditions<Property.ScrollMarginLeft>;
  /**
   * The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  "scroll-margin-right"?:
    | Property.ScrollMarginRight
    | Conditions<Property.ScrollMarginRight>;
  /**
   * The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  "scroll-margin-top"?:
    | Property.ScrollMarginTop
    | Conditions<Property.ScrollMarginTop>;
  /**
   * The **`scroll-padding`** shorthand property sets scroll padding on all sides of an element at once, much like the `padding` property does for padding on an element.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "scroll-padding"?:
    | Property.ScrollPadding
    | Conditions<Property.ScrollPadding>;
  /**
   * The `scroll-padding-block` shorthand property sets the scroll padding of an element in the block dimension.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "scroll-padding-block"?:
    | Property.ScrollPaddingBlock
    | Conditions<Property.ScrollPaddingBlock>;
  /**
   * The `scroll-padding-block-end` property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "scroll-padding-block-end"?:
    | Property.ScrollPaddingBlockEnd
    | Conditions<Property.ScrollPaddingBlockEnd>;
  /**
   * The `scroll-padding-block-start` property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "scroll-padding-block-start"?:
    | Property.ScrollPaddingBlockStart
    | Conditions<Property.ScrollPaddingBlockStart>;
  /**
   * The `scroll-padding-bottom` property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "scroll-padding-bottom"?:
    | Property.ScrollPaddingBottom
    | Conditions<Property.ScrollPaddingBottom>;
  /**
   * The `scroll-padding-inline` shorthand property sets the scroll padding of an element in the inline dimension.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "scroll-padding-inline"?:
    | Property.ScrollPaddingInline
    | Conditions<Property.ScrollPaddingInline>;
  /**
   * The `scroll-padding-inline-end` property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "scroll-padding-inline-end"?:
    | Property.ScrollPaddingInlineEnd
    | Conditions<Property.ScrollPaddingInlineEnd>;
  /**
   * The `scroll-padding-inline-start` property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "scroll-padding-inline-start"?:
    | Property.ScrollPaddingInlineStart
    | Conditions<Property.ScrollPaddingInlineStart>;
  /**
   * The `scroll-padding-left` property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "scroll-padding-left"?:
    | Property.ScrollPaddingLeft
    | Conditions<Property.ScrollPaddingLeft>;
  /**
   * The `scroll-padding-right` property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "scroll-padding-right"?:
    | Property.ScrollPaddingRight
    | Conditions<Property.ScrollPaddingRight>;
  /**
   * The **`scroll-padding-top`** property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "scroll-padding-top"?:
    | Property.ScrollPaddingTop
    | Conditions<Property.ScrollPaddingTop>;
  /**
   * The `scroll-snap-align` property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.
   *
   *
   * **Initial value**: `none`
   *
   */
  "scroll-snap-align"?:
    | Property.ScrollSnapAlign
    | Conditions<Property.ScrollSnapAlign>;
  /**
   * The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.
   *
   *
   * **Initial value**: `0`
   *
   */
  "scroll-snap-margin"?:
    | Property.ScrollMargin
    | Conditions<Property.ScrollMargin>;
  /**
   * The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  "scroll-snap-margin-bottom"?:
    | Property.ScrollMarginBottom
    | Conditions<Property.ScrollMarginBottom>;
  /**
   * The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  "scroll-snap-margin-left"?:
    | Property.ScrollMarginLeft
    | Conditions<Property.ScrollMarginLeft>;
  /**
   * The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  "scroll-snap-margin-right"?:
    | Property.ScrollMarginRight
    | Conditions<Property.ScrollMarginRight>;
  /**
   * The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   *
   * **Initial value**: `0`
   *
   */
  "scroll-snap-margin-top"?:
    | Property.ScrollMarginTop
    | Conditions<Property.ScrollMarginTop>;
  /**
   * The **`scroll-snap-stop`** CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "scroll-snap-stop"?:
    | Property.ScrollSnapStop
    | Conditions<Property.ScrollSnapStop>;
  /**
   * The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.
   *
   *
   * **Initial value**: `none`
   *
   */
  "scroll-snap-type"?:
    | Property.ScrollSnapType
    | Conditions<Property.ScrollSnapType>;
  /**
   * The **`scrollbar-color`** CSS property sets the color of the scrollbar track and thumb.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "scrollbar-color"?:
    | Property.ScrollbarColor
    | Conditions<Property.ScrollbarColor>;
  /**
   * The **`scrollbar-gutter`** CSS property allows authors to reserve space for the scrollbar, preventing unwanted layout changes as the content grows while also avoiding unnecessary visuals when scrolling isn't needed.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "scrollbar-gutter"?:
    | Property.ScrollbarGutter
    | Conditions<Property.ScrollbarGutter>;
  /**
   * The **`scrollbar-width`** property allows the author to set the maximum thickness of an element’s scrollbars when they are shown.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "scrollbar-width"?:
    | Property.ScrollbarWidth
    | Conditions<Property.ScrollbarWidth>;
  /**
   * The **`shape-image-threshold`** CSS property sets the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.
   *
   *
   * **Initial value**: `0.0`
   *
   */
  "shape-image-threshold"?:
    | Property.ShapeImageThreshold
    | Conditions<Property.ShapeImageThreshold>;
  /**
   * The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.
   *
   *
   * **Initial value**: `0`
   *
   */
  "shape-margin"?: Property.ShapeMargin | Conditions<Property.ShapeMargin>;
  /**
   * The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.
   *
   *
   * **Initial value**: `none`
   *
   */
  "shape-outside"?: Property.ShapeOutside | Conditions<Property.ShapeOutside>;
  /**
   * The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).
   *
   *
   * **Initial value**: `8`
   *
   */
  "tab-size"?: Property.TabSize | Conditions<Property.TabSize>;
  /**
   * The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "table-layout"?: Property.TableLayout | Conditions<Property.TableLayout>;
  /**
   * The **`text-align`** CSS property sets the horizontal alignment of a block element or table-cell box. This means it works like `vertical-align` but in the horizontal direction.
   *
   *
   * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
   *
   */
  "text-align"?: Property.TextAlign | Conditions<Property.TextAlign>;
  /**
   * The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "text-align-last"?:
    | Property.TextAlignLast
    | Conditions<Property.TextAlignLast>;
  /**
   * The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   *
   * **Initial value**: `none`
   *
   */
  "text-combine-upright"?:
    | Property.TextCombineUpright
    | Conditions<Property.TextCombineUpright>;
  /**
   * The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  "text-decoration-color"?:
    | Property.TextDecorationColor
    | Conditions<Property.TextDecorationColor>;
  /**
   * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.
   *
   *
   * **Initial value**: `none`
   *
   */
  "text-decoration-line"?:
    | Property.TextDecorationLine
    | Conditions<Property.TextDecorationLine>;
  /**
   * The **`text-decoration-skip`** CSS property sets what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
   *
   *
   * **Initial value**: `objects`
   *
   */
  "text-decoration-skip"?:
    | Property.TextDecorationSkip
    | Conditions<Property.TextDecorationSkip>;
  /**
   * The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "text-decoration-skip-ink"?:
    | Property.TextDecorationSkipInk
    | Conditions<Property.TextDecorationSkipInk>;
  /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.
   *
   *
   * **Initial value**: `solid`
   *
   */
  "text-decoration-style"?:
    | Property.TextDecorationStyle
    | Conditions<Property.TextDecorationStyle>;
  /**
   * The **`text-decoration-thickness`** CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "text-decoration-thickness"?:
    | Property.TextDecorationThickness
    | Conditions<Property.TextDecorationThickness>;
  /**
   * The **`text-decoration-thickness`** CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "text-decoration-width"?:
    | Property.TextDecorationThickness
    | Conditions<Property.TextDecorationThickness>;
  /**
   * The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.
   *
   *
   * **Initial value**: `currentcolor`
   *
   */
  "text-emphasis-color"?:
    | Property.TextEmphasisColor
    | Conditions<Property.TextEmphasisColor>;
  /**
   * The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.
   *
   *
   * **Initial value**: `over right`
   *
   */
  "text-emphasis-position"?:
    | Property.TextEmphasisPosition
    | Conditions<Property.TextEmphasisPosition>;
  /**
   * The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.
   *
   *
   * **Initial value**: `none`
   *
   */
  "text-emphasis-style"?:
    | Property.TextEmphasisStyle
    | Conditions<Property.TextEmphasisStyle>;
  /**
   * The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.
   *
   *
   * **Initial value**: `0`
   *
   */
  "text-indent"?: Property.TextIndent | Conditions<Property.TextIndent>;
  /**
   * The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "text-justify"?: Property.TextJustify | Conditions<Property.TextJustify>;
  /**
   * The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.
   *
   *
   * **Initial value**: `mixed`
   *
   */
  "text-orientation"?:
    | Property.TextOrientation
    | Conditions<Property.TextOrientation>;
  /**
   * The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.
   *
   *
   * **Initial value**: `clip`
   *
   */
  "text-overflow"?: Property.TextOverflow | Conditions<Property.TextOverflow>;
  /**
   * The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "text-rendering"?:
    | Property.TextRendering
    | Conditions<Property.TextRendering>;
  /**
   * The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
   *
   *
   * **Initial value**: `none`
   *
   */
  "text-shadow"?: Property.TextShadow | Conditions<Property.TextShadow>;
  /**
   * The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
   *
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   *
   */
  "text-size-adjust"?:
    | Property.TextSizeAdjust
    | Conditions<Property.TextSizeAdjust>;
  /**
   * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.
   *
   *
   * **Initial value**: `none`
   *
   */
  "text-transform"?:
    | Property.TextTransform
    | Conditions<Property.TextTransform>;
  /**
   * The **`text-underline-offset`** CSS property sets the offset distance of an underline text decoration line (applied using `text-decoration`) from its original position.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "text-underline-offset"?:
    | Property.TextUnderlineOffset
    | Conditions<Property.TextUnderlineOffset>;
  /**
   * The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "text-underline-position"?:
    | Property.TextUnderlinePosition
    | Conditions<Property.TextUnderlinePosition>;
  /**
   * The **`top`** CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.
   *
   *
   * **Initial value**: `auto`
   *
   */
  top?: Property.Top | Conditions<Property.Top>;
  /**
   * The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
   *
   *
   * **Initial value**: `auto`
   *
   */
  "touch-action"?: Property.TouchAction | Conditions<Property.TouchAction>;
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   *
   *
   * **Initial value**: `none`
   *
   */
  transform?: Property.Transform | Conditions<Property.Transform>;
  /**
   * The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.
   *
   *
   * **Initial value**: `view-box`
   *
   */
  "transform-box"?: Property.TransformBox | Conditions<Property.TransformBox>;
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   *
   * **Initial value**: `50% 50% 0`
   *
   */
  "transform-origin"?:
    | Property.TransformOrigin
    | Conditions<Property.TransformOrigin>;
  /**
   * The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
   *
   *
   * **Initial value**: `flat`
   *
   */
  "transform-style"?:
    | Property.TransformStyle
    | Conditions<Property.TransformStyle>;
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   *
   * **Initial value**: `0s`
   *
   */
  "transition-delay"?: string | Conditions<string>;
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   *
   * **Initial value**: `0s`
   *
   */
  "transition-duration"?:
    | Property.TransitionDuration
    | Conditions<Property.TransitionDuration>;
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   *
   * **Initial value**: all
   *
   */
  "transition-property"?:
    | Property.TransitionProperty
    | Conditions<Property.TransitionProperty>;
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   *
   * **Initial value**: `ease`
   *
   */
  "transition-timing-function"?:
    | Property.TransitionTimingFunction
    | Conditions<Property.TransitionTimingFunction>;
  /**
   * The **`translate`** CSS property allows you to specify translation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   *
   * **Initial value**: `none`
   *
   */
  translate?: Property.Translate | Conditions<Property.Translate>;
  /**
   * The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "unicode-bidi"?: Property.UnicodeBidi | Conditions<Property.UnicodeBidi>;
  /**
   * The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "user-select"?: Property.UserSelect | Conditions<Property.UserSelect>;
  /**
   * The **`vertical-align`** CSS property sets vertical alignment of an inline, inline-block or table-cell box.
   *
   *
   * **Initial value**: `baseline`
   *
   */
  "vertical-align"?:
    | Property.VerticalAlign
    | Conditions<Property.VerticalAlign>;
  /**
   * The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.
   *
   *
   * **Initial value**: `visible`
   *
   */
  visibility?: Property.Visibility | Conditions<Property.Visibility>;
  /**
   * The **`white-space`** CSS property sets how white space inside an element is handled.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "white-space"?: Property.WhiteSpace | Conditions<Property.WhiteSpace>;
  /**
   * The **`widows`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.
   *
   *
   * **Initial value**: `2`
   *
   */
  widows?: Property.Widows | Conditions<Property.Widows>;
  /**
   * The **`width`** CSS property sets an element's width. By default, it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area. It is also possible to pass a specific value.
   *
   *
   * **Initial value**: `auto`
   *
   */
  width?: Property.Width | Conditions<Property.Width>;
  /**
   * The **`will-change`** CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "will-change"?: Property.WillChange | Conditions<Property.WillChange>;
  /**
   * The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "word-break"?: Property.WordBreak | Conditions<Property.WordBreak>;
  /**
   * The **`word-spacing`** CSS property sets the length of space between words and between tags.
   *
   *
   * **Initial value**: `normal`
   *
   */
  "word-spacing"?: Property.WordSpacing | Conditions<Property.WordSpacing>;
  /**
   * The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
   *
   *
   * **Initial value**: `normal`
   */
  "word-wrap"?: Property.WordWrap | Conditions<Property.WordWrap>;
  /**
   * The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).
   *
   *
   * **Initial value**: `horizontal-tb`
   *
   */
  "writing-mode"?: Property.WritingMode | Conditions<Property.WritingMode>;
  /**
   * The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "z-index"?: Property.ZIndex | Conditions<Property.ZIndex>;
  /**
   * The non-standard **`zoom`** CSS property can be used to control the magnification level of an element. `transform: scale()` should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.
   *
   *
   * **Initial value**: `normal`
   *
   */
  zoom?: Property.Zoom | Conditions<Property.Zoom>;
}

export interface StandardShorthandPropertiesHyphen {
  /**
   * The `**all**` shorthand CSS property resets all of an element's properties except `unicode-bidi`, `direction`, and CSS Custom Properties. It can set properties to their initial or inherited values, or to the values specified in another stylesheet origin.
   *
   *
   * **Initial value**: There is no practical initial value for it.
   *
   */
  all?: Property.All | Conditions<Property.All>;
  /**
   * The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   *
   *
   */
  animation?: Property.Animation | Conditions<Property.Animation>;
  /**
   * The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.
   *
   *
   */
  background?: Property.Background | Conditions<Property.Background>;
  /**
   * The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   *
   * **Initial value**: `0% 0%`
   *
   */
  "background-position"?:
    | Property.BackgroundPosition
    | Conditions<Property.BackgroundPosition>;
  /**
   * The **`border`** shorthand CSS property sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`.
   *
   *
   */
  border?: Property.Border | Conditions<Property.Border>;
  /**
   * The **`border-block`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.
   *
   *
   */
  "border-block"?: Property.BorderBlock | Conditions<Property.BorderBlock>;
  /**
   * The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.
   *
   *
   */
  "border-block-end"?:
    | Property.BorderBlockEnd
    | Conditions<Property.BorderBlockEnd>;
  /**
   * The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.
   *
   *
   */
  "border-block-start"?:
    | Property.BorderBlockStart
    | Conditions<Property.BorderBlockStart>;
  /**
   * The **`border-bottom`** shorthand CSS property sets an element's bottom border. It sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`.
   *
   *
   */
  "border-bottom"?: Property.BorderBottom | Conditions<Property.BorderBottom>;
  /**
   * The **`border-color`** shorthand CSS property sets the color of an element's border.
   *
   *
   */
  "border-color"?: Property.BorderColor | Conditions<Property.BorderColor>;
  /**
   * The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.
   *
   *
   */
  "border-image"?: Property.BorderImage | Conditions<Property.BorderImage>;
  /**
   * The **`border-inline`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.
   *
   *
   */
  "border-inline"?: Property.BorderInline | Conditions<Property.BorderInline>;
  /**
   * The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.
   *
   *
   */
  "border-inline-end"?:
    | Property.BorderInlineEnd
    | Conditions<Property.BorderInlineEnd>;
  /**
   * The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.
   *
   *
   */
  "border-inline-start"?:
    | Property.BorderInlineStart
    | Conditions<Property.BorderInlineStart>;
  /**
   * The **`border-left`** shorthand CSS property sets all the properties of an element's left border.
   *
   *
   */
  "border-left"?: Property.BorderLeft | Conditions<Property.BorderLeft>;
  /**
   * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   *
   *
   */
  "border-radius"?: Property.BorderRadius | Conditions<Property.BorderRadius>;
  /**
   * The **`border-right`** shorthand CSS property sets all the properties of an element's right border.
   *
   *
   */
  "border-right"?: Property.BorderRight | Conditions<Property.BorderRight>;
  /**
   * The **`border-style`** shorthand CSS property sets the line style for all four sides of an element's border.
   *
   *
   */
  "border-style"?: Property.BorderStyle | Conditions<Property.BorderStyle>;
  /**
   * The **`border-top`** shorthand CSS property sets all the properties of an element's top border.
   *
   *
   */
  "border-top"?: Property.BorderTop | Conditions<Property.BorderTop>;
  /**
   * The **`border-width`** shorthand CSS property sets the width of an element's border.
   *
   *
   */
  "border-width"?: Property.BorderWidth | Conditions<Property.BorderWidth>;
  /**
   * The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.
   *
   *
   */
  "column-rule"?: Property.ColumnRule | Conditions<Property.ColumnRule>;
  /**
   * The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.
   *
   *
   */
  columns?: Property.Columns | Conditions<Property.Columns>;
  /**
   * The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.
   *
   *
   */
  flex?: Property.Flex | Conditions<Property.Flex>;
  /**
   * The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.
   *
   *
   */
  "flex-flow"?: Property.FlexFlow | Conditions<Property.FlexFlow>;
  /**
   * The **`font`** CSS shorthand property sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.
   *
   *
   */
  font?: Property.Font | Conditions<Property.Font>;
  /**
   * The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   *
   *
   */
  gap?: Property.Gap | Conditions<Property.Gap>;
  /**
   * The **`grid`** CSS property is a shorthand property that sets all of the explicit and implicit grid properties in a single declaration.
   *
   *
   */
  grid?: Property.Grid | Conditions<Property.Grid>;
  /**
   * The **`grid-area`** CSS shorthand property specifies a grid item’s size and location within a grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
   *
   *
   */
  "grid-area"?: Property.GridArea | Conditions<Property.GridArea>;
  /**
   * The **`grid-column`** CSS shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   *
   */
  "grid-column"?: Property.GridColumn | Conditions<Property.GridColumn>;
  /**
   * The **`grid-row`** CSS shorthand property specifies a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   *
   */
  "grid-row"?: Property.GridRow | Conditions<Property.GridRow>;
  /**
   * The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.
   *
   *
   */
  "grid-template"?: Property.GridTemplate | Conditions<Property.GridTemplate>;
  /**
   *
   * **Initial value**: `none`
   */
  "line-clamp"?: Property.LineClamp | Conditions<Property.LineClamp>;
  /**
   * The **`list-style`** CSS shorthand property allows you set all the list style properties at once.
   *
   *
   */
  "list-style"?: Property.ListStyle | Conditions<Property.ListStyle>;
  /**
   * The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
   *
   *
   */
  margin?: Property.Margin | Conditions<Property.Margin>;
  /**
   * The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.
   *
   *
   */
  mask?: Property.Mask | Conditions<Property.Mask>;
  /**
   * The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.
   *
   *
   */
  "mask-border"?: Property.MaskBorder | Conditions<Property.MaskBorder>;
  /**
   * The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.
   *
   *
   */
  motion?: Property.Offset | Conditions<Property.Offset>;
  /**
   * The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.
   *
   *
   */
  offset?: Property.Offset | Conditions<Property.Offset>;
  /**
   * The **`outline`** CSS shorthand property set all the outline properties in a single declaration.
   *
   *
   */
  outline?: Property.Outline | Conditions<Property.Outline>;
  /**
   * The **`overflow`** CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.
   *
   *
   * **Initial value**: `visible`
   *
   */
  overflow?: Property.Overflow | Conditions<Property.Overflow>;
  /**
   * The **`overscroll-behavior`** CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for `overscroll-behavior-x` and `overscroll-behavior-y`.
   *
   *
   * **Initial value**: `auto`
   *
   */
  "overscroll-behavior"?:
    | Property.OverscrollBehavior
    | Conditions<Property.OverscrollBehavior>;
  /**
   * The **`padding`** CSS shorthand property sets the padding area on all four sides of an element at once.
   *
   *
   */
  padding?: Property.Padding | Conditions<Property.Padding>;
  /**
   * The CSS **`place-items`** shorthand property allows you to align items along both the block and inline directions at once (i.e. the `align-items` and `justify-items` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not set, the first value is also used for it.
   *
   *
   */
  "place-items"?: Property.PlaceItems | Conditions<Property.PlaceItems>;
  /**
   * The **`place-self`** CSS shorthand property allows you to align an individual item in both the block and inline directions at once (i.e. the `align-self` and `justify-self` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not present, the first value is also used for it.
   *
   *
   */
  "place-self"?: Property.PlaceSelf | Conditions<Property.PlaceSelf>;
  /**
   * The **`text-decoration`** shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, `text-decoration-style`, and the newer `text-decoration-thickness` property.
   *
   *
   */
  "text-decoration"?:
    | Property.TextDecoration
    | Conditions<Property.TextDecoration>;
  /**
   * The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.
   *
   *
   */
  "text-emphasis"?: Property.TextEmphasis | Conditions<Property.TextEmphasis>;
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   *
   */
  transition?: Property.Transition | Conditions<Property.Transition>;
}

export interface StandardPropertiesHyphen
  extends StandardLonghandPropertiesHyphen,
    StandardShorthandPropertiesHyphen {}

export interface SvgPropertiesHyphen {
  "alignment-baseline"?:
    | Property.AlignmentBaseline
    | Conditions<Property.AlignmentBaseline>;
  "baseline-shift"?:
    | Property.BaselineShift
    | Conditions<Property.BaselineShift>;
  clip?: Property.Clip | Conditions<Property.Clip>;
  "clip-path"?: Property.ClipPath | Conditions<Property.ClipPath>;
  "clip-rule"?: Property.ClipRule | Conditions<Property.ClipRule>;
  color?: Property.Color | Conditions<Property.Color>;
  "color-interpolation"?:
    | Property.ColorInterpolation
    | Conditions<Property.ColorInterpolation>;
  "color-rendering"?:
    | Property.ColorRendering
    | Conditions<Property.ColorRendering>;
  cursor?: Property.Cursor | Conditions<Property.Cursor>;
  direction?: Property.Direction | Conditions<Property.Direction>;
  display?: Property.Display | Conditions<Property.Display>;
  "dominant-baseline"?:
    | Property.DominantBaseline
    | Conditions<Property.DominantBaseline>;
  fill?: Property.Fill | Conditions<Property.Fill>;
  "fill-opacity"?: Property.FillOpacity | Conditions<Property.FillOpacity>;
  "fill-rule"?: Property.FillRule | Conditions<Property.FillRule>;
  filter?: Property.Filter | Conditions<Property.Filter>;
  "flood-color"?: Property.FloodColor | Conditions<Property.FloodColor>;
  "flood-opacity"?: Property.FloodOpacity | Conditions<Property.FloodOpacity>;
  font?: Property.Font | Conditions<Property.Font>;
  "font-family"?: Property.FontFamily | Conditions<Property.FontFamily>;
  "font-size"?: Property.FontSize | Conditions<Property.FontSize>;
  "font-size-adjust"?:
    | Property.FontSizeAdjust
    | Conditions<Property.FontSizeAdjust>;
  "font-stretch"?: Property.FontStretch | Conditions<Property.FontStretch>;
  "font-style"?: Property.FontStyle | Conditions<Property.FontStyle>;
  "font-variant"?: Property.FontVariant | Conditions<Property.FontVariant>;
  "font-weight"?: Property.FontWeight | Conditions<Property.FontWeight>;
  "glyph-orientation-vertical"?:
    | Property.GlyphOrientationVertical
    | Conditions<Property.GlyphOrientationVertical>;
  "image-rendering"?:
    | Property.ImageRendering
    | Conditions<Property.ImageRendering>;
  "letter-spacing"?:
    | Property.LetterSpacing
    | Conditions<Property.LetterSpacing>;
  "lighting-color"?:
    | Property.LightingColor
    | Conditions<Property.LightingColor>;
  "line-height"?: Property.LineHeight | Conditions<Property.LineHeight>;
  marker?: Property.Marker | Conditions<Property.Marker>;
  "marker-end"?: Property.MarkerEnd | Conditions<Property.MarkerEnd>;
  "marker-mid"?: Property.MarkerMid | Conditions<Property.MarkerMid>;
  "marker-start"?: Property.MarkerStart | Conditions<Property.MarkerStart>;
  mask?: Property.Mask | Conditions<Property.Mask>;
  opacity?: Property.Opacity | Conditions<Property.Opacity>;
  overflow?: Property.Overflow | Conditions<Property.Overflow>;
  "paint-order"?: Property.PaintOrder | Conditions<Property.PaintOrder>;
  "pointer-events"?:
    | Property.PointerEvents
    | Conditions<Property.PointerEvents>;
  "shape-rendering"?:
    | Property.ShapeRendering
    | Conditions<Property.ShapeRendering>;
  "stop-color"?: Property.StopColor | Conditions<Property.StopColor>;
  "stop-opacity"?: Property.StopOpacity | Conditions<Property.StopOpacity>;
  stroke?: Property.Stroke | Conditions<Property.Stroke>;
  "stroke-dasharray"?:
    | Property.StrokeDasharray
    | Conditions<Property.StrokeDasharray>;
  "stroke-dashoffset"?:
    | Property.StrokeDashoffset
    | Conditions<Property.StrokeDashoffset>;
  "stroke-linecap"?:
    | Property.StrokeLinecap
    | Conditions<Property.StrokeLinecap>;
  "stroke-linejoin"?:
    | Property.StrokeLinejoin
    | Conditions<Property.StrokeLinejoin>;
  "stroke-miterlimit"?:
    | Property.StrokeMiterlimit
    | Conditions<Property.StrokeMiterlimit>;
  "stroke-opacity"?:
    | Property.StrokeOpacity
    | Conditions<Property.StrokeOpacity>;
  "stroke-width"?: Property.StrokeWidth | Conditions<Property.StrokeWidth>;
  "text-anchor"?: Property.TextAnchor | Conditions<Property.TextAnchor>;
  "text-decoration"?:
    | Property.TextDecoration
    | Conditions<Property.TextDecoration>;
  "text-rendering"?:
    | Property.TextRendering
    | Conditions<Property.TextRendering>;
  "unicode-bidi"?: Property.UnicodeBidi | Conditions<Property.UnicodeBidi>;
  "vector-effect"?: Property.VectorEffect | Conditions<Property.VectorEffect>;
  visibility?: Property.Visibility | Conditions<Property.Visibility>;
  "white-space"?: Property.WhiteSpace | Conditions<Property.WhiteSpace>;
  "word-spacing"?: Property.WordSpacing | Conditions<Property.WordSpacing>;
  "writing-mode"?: Property.WritingMode | Conditions<Property.WritingMode>;
}

export interface PropertiesHyphen
  extends StandardPropertiesHyphen,
    SvgPropertiesHyphen {}

export type StandardLonghandPropertiesFallback = {
  [P in keyof StandardLonghandProperties]:
    | StandardLonghandProperties[P]
    | StandardLonghandProperties[P][];
};

export type StandardShorthandPropertiesFallback = {
  [P in keyof StandardShorthandProperties]:
    | StandardShorthandProperties[P]
    | StandardShorthandProperties[P][];
};

export interface StandardPropertiesFallback
  extends StandardLonghandPropertiesFallback,
    StandardShorthandPropertiesFallback {}

export type SvgPropertiesFallback = {
  [P in keyof SvgProperties]: SvgProperties[P] | SvgProperties[P][];
};

export interface PropertiesFallback
  extends StandardPropertiesFallback,
    SvgPropertiesFallback {}

export type StandardLonghandPropertiesHyphenFallback = {
  [P in keyof StandardLonghandPropertiesHyphen]:
    | StandardLonghandPropertiesHyphen[P]
    | StandardLonghandPropertiesHyphen[P][];
};

export type StandardShorthandPropertiesHyphenFallback = {
  [P in keyof StandardShorthandPropertiesHyphen]:
    | StandardShorthandPropertiesHyphen[P]
    | StandardShorthandPropertiesHyphen[P][];
};

export interface StandardPropertiesHyphenFallback
  extends StandardLonghandPropertiesHyphenFallback,
    StandardShorthandPropertiesHyphenFallback {}

export type SvgPropertiesHyphenFallback = {
  [P in keyof SvgPropertiesHyphen]:
    | SvgPropertiesHyphen[P]
    | SvgPropertiesHyphen[P][];
};

export interface PropertiesHyphenFallback
  extends StandardPropertiesHyphenFallback,
    SvgPropertiesHyphenFallback {}

export type AtRules =
  | "@charset"
  | "@container"
  | "@counter-style"
  | "@document"
  | "@font-face"
  | "@font-feature-values"
  | "@import"
  | "@keyframes"
  | "@media"
  | "@layer"
  | "@namespace"
  | "@page"
  | "@property"
  | "@supports"
  | "@viewport";

export type AdvancedPseudos =
  | "&::cue("
  | "&::cue-region("
  | "&::part("
  | "&::slotted("
  | "&:dir("
  | "&:has("
  | "&:host("
  | "&:host-context("
  | "&:is("
  | "&:lang("
  | "&:not("
  | "&:nth-child("
  | "&:nth-last-child("
  | "&:nth-last-of-type("
  | "&:nth-of-type("
  | "&:where(";

export type SimplePseudos =
  | "&::after"
  | "&::backdrop"
  | "&::before"
  | "&::cue"
  | "&::cue-region"
  | "&::first-letter"
  | "&::first-line"
  | "&::grammar-error"
  | "&::marker"
  | "&::placeholder"
  | "&::selection"
  | "&::spelling-error"
  | "&::target-text"
  | "&:active"
  | "&:after"
  | "&:any-link"
  | "&:before"
  | "&:blank"
  | "&:checked"
  | "&:current"
  | "&:default"
  | "&:defined"
  | "&:disabled"
  | "&:empty"
  | "&:enabled"
  | "&:first"
  | "&:first-child"
  | "&:first-letter"
  | "&:first-line"
  | "&:first-of-type"
  | "&:focus"
  | "&:focus-visible"
  | "&:focus-within"
  | "&:fullscreen"
  | "&:future"
  | "&:hover"
  | "&:in-range"
  | "&:indeterminate"
  | "&:invalid"
  | "&:last-child"
  | "&:last-of-type"
  | "&:left"
  | "&:link"
  | "&:local-link"
  | "&:nth-col"
  | "&:nth-last-col"
  | "&:only-child"
  | "&:only-of-type"
  | "&:optional"
  | "&:out-of-range"
  | "&:past"
  | "&:paused"
  | "&:picture-in-picture"
  | "&:placeholder-shown"
  | "&:read-only"
  | "&:read-write"
  | "&:required"
  | "&:right"
  | "&:root"
  | "&:scope"
  | "&:target"
  | "&:target-within"
  | "&:user-invalid"
  | "&:user-valid"
  | "&:valid"
  | "&:visited";

export type Pseudos = AdvancedPseudos | SimplePseudos;

export type HtmlAttributes =
  | "[abbr]"
  | "[accept-charset]"
  | "[accept]"
  | "[accesskey]"
  | "[action]"
  | "[align]"
  | "[alink]"
  | "[allow]"
  | "[allowfullscreen]"
  | "[allowpaymentrequest]"
  | "[alt]"
  | "[archive]"
  | "[async]"
  | "[autobuffer]"
  | "[autocapitalize]"
  | "[autocomplete]"
  | "[autofocus]"
  | "[autoplay]"
  | "[axis]"
  | "[background]"
  | "[behavior]"
  | "[bgcolor]"
  | "[border]"
  | "[bottommargin]"
  | "[buffered]"
  | "[cellpadding]"
  | "[cellspacing]"
  | "[char]"
  | "[charoff]"
  | "[charset]"
  | "[checked]"
  | "[cite]"
  | "[class]"
  | "[classid]"
  | "[clear]"
  | "[code]"
  | "[codebase]"
  | "[codetype]"
  | "[color]"
  | "[cols]"
  | "[colspan]"
  | "[command]"
  | "[compact]"
  | "[content]"
  | "[contenteditable]"
  | "[contextmenu]"
  | "[controls]"
  | "[coords]"
  | "[crossorigin]"
  | "[data]"
  | "[datafld]"
  | "[datasrc]"
  | "[datetime]"
  | "[declare]"
  | "[decoding]"
  | "[default]"
  | "[defer]"
  | "[dir]"
  | "[direction]"
  | "[dirname]"
  | "[disabled]"
  | "[download]"
  | "[draggable]"
  | "[enctype]"
  | "[enterkeyhint]"
  | "[exportparts]"
  | "[face]"
  | "[for]"
  | "[form]"
  | "[formaction]"
  | "[formenctype]"
  | "[formmethod]"
  | "[formnovalidate]"
  | "[formtarget]"
  | "[frame]"
  | "[frameborder]"
  | "[headers]"
  | "[height]"
  | "[hidden]"
  | "[high]"
  | "[href]"
  | "[hreflang]"
  | "[hspace]"
  | "[http-equiv]"
  | "[icon]"
  | "[id]"
  | "[imagesizes]"
  | "[imagesrcset]"
  | "[inputmode]"
  | "[integrity]"
  | "[intrinsicsize]"
  | "[is]"
  | "[ismap]"
  | "[itemid]"
  | "[itemprop]"
  | "[itemref]"
  | "[itemscope]"
  | "[itemtype]"
  | "[kind]"
  | "[label]"
  | "[lang]"
  | "[language]"
  | "[leftmargin]"
  | "[link]"
  | "[loading]"
  | "[longdesc]"
  | "[loop]"
  | "[low]"
  | "[manifest]"
  | "[marginheight]"
  | "[marginwidth]"
  | "[max]"
  | "[maxlength]"
  | "[mayscript]"
  | "[media]"
  | "[method]"
  | "[methods]"
  | "[min]"
  | "[minlength]"
  | "[moz-opaque]"
  | "[mozallowfullscreen]"
  | "[mozcurrentsampleoffset]"
  | "[msallowfullscreen]"
  | "[multiple]"
  | "[muted]"
  | "[name]"
  | "[nohref]"
  | "[nomodule]"
  | "[nonce]"
  | "[noresize]"
  | "[noshade]"
  | "[novalidate]"
  | "[nowrap]"
  | "[object]"
  | "[onafterprint]"
  | "[onbeforeprint]"
  | "[onbeforeunload]"
  | "[onblur]"
  | "[onerror]"
  | "[onfocus]"
  | "[onhashchange]"
  | "[onlanguagechange]"
  | "[onload]"
  | "[onmessage]"
  | "[onoffline]"
  | "[ononline]"
  | "[onpopstate]"
  | "[onredo]"
  | "[onresize]"
  | "[onstorage]"
  | "[onundo]"
  | "[onunload]"
  | "[open]"
  | "[optimum]"
  | "[part]"
  | "[ping]"
  | "[placeholder]"
  | "[played]"
  | "[poster]"
  | "[prefetch]"
  | "[preload]"
  | "[profile]"
  | "[prompt]"
  | "[radiogroup]"
  | "[readonly]"
  | "[referrerPolicy]"
  | "[referrerpolicy]"
  | "[rel]"
  | "[required]"
  | "[rev]"
  | "[reversed]"
  | "[rightmargin]"
  | "[rows]"
  | "[rowspan]"
  | "[rules]"
  | "[sandbox-allow-downloads]"
  | "[sandbox-allow-modals]"
  | "[sandbox-allow-popups-to-escape-sandbox]"
  | "[sandbox-allow-popups]"
  | "[sandbox-allow-presentation]"
  | "[sandbox-allow-same-origin]"
  | "[sandbox-allow-storage-access-by-user-activation]"
  | "[sandbox-allow-top-navigation-by-user-activation]"
  | "[sandbox]"
  | "[scope]"
  | "[scoped]"
  | "[scrollamount]"
  | "[scrolldelay]"
  | "[scrolling]"
  | "[selected]"
  | "[shape]"
  | "[size]"
  | "[sizes]"
  | "[slot]"
  | "[span]"
  | "[spellcheck]"
  | "[src]"
  | "[srcdoc]"
  | "[srclang]"
  | "[srcset]"
  | "[standby]"
  | "[start]"
  | "[style]"
  | "[summary]"
  | "[tabindex]"
  | "[target]"
  | "[text]"
  | "[title]"
  | "[topmargin]"
  | "[translate]"
  | "[truespeed]"
  | "[type]"
  | "[usemap]"
  | "[valign]"
  | "[value]"
  | "[valuetype]"
  | "[version]"
  | "[vlink]"
  | "[volume]"
  | "[vspace]"
  | "[webkitallowfullscreen]"
  | "[width]"
  | "[wrap]"
  | "[xmlns]";

export type SvgAttributes =
  | "[accent-height]"
  | "[alignment-baseline]"
  | "[allowReorder]"
  | "[alphabetic]"
  | "[animation]"
  | "[arabic-form]"
  | "[ascent]"
  | "[attributeName]"
  | "[attributeType]"
  | "[azimuth]"
  | "[baseFrequency]"
  | "[baseProfile]"
  | "[baseline-shift]"
  | "[bbox]"
  | "[bias]"
  | "[by]"
  | "[calcMode]"
  | "[cap-height]"
  | "[class]"
  | "[clip-path]"
  | "[clip-rule]"
  | "[clipPathUnits]"
  | "[clip]"
  | "[color-interpolation-filters]"
  | "[color-interpolation]"
  | "[color-profile]"
  | "[color-rendering]"
  | "[color]"
  | "[contentScriptType]"
  | "[contentStyleType]"
  | "[cursor]"
  | "[cx]"
  | "[cy]"
  | "[d]"
  | "[descent]"
  | "[diffuseConstant]"
  | "[direction]"
  | "[display]"
  | "[divisor]"
  | "[document]"
  | "[dominant-baseline]"
  | "[download]"
  | "[dur]"
  | "[dx]"
  | "[dy]"
  | "[edgeMode]"
  | "[elevation]"
  | "[enable-background]"
  | "[externalResourcesRequired]"
  | "[fill-opacity]"
  | "[fill-rule]"
  | "[fill]"
  | "[filterRes]"
  | "[filterUnits]"
  | "[filter]"
  | "[flood-color]"
  | "[flood-opacity]"
  | "[font-family]"
  | "[font-size-adjust]"
  | "[font-size]"
  | "[font-stretch]"
  | "[font-style]"
  | "[font-variant]"
  | "[font-weight]"
  | "[format]"
  | "[fr]"
  | "[from]"
  | "[fx]"
  | "[fy]"
  | "[g1]"
  | "[g2]"
  | "[global]"
  | "[glyph-name]"
  | "[glyph-orientation-horizontal]"
  | "[glyph-orientation-vertical]"
  | "[glyphRef]"
  | "[gradientTransform]"
  | "[gradientUnits]"
  | "[graphical]"
  | "[hanging]"
  | "[hatchContentUnits]"
  | "[hatchUnits]"
  | "[height]"
  | "[horiz-adv-x]"
  | "[horiz-origin-x]"
  | "[horiz-origin-y]"
  | "[href]"
  | "[hreflang]"
  | "[id]"
  | "[ideographic]"
  | "[image-rendering]"
  | "[in2]"
  | "[in]"
  | "[k1]"
  | "[k2]"
  | "[k3]"
  | "[k4]"
  | "[k]"
  | "[kernelMatrix]"
  | "[kernelUnitLength]"
  | "[kerning]"
  | "[keyPoints]"
  | "[lang]"
  | "[lengthAdjust]"
  | "[letter-spacing]"
  | "[lighting-color]"
  | "[limitingConeAngle]"
  | "[local]"
  | "[marker-end]"
  | "[marker-mid]"
  | "[marker-start]"
  | "[markerHeight]"
  | "[markerUnits]"
  | "[markerWidth]"
  | "[maskContentUnits]"
  | "[maskUnits]"
  | "[mask]"
  | "[mathematical]"
  | "[media]"
  | "[mode]"
  | "[name]"
  | "[numOctaves]"
  | "[offset]"
  | "[opacity]"
  | "[operator]"
  | "[order]"
  | "[orient]"
  | "[orientation]"
  | "[origin]"
  | "[overflow]"
  | "[overline-position]"
  | "[overline-thickness]"
  | "[paint-order]"
  | "[panose-1]"
  | "[path]"
  | "[patternContentUnits]"
  | "[patternTransform]"
  | "[patternUnits]"
  | "[ping]"
  | "[pitch]"
  | "[pointer-events]"
  | "[pointsAtX]"
  | "[pointsAtY]"
  | "[pointsAtZ]"
  | "[points]"
  | "[preserveAlpha]"
  | "[preserveAspectRatio]"
  | "[primitiveUnits]"
  | "[r]"
  | "[radius]"
  | "[refX]"
  | "[refY]"
  | "[referrerPolicy]"
  | "[rel]"
  | "[rendering-intent]"
  | "[repeatCount]"
  | "[requiredExtensions]"
  | "[requiredFeatures]"
  | "[rotate]"
  | "[rx]"
  | "[ry]"
  | "[scale]"
  | "[seed]"
  | "[shape-rendering]"
  | "[side]"
  | "[slope]"
  | "[solid-color]"
  | "[solid-opacity]"
  | "[spacing]"
  | "[specularConstant]"
  | "[specularExponent]"
  | "[spreadMethod]"
  | "[startOffset]"
  | "[stdDeviation]"
  | "[stemh]"
  | "[stemv]"
  | "[stitchTiles]"
  | "[stop-color]"
  | "[stop-opacity]"
  | "[strikethrough-position]"
  | "[strikethrough-thickness]"
  | "[string]"
  | "[stroke-dasharray]"
  | "[stroke-dashoffset]"
  | "[stroke-linecap]"
  | "[stroke-linejoin]"
  | "[stroke-miterlimit]"
  | "[stroke-opacity]"
  | "[stroke-width]"
  | "[stroke]"
  | "[style]"
  | "[surfaceScale]"
  | "[systemLanguage]"
  | "[tabindex]"
  | "[targetX]"
  | "[targetY]"
  | "[target]"
  | "[text-anchor]"
  | "[text-decoration]"
  | "[text-overflow]"
  | "[text-rendering]"
  | "[textLength]"
  | "[title]"
  | "[to]"
  | "[transform-origin]"
  | "[transform]"
  | "[type]"
  | "[u1]"
  | "[u2]"
  | "[underline-position]"
  | "[underline-thickness]"
  | "[unicode-bidi]"
  | "[unicode-range]"
  | "[unicode]"
  | "[units-per-em]"
  | "[v-alphabetic]"
  | "[v-hanging]"
  | "[v-ideographic]"
  | "[v-mathematical]"
  | "[values]"
  | "[vector-effect]"
  | "[version]"
  | "[vert-adv-y]"
  | "[vert-origin-x]"
  | "[vert-origin-y]"
  | "[viewBox]"
  | "[viewTarget]"
  | "[visibility]"
  | "[white-space]"
  | "[width]"
  | "[widths]"
  | "[word-spacing]"
  | "[writing-mode]"
  | "[x-height]"
  | "[x1]"
  | "[x2]"
  | "[xChannelSelector]"
  | "[x]"
  | "[y1]"
  | "[y2]"
  | "[yChannelSelector]"
  | "[y]"
  | "[z]"
  | "[zoomAndPan]";

export type Globals = "inherit" | "initial" | "revert" | "unset";

export type OnlyObject = Record<never, never>;

export type OnlyNumber = number & OnlyObject;

export type OnlyString = string & OnlyObject;

export type OnlyStringNumeric = (number | string) & OnlyObject;

export namespace Property {
  export type AlignContent =
    | DataType.ContentDistribution
    | DataType.ContentPosition
    | "baseline"
    | "normal"
    | OnlyString;

  export type AlignItems =
    | DataType.SelfPosition
    | "baseline"
    | "normal"
    | "stretch"
    | OnlyString;

  export type AlignSelf =
    | DataType.SelfPosition
    | "auto"
    | "baseline"
    | "normal"
    | "stretch"
    | OnlyString;

  export type AlignTracks =
    | DataType.ContentDistribution
    | DataType.ContentPosition
    | "baseline"
    | "normal"
    | OnlyString;

  export type All = never;

  export type Animation = DataType.SingleAnimation | OnlyString;

  export type AnimationDelay = never | OnlyString;

  export type AnimationDirection =
    | DataType.SingleAnimationDirection
    | OnlyString;

  export type AnimationDuration = never | OnlyString;

  export type AnimationFillMode = DataType.SingleAnimationFillMode | OnlyString;

  export type AnimationIterationCount = "infinite" | OnlyStringNumeric;

  export type AnimationName = "none" | OnlyString;

  export type AnimationPlayState = "paused" | "running" | OnlyString;

  export type AnimationTimingFunction = DataType.EasingFunction | OnlyString;

  export type Appearance =
    | DataType.CompatAuto
    | "auto"
    | "menulist-button"
    | "none"
    | "textfield";

  export type AspectRatio = "auto" | OnlyString;

  export type Azimuth =
    | "behind"
    | "center"
    | "center-left"
    | "center-right"
    | "far-left"
    | "far-right"
    | "left"
    | "left-side"
    | "leftwards"
    | "right"
    | "right-side"
    | "rightwards"
    | OnlyString;

  export type BackdropFilter = "none" | OnlyString;

  export type BackfaceVisibility = "hidden" | "visible";

  export type Background = DataType.FinalBgLayer | OnlyString;

  export type BackgroundAttachment = DataType.Attachment | OnlyString;

  export type BackgroundBlendMode = DataType.BlendMode | OnlyString;

  export type BackgroundClip = DataType.Box | OnlyString;

  export type BackgroundColor = DataType.Color;

  export type BackgroundImage = string;

  export type BackgroundOrigin = DataType.Box | OnlyString;

  export type BackgroundPosition = DataType.BgPosition | OnlyString;

  export type BackgroundPositionX =
    | "center"
    | "left"
    | "right"
    | "x-end"
    | "x-start"
    | OnlyStringNumeric;

  export type BackgroundPositionY =
    | "bottom"
    | "center"
    | "top"
    | "y-end"
    | "y-start"
    | OnlyStringNumeric;

  export type BackgroundRepeat = DataType.RepeatStyle | OnlyString;

  export type BackgroundSize = DataType.BgSize | OnlyString;

  export type BlockOverflow = "clip" | "ellipsis" | OnlyString;

  export type BlockSize =
    | number
    | "auto"
    | "stretch"
    | "fit-content"
    | "max-content"
    | "min-content"
    | OnlyString;

  export type Border =
    | DataType.LineWidth
    | DataType.LineStyle
    | DataType.Color
    | OnlyString;

  export type BorderBlock =
    | DataType.LineWidth
    | DataType.LineStyle
    | DataType.Color
    | OnlyString;

  export type BorderBlockColor = DataType.Color | OnlyString;

  export type BorderBlockEnd =
    | DataType.LineWidth
    | DataType.LineStyle
    | DataType.Color
    | OnlyString;

  export type BorderBlockEndColor = DataType.Color;

  export type BorderBlockEndStyle = DataType.LineStyle;

  export type BorderBlockEndWidth = DataType.LineWidth;

  export type BorderBlockStart =
    | DataType.LineWidth
    | DataType.LineStyle
    | DataType.Color
    | OnlyString;

  export type BorderBlockStartColor = DataType.Color;

  export type BorderBlockStartStyle = DataType.LineStyle;

  export type BorderBlockStartWidth = DataType.LineWidth;

  export type BorderBlockStyle = DataType.LineStyle;

  export type BorderBlockWidth = DataType.LineWidth;

  export type BorderBottom =
    | DataType.LineWidth
    | DataType.LineStyle
    | DataType.Color
    | OnlyString;

  export type BorderBottomColor = DataType.Color;

  export type BorderBottomLeftRadius = OnlyStringNumeric;

  export type BorderBottomRightRadius = OnlyStringNumeric;

  export type BorderBottomStyle = DataType.LineStyle;

  export type BorderBottomWidth = DataType.LineWidth;

  export type BorderCollapse = "collapse" | "separate";

  export type BorderColor = DataType.Color | OnlyString;

  export type BorderEndEndRadius = OnlyStringNumeric;

  export type BorderEndStartRadius = OnlyStringNumeric;

  export type BorderImage =
    | "none"
    | "repeat"
    | "round"
    | "space"
    | "stretch"
    | OnlyStringNumeric;

  export type BorderImageOutset = OnlyStringNumeric;

  export type BorderImageRepeat =
    | "repeat"
    | "round"
    | "space"
    | "stretch"
    | OnlyString;

  export type BorderImageSlice = OnlyStringNumeric;

  export type BorderImageSource = "none" | OnlyString;

  export type BorderImageWidth = "auto" | OnlyStringNumeric;

  export type BorderInline =
    | DataType.LineWidth
    | DataType.LineStyle
    | DataType.Color
    | OnlyString;

  export type BorderInlineColor = DataType.Color | OnlyString;

  export type BorderInlineEnd =
    | DataType.LineWidth
    | DataType.LineStyle
    | DataType.Color
    | OnlyString;

  export type BorderInlineEndColor = DataType.Color;

  export type BorderInlineEndStyle = DataType.LineStyle;

  export type BorderInlineEndWidth = DataType.LineWidth;

  export type BorderInlineStart =
    | DataType.LineWidth
    | DataType.LineStyle
    | DataType.Color
    | OnlyString;

  export type BorderInlineStartColor = DataType.Color;

  export type BorderInlineStartStyle = DataType.LineStyle;

  export type BorderInlineStartWidth = DataType.LineWidth;

  export type BorderInlineStyle = DataType.LineStyle;

  export type BorderInlineWidth = DataType.LineWidth;

  export type BorderLeft =
    | DataType.LineWidth
    | DataType.LineStyle
    | DataType.Color
    | OnlyString;

  export type BorderLeftColor = DataType.Color;

  export type BorderLeftStyle = DataType.LineStyle;

  export type BorderLeftWidth = DataType.LineWidth;

  export type BorderRadius = OnlyStringNumeric;

  export type BorderRight =
    | DataType.LineWidth
    | DataType.LineStyle
    | DataType.Color
    | OnlyString;

  export type BorderRightColor = DataType.Color;

  export type BorderRightStyle = DataType.LineStyle;

  export type BorderRightWidth = DataType.LineWidth;

  export type BorderSpacing = OnlyStringNumeric;

  export type BorderStartEndRadius = OnlyStringNumeric;

  export type BorderStartStartRadius = OnlyStringNumeric;

  export type BorderStyle = DataType.LineStyle | OnlyString;

  export type BorderTop =
    | DataType.LineWidth
    | DataType.LineStyle
    | DataType.Color
    | OnlyString;

  export type BorderTopColor = DataType.Color;

  export type BorderTopLeftRadius = OnlyStringNumeric;

  export type BorderTopRightRadius = OnlyStringNumeric;

  export type BorderTopStyle = DataType.LineStyle;

  export type BorderTopWidth = DataType.LineWidth;

  export type BorderWidth = DataType.LineWidth | OnlyString;

  export type Bottom = string;

  export type BoxAlign = "baseline" | "center" | "end" | "start" | "stretch";

  export type BoxDecorationBreak = "clone" | "slice";

  export type BoxDirection = "inherit" | "normal" | "reverse";

  export type BoxFlex = OnlyNumber;

  export type BoxFlexGroup = OnlyNumber;

  export type BoxLines = "multiple" | "single";

  export type BoxOrdinalGroup = OnlyNumber;

  export type BoxOrient =
    | "block-axis"
    | "horizontal"
    | "inherit"
    | "inline-axis"
    | "vertical";

  export type BoxPack = "center" | "end" | "justify" | "start";

  export type BoxShadow = "none" | OnlyString;

  export type BoxSizing = "border-box" | "content-box";

  export type BreakAfter =
    | "all"
    | "always"
    | "auto"
    | "avoid"
    | "avoid-column"
    | "avoid-page"
    | "avoid-region"
    | "column"
    | "left"
    | "page"
    | "recto"
    | "region"
    | "right"
    | "verso";

  export type BreakBefore =
    | "all"
    | "always"
    | "auto"
    | "avoid"
    | "avoid-column"
    | "avoid-page"
    | "avoid-region"
    | "column"
    | "left"
    | "page"
    | "recto"
    | "region"
    | "right"
    | "verso";

  export type BreakInside =
    | "auto"
    | "avoid"
    | "avoid-column"
    | "avoid-page"
    | "avoid-region";

  export type CaptionSide =
    | "block-end"
    | "block-start"
    | "bottom"
    | "inline-end"
    | "inline-start"
    | "top";

  export type CaretColor = DataType.Color | "auto";

  export type Clear =
    | "both"
    | "inline-end"
    | "inline-start"
    | "left"
    | "none"
    | "right";

  export type Clip = "auto" | OnlyString;

  export type ClipPath = DataType.GeometryBox | "none" | OnlyString;

  export type Color = DataType.Color;

  export type ColorAdjust = "economy" | "exact";

  export type ColorScheme =
    | "dark"
    | "light"
    | "light dark"
    | "normal"
    | OnlyString;

  export type ColumnCount = "auto" | OnlyNumber;

  export type ColumnFill = "auto" | "balance";

  export type ColumnGap = "normal" | OnlyStringNumeric;

  export type ColumnRule =
    | DataType.LineWidth
    | DataType.LineStyle
    | DataType.Color
    | OnlyString;

  export type ColumnRuleColor = DataType.Color;

  export type ColumnRuleStyle = DataType.LineStyle | OnlyString;

  export type ColumnRuleWidth = DataType.LineWidth | OnlyString;

  export type ColumnSpan = "all" | "none";

  export type ColumnWidth = number | "auto";

  export type Columns = "auto" | OnlyStringNumeric;

  export type Contain =
    | "content"
    | "layout"
    | "none"
    | "paint"
    | "size"
    | "strict"
    | "style"
    | OnlyString;

  export type Content = DataType.ContentList | "none" | "normal" | OnlyString;

  export type ContentVisibility = "auto" | "hidden" | "visible";

  export type CounterIncrement = "none" | OnlyString;

  export type CounterReset = "none" | OnlyString;

  export type CounterSet = "none" | OnlyString;

  export type Cursor =
    | "alias"
    | "all-scroll"
    | "auto"
    | "cell"
    | "col-resize"
    | "context-menu"
    | "copy"
    | "crosshair"
    | "default"
    | "e-resize"
    | "ew-resize"
    | "grab"
    | "grabbing"
    | "help"
    | "move"
    | "n-resize"
    | "ne-resize"
    | "nesw-resize"
    | "no-drop"
    | "none"
    | "not-allowed"
    | "ns-resize"
    | "nw-resize"
    | "nwse-resize"
    | "pointer"
    | "progress"
    | "row-resize"
    | "s-resize"
    | "se-resize"
    | "sw-resize"
    | "text"
    | "vertical-text"
    | "w-resize"
    | "wait"
    | "zoom-in"
    | "zoom-out"
    | OnlyString;

  export type Direction = "ltr" | "rtl";

  export type Display =
    | DataType.DisplayOutside
    | DataType.DisplayInside
    | DataType.DisplayInternal
    | DataType.DisplayLegacy
    | "contents"
    | "list-item"
    | "none"
    | OnlyString;

  export type EmptyCells = "hide" | "show";

  export type Filter = "none" | OnlyString;

  export type Flex =
    | "auto"
    | "content"
    | "stretch"
    | "fit-content"
    | "max-content"
    | "min-content"
    | "none"
    | OnlyStringNumeric;

  export type FlexBasis =
    | number
    | "auto"
    | "content"
    | "stretch"
    | "fit-content"
    | "max-content"
    | "min-content"
    | OnlyString;

  export type FlexDirection =
    | "column"
    | "column-reverse"
    | "row"
    | "row-reverse";

  export type FlexFlow =
    | "column"
    | "column-reverse"
    | "nowrap"
    | "row"
    | "row-reverse"
    | "wrap"
    | "wrap-reverse"
    | OnlyString;

  export type FlexGrow = string;

  export type FlexShrink = string;

  export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

  export type Float = "inline-end" | "inline-start" | "left" | "none" | "right";

  export type Font =
    | "caption"
    | "icon"
    | "menu"
    | "message-box"
    | "small-caption"
    | "status-bar"
    | OnlyString;

  export type FontFamily = DataType.GenericFamily | OnlyString;

  export type FontFeatureSettings = "normal" | OnlyString;

  export type FontKerning = "auto" | "none" | "normal";

  export type FontLanguageOverride = "normal" | OnlyString;

  export type FontOpticalSizing = "auto" | "none";

  export type FontSize =
    | DataType.AbsoluteSize
    | "larger"
    | "smaller"
    | OnlyStringNumeric;

  export type FontSizeAdjust = "none" | OnlyNumber;

  export type FontSmooth =
    | DataType.AbsoluteSize
    | number
    | "always"
    | "auto"
    | "never";

  export type FontStretch = DataType.FontStretchAbsolute;

  export type FontStyle = "italic" | "normal" | "oblique" | OnlyString;

  export type FontSynthesis = "none" | "style" | "weight" | OnlyString;

  export type FontVariant =
    | DataType.EastAsianVariantValues
    | "all-petite-caps"
    | "all-small-caps"
    | "common-ligatures"
    | "contextual"
    | "diagonal-fractions"
    | "discretionary-ligatures"
    | "full-width"
    | "historical-forms"
    | "historical-ligatures"
    | "lining-nums"
    | "no-common-ligatures"
    | "no-contextual"
    | "no-discretionary-ligatures"
    | "no-historical-ligatures"
    | "none"
    | "normal"
    | "oldstyle-nums"
    | "ordinal"
    | "petite-caps"
    | "proportional-nums"
    | "proportional-width"
    | "ruby"
    | "slashed-zero"
    | "small-caps"
    | "stacked-fractions"
    | "tabular-nums"
    | "titling-caps"
    | "unicase"
    | OnlyString;

  export type FontVariantAlternates =
    | "historical-forms"
    | "normal"
    | OnlyString;

  export type FontVariantCaps =
    | "all-petite-caps"
    | "all-small-caps"
    | "normal"
    | "petite-caps"
    | "small-caps"
    | "titling-caps"
    | "unicase";

  export type FontVariantEastAsian =
    | DataType.EastAsianVariantValues
    | "full-width"
    | "normal"
    | "proportional-width"
    | "ruby"
    | OnlyString;

  export type FontVariantLigatures =
    | "common-ligatures"
    | "contextual"
    | "discretionary-ligatures"
    | "historical-ligatures"
    | "no-common-ligatures"
    | "no-contextual"
    | "no-discretionary-ligatures"
    | "no-historical-ligatures"
    | "none"
    | "normal"
    | OnlyString;

  export type FontVariantNumeric =
    | "diagonal-fractions"
    | "lining-nums"
    | "normal"
    | "oldstyle-nums"
    | "ordinal"
    | "proportional-nums"
    | "slashed-zero"
    | "stacked-fractions"
    | "tabular-nums"
    | OnlyString;

  export type FontVariantPosition = "normal" | "sub" | "super";

  export type FontVariationSettings = "normal" | OnlyString;

  export type FontWeight = DataType.FontWeightAbsolute | "bolder" | "lighter";

  export type ForcedColorAdjust = "auto" | "none";

  export type Gap = "normal" | OnlyStringNumeric;

  export type Grid = "none" | OnlyString;

  export type GridArea = string;

  export type GridAutoColumns = DataType.TrackBreadth | OnlyString;

  export type GridAutoFlow = "column" | "dense" | "row" | OnlyString;

  export type GridAutoRows = DataType.TrackBreadth | OnlyString;

  export type GridColumn = DataType.GridLine | OnlyString;

  export type GridColumnEnd = DataType.GridLine;

  export type GridColumnGap = OnlyStringNumeric;

  export type GridColumnStart = DataType.GridLine;

  export type GridGap = OnlyStringNumeric;

  export type GridRow = DataType.GridLine | OnlyString;

  export type GridRowEnd = DataType.GridLine;

  export type GridRowGap = OnlyStringNumeric;

  export type GridRowStart = DataType.GridLine;

  export type GridTemplate = "none" | OnlyString;

  export type GridTemplateAreas = string;

  export type GridTemplateColumns =
    | DataType.TrackBreadth
    | "none"
    | "subgrid"
    | OnlyString;

  export type GridTemplateRows =
    | DataType.TrackBreadth
    | "none"
    | "subgrid"
    | OnlyString;

  export type HangingPunctuation =
    | "allow-end"
    | "first"
    | "force-end"
    | "last"
    | "none"
    | OnlyString;

  export type Height =
    | number
    | "auto"
    | "stretch"
    | "fit-content"
    | "max-content"
    | "min-content"
    | OnlyString;

  export type Hyphens = "auto" | "manual" | "none";

  export type ImageOrientation = "flip" | "from-image" | OnlyString;

  export type ImageRendering = "auto" | "crisp-edges" | "pixelated";

  export type ImageResolution = "from-image" | OnlyString;

  export type ImeMode = "active" | "auto" | "disabled" | "inactive" | "normal";

  export type InitialLetter = "normal" | OnlyStringNumeric;

  export type InlineSize =
    | number
    | "auto"
    | "stretch"
    | "fit-content"
    | "max-content"
    | "min-content"
    | OnlyString;

  export type Inset = "auto" | OnlyStringNumeric;

  export type InsetBlock = "auto" | OnlyStringNumeric;

  export type InsetBlockEnd = "auto" | OnlyStringNumeric;

  export type InsetBlockStart = "auto" | OnlyStringNumeric;

  export type InsetInline = "auto" | OnlyStringNumeric;

  export type InsetInlineEnd = "auto" | OnlyStringNumeric;

  export type InsetInlineStart = "auto" | OnlyStringNumeric;

  export type Isolation = "auto" | "isolate";

  export type JustifyContent =
    | DataType.ContentDistribution
    | DataType.ContentPosition
    | "left"
    | "normal"
    | "right"
    | OnlyString;

  export type JustifyItems =
    | DataType.SelfPosition
    | "baseline"
    | "left"
    | "legacy"
    | "normal"
    | "right"
    | "stretch"
    | OnlyString;

  export type JustifySelf =
    | DataType.SelfPosition
    | "auto"
    | "baseline"
    | "left"
    | "normal"
    | "right"
    | "stretch"
    | OnlyString;

  export type JustifyTracks =
    | DataType.ContentDistribution
    | DataType.ContentPosition
    | "left"
    | "normal"
    | "right"
    | OnlyString;

  export type Left = string;

  export type LetterSpacing = "normal" | OnlyStringNumeric;

  export type LineBreak = "anywhere" | "auto" | "loose" | "normal" | "strict";

  export type LineClamp = "none" | OnlyNumber;

  export type LineHeight = "normal" | OnlyStringNumeric;

  export type LineHeightStep = number;

  export type ListStyle = "inside" | "none" | "outside" | OnlyString;

  export type ListStyleImage = "none" | OnlyString;

  export type ListStylePosition = "inside" | "outside";

  export type ListStyleType = "none" | OnlyString;

  export type Margin = "auto" | OnlyStringNumeric;

  export type MarginBlock = "auto" | OnlyStringNumeric;

  export type MarginBlockEnd = "auto" | OnlyStringNumeric;

  export type MarginBlockStart = "auto" | OnlyStringNumeric;

  export type MarginBottom = "auto" | OnlyStringNumeric;

  export type MarginInline = "auto" | OnlyStringNumeric;

  export type MarginInlineEnd = "auto" | OnlyStringNumeric;

  export type MarginInlineStart = "auto" | OnlyStringNumeric;

  export type MarginLeft = "auto" | OnlyStringNumeric;

  export type MarginRight = "auto" | OnlyStringNumeric;

  export type MarginTop = "auto" | OnlyStringNumeric;

  export type Mask = DataType.MaskLayer | OnlyString;

  export type MaskBorder =
    | "alpha"
    | "luminance"
    | "none"
    | "repeat"
    | "round"
    | "space"
    | "stretch"
    | OnlyStringNumeric;

  export type MaskBorderMode = "alpha" | "luminance";

  export type MaskBorderOutset = OnlyStringNumeric;

  export type MaskBorderRepeat =
    | "repeat"
    | "round"
    | "space"
    | "stretch"
    | OnlyString;

  export type MaskBorderSlice = OnlyStringNumeric;

  export type MaskBorderSource = "none" | OnlyString;

  export type MaskBorderWidth = "auto" | OnlyStringNumeric;

  export type MaskClip = DataType.GeometryBox | "no-clip" | OnlyString;

  export type MaskComposite = DataType.CompositingOperator | OnlyString;

  export type MaskImage = "none" | OnlyString;

  export type MaskMode = DataType.MaskingMode | OnlyString;

  export type MaskOrigin = DataType.Box | "margin-box" | OnlyString;

  export type MaskPosition = DataType.Position | OnlyString;

  export type MaskRepeat = DataType.RepeatStyle | OnlyString;

  export type MaskSize = DataType.BgSize | OnlyString;

  export type MaskType = "alpha" | "luminance";

  export type MathStyle = "compact" | "normal";

  export type MaxBlockSize =
    | number
    | "stretch"
    | "fit-content"
    | "max-content"
    | "min-content"
    | "none"
    | OnlyString;

  export type MaxHeight =
    | number
    | "stretch"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "none"
    | OnlyString;

  export type MaxInlineSize =
    | number
    | "stretch"
    | "fit-content"
    | "max-content"
    | "min-content"
    | "none"
    | OnlyString;

  export type MaxLines = "none" | OnlyNumber;

  export type MaxWidth =
    | number
    | "stretch"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "none"
    | OnlyString;

  export type MinBlockSize =
    | number
    | "auto"
    | "stretch"
    | "fit-content"
    | "max-content"
    | "min-content"
    | OnlyString;

  export type MinHeight =
    | number
    | "auto"
    | "stretch"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | OnlyString;

  export type MinInlineSize =
    | number
    | "auto"
    | "stretch"
    | "fit-content"
    | "max-content"
    | "min-content"
    | OnlyString;

  export type MinWidth =
    | number
    | "auto"
    | "stretch"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "min-intrinsic"
    | OnlyString;

  export type MixBlendMode = DataType.BlendMode;

  export type Offset =
    | DataType.Position
    | DataType.GeometryBox
    | "auto"
    | "none"
    | OnlyString;

  export type OffsetDistance = OnlyStringNumeric;

  export type OffsetPath = DataType.GeometryBox | "none" | OnlyString;

  export type OffsetRotate = "auto" | "reverse" | OnlyString;

  export type ObjectFit = "contain" | "cover" | "fill" | "none" | "scale-down";

  export type ObjectPosition = DataType.Position;

  export type OffsetAnchor = DataType.Position | "auto";

  export type Opacity = string;

  export type Order = number;

  export type Orphans = OnlyNumber;

  export type Outline =
    | DataType.Color
    | DataType.LineStyle
    | DataType.LineWidth
    | "auto"
    | "invert"
    | OnlyString;

  export type OutlineColor = DataType.Color | "invert";

  export type OutlineOffset = DataType.LineWidth | OnlyString;

  export type OutlineStyle = DataType.LineStyle | "auto" | OnlyString;

  export type OutlineWidth = DataType.LineWidth;

  export type Overflow =
    | "auto"
    | "clip"
    | "hidden"
    | "scroll"
    | "visible"
    | OnlyString;

  export type OverflowAnchor = "auto" | "none";

  export type OverflowBlock = "auto" | "clip" | "hidden" | "scroll" | "visible";

  export type OverflowClipBox = "content-box" | "padding-box";

  export type OverflowClipMargin = DataType.VisualBox | OnlyStringNumeric;

  export type OverflowInline =
    | "auto"
    | "clip"
    | "hidden"
    | "scroll"
    | "visible";

  export type OverflowWrap = "anywhere" | "break-word" | "normal";

  export type OverflowX = "auto" | "clip" | "hidden" | "scroll" | "visible";

  export type OverflowY = "auto" | "clip" | "hidden" | "scroll" | "visible";

  export type OverscrollBehavior = "auto" | "contain" | "none" | OnlyString;

  export type OverscrollBehaviorBlock = "auto" | "contain" | "none";

  export type OverscrollBehaviorInline = "auto" | "contain" | "none";

  export type OverscrollBehaviorX = "auto" | "contain" | "none";

  export type OverscrollBehaviorY = "auto" | "contain" | "none";

  export type Padding = OnlyStringNumeric;

  export type PaddingBlock = OnlyStringNumeric;

  export type PaddingBlockEnd = OnlyStringNumeric;

  export type PaddingBlockStart = OnlyStringNumeric;

  export type PaddingBottom = OnlyStringNumeric;

  export type PaddingInline = OnlyStringNumeric;

  export type PaddingInlineEnd = OnlyStringNumeric;

  export type PaddingInlineStart = OnlyStringNumeric;

  export type PaddingLeft = OnlyStringNumeric;

  export type PaddingRight = OnlyStringNumeric;

  export type PaddingTop = OnlyStringNumeric;

  export type PageBreakAfter =
    | "always"
    | "auto"
    | "avoid"
    | "left"
    | "recto"
    | "right"
    | "verso";

  export type PageBreakBefore =
    | "always"
    | "auto"
    | "avoid"
    | "left"
    | "recto"
    | "right"
    | "verso";

  export type PageBreakInside = "auto" | "avoid";

  export type PaintOrder =
    | "fill"
    | "markers"
    | "normal"
    | "stroke"
    | OnlyString;

  export type Perspective = number | "none";

  export type PerspectiveOrigin = DataType.Position;

  export type PlaceContent =
    | DataType.ContentDistribution
    | DataType.ContentPosition
    | "baseline"
    | "normal"
    | OnlyString;

  export type PlaceItems =
    | DataType.SelfPosition
    | "baseline"
    | "normal"
    | "stretch"
    | OnlyString;

  export type PlaceSelf =
    | DataType.SelfPosition
    | "auto"
    | "baseline"
    | "normal"
    | "stretch"
    | OnlyString;

  export type PointerEvents =
    | "all"
    | "auto"
    | "fill"
    | "inherit"
    | "none"
    | "painted"
    | "stroke"
    | "visible"
    | "visibleFill"
    | "visiblePainted"
    | "visibleStroke";

  export type Position =
    | "absolute"
    | "fixed"
    | "relative"
    | "static"
    | "sticky";

  export type Quotes = "auto" | "none" | OnlyString;

  export type Resize =
    | "block"
    | "both"
    | "horizontal"
    | "inline"
    | "none"
    | "vertical";

  export type Right = string;

  export type Rotate = "none" | OnlyString;

  export type RowGap = "normal" | OnlyStringNumeric;

  export type RubyAlign = "center" | "space-around" | "space-between" | "start";

  export type RubyMerge = "auto" | "collapse" | "separate";

  export type RubyPosition = "alternate" | "over" | "under" | OnlyString;

  export type Scale = "none" | OnlyStringNumeric;

  export type ScrollBehavior = "auto" | "smooth";

  export type ScrollMargin = OnlyStringNumeric;

  export type ScrollMarginBlock = OnlyStringNumeric;

  export type ScrollMarginBlockEnd = number;

  export type ScrollMarginBlockStart = number;

  export type ScrollMarginBottom = number;

  export type ScrollMarginInline = OnlyStringNumeric;

  export type ScrollMarginInlineEnd = number;

  export type ScrollMarginInlineStart = number;

  export type ScrollMarginLeft = number;

  export type ScrollMarginRight = number;

  export type ScrollMarginTop = number;

  export type ScrollPadding = "auto" | OnlyStringNumeric;

  export type ScrollPaddingBlock = "auto" | OnlyStringNumeric;

  export type ScrollPaddingBlockEnd = "auto" | OnlyStringNumeric;

  export type ScrollPaddingBlockStart = "auto" | OnlyStringNumeric;

  export type ScrollPaddingBottom = "auto" | OnlyStringNumeric;

  export type ScrollPaddingInline = "auto" | OnlyStringNumeric;

  export type ScrollPaddingInlineEnd = "auto" | OnlyStringNumeric;

  export type ScrollPaddingInlineStart = "auto" | OnlyStringNumeric;

  export type ScrollPaddingLeft = "auto" | OnlyStringNumeric;

  export type ScrollPaddingRight = "auto" | OnlyStringNumeric;

  export type ScrollPaddingTop = "auto" | OnlyStringNumeric;

  export type ScrollSnapAlign =
    | "center"
    | "end"
    | "none"
    | "start"
    | OnlyString;

  export type ScrollSnapCoordinate = DataType.Position | "none" | OnlyString;

  export type ScrollSnapDestination = DataType.Position;

  export type ScrollSnapPointsX = "none" | OnlyString;

  export type ScrollSnapPointsY = "none" | OnlyString;

  export type ScrollSnapStop = "always" | "normal";

  export type ScrollSnapType =
    | "block"
    | "both"
    | "inline"
    | "none"
    | "x"
    | "y"
    | OnlyString;

  export type ScrollSnapTypeX = "mandatory" | "none" | "proximity";

  export type ScrollSnapTypeY = "mandatory" | "none" | "proximity";

  export type ScrollbarColor = DataType.Color | "auto" | "dark" | "light";

  export type ScrollbarGutter = "always" | "auto" | "stable" | OnlyString;

  export type MsScrollbarTrackColor = DataType.Color;

  export type ScrollbarWidth = "auto" | "none" | "thin";

  export type ShapeImageThreshold = OnlyStringNumeric;

  export type ShapeMargin = OnlyStringNumeric;

  export type ShapeOutside = DataType.Box | "margin-box" | "none" | OnlyString;

  export type TabSize = number | OnlyNumber;

  export type TableLayout = "auto" | "fixed";

  export type TextAlign =
    | "center"
    | "end"
    | "justify"
    | "left"
    | "match-parent"
    | "right"
    | "start";

  export type TextAlignLast =
    | "auto"
    | "center"
    | "end"
    | "justify"
    | "left"
    | "right"
    | "start";

  export type TextCombineUpright = "all" | "digits" | "none" | OnlyString;

  export type TextDecoration =
    | "auto"
    | "blink"
    | "dashed"
    | "dotted"
    | "double"
    | "from-font"
    | "grammar-error"
    | "line-through"
    | "none"
    | "overline"
    | "solid"
    | "spelling-error"
    | "underline"
    | "wavy";

  export type TextDecorationColor = DataType.Color;

  export type TextDecorationLine =
    | "blink"
    | "grammar-error"
    | "line-through"
    | "none"
    | "overline"
    | "spelling-error"
    | "underline"
    | OnlyString;

  export type TextDecorationSkip =
    | "box-decoration"
    | "edges"
    | "leading-spaces"
    | "none"
    | "objects"
    | "spaces"
    | "trailing-spaces"
    | OnlyString;

  export type TextDecorationSkipInk = "all" | "auto" | "none";

  export type TextDecorationStyle =
    | "dashed"
    | "dotted"
    | "double"
    | "solid"
    | "wavy";

  export type TextDecorationThickness =
    | "auto"
    | "from-font"
    | OnlyStringNumeric;

  export type TextEmphasis =
    | DataType.Color
    | "circle"
    | "dot"
    | "double-circle"
    | "filled"
    | "none"
    | "open"
    | "sesame"
    | "triangle"
    | OnlyString;

  export type TextEmphasisColor = DataType.Color;

  export type TextEmphasisPosition = OnlyString;

  export type TextEmphasisStyle =
    | "circle"
    | "dot"
    | "double-circle"
    | "filled"
    | "none"
    | "open"
    | "sesame"
    | "triangle"
    | OnlyString;

  export type TextIndent = OnlyStringNumeric;

  export type TextJustify = "auto" | "inter-character" | "inter-word" | "none";

  export type TextOrientation = "mixed" | "sideways" | "upright";

  export type TextOverflow = "clip" | "ellipsis" | OnlyString;

  export type TextRendering =
    | "auto"
    | "geometricPrecision"
    | "optimizeLegibility"
    | "optimizeSpeed";

  export type TextShadow = "none" | OnlyString;

  export type TextSizeAdjust = "auto" | "none" | OnlyString;

  export type TextTransform =
    | "capitalize"
    | "full-size-kana"
    | "full-width"
    | "lowercase"
    | "none"
    | "uppercase";

  export type TextUnderlineOffset = "auto" | OnlyStringNumeric;

  export type TextUnderlinePosition =
    | "auto"
    | "from-font"
    | "left"
    | "right"
    | "under"
    | OnlyString;

  export type Top = string;

  export type TouchAction =
    | "auto"
    | "manipulation"
    | "none"
    | "pan-down"
    | "pan-left"
    | "pan-right"
    | "pan-up"
    | "pan-x"
    | "pan-y"
    | "pinch-zoom"
    | OnlyString;

  export type Transform = "none" | OnlyString;

  export type TransformBox =
    | "border-box"
    | "content-box"
    | "fill-box"
    | "stroke-box"
    | "view-box";

  export type TransformOrigin =
    | "bottom"
    | "center"
    | "left"
    | "right"
    | "top"
    | OnlyStringNumeric;

  export type TransformStyle = "flat" | "preserve-3d";

  export type Transition = DataType.SingleTransition | OnlyString;

  export type TransitionDelay = never | OnlyString;

  export type TransitionDuration = never | OnlyString;

  export type TransitionProperty = "all" | "none" | OnlyString;

  export type TransitionTimingFunction = DataType.EasingFunction | OnlyString;

  export type Translate = "none" | OnlyStringNumeric;

  export type UnicodeBidi =
    | "bidi-override"
    | "embed"
    | "isolate"
    | "isolate-override"
    | "normal"
    | "plaintext";

  export type UserSelect =
    | "all"
    | "auto"
    | "contain"
    | "element"
    | "none"
    | "text";

  export type VerticalAlign =
    | number
    | "baseline"
    | "bottom"
    | "middle"
    | "sub"
    | "super"
    | "text-bottom"
    | "text-top"
    | "top"
    | OnlyString;

  export type Visibility = "collapse" | "hidden" | "visible";

  export type WhiteSpace =
    | "break-spaces"
    | "normal"
    | "nowrap"
    | "pre"
    | "pre-line"
    | "pre-wrap";

  export type Widows = OnlyNumber;

  export type Width =
    | number
    | "auto"
    | "stretch"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "min-intrinsic"
    | OnlyString;

  export type WillChange = DataType.AnimateableFeature | "auto" | OnlyString;

  export type WordBreak = "break-all" | "break-word" | "keep-all" | "normal";

  export type WordSpacing = "normal" | OnlyStringNumeric;

  export type WordWrap = "break-word" | "normal";

  export type WritingMode =
    | "horizontal-tb"
    | "sideways-lr"
    | "sideways-rl"
    | "vertical-lr"
    | "vertical-rl";

  export type ZIndex = "auto" | OnlyStringNumeric;

  export type Zoom = "normal" | "reset" | OnlyStringNumeric;

  export type MozAppearance =
    | "button"
    | "button-arrow-down"
    | "button-arrow-next"
    | "button-arrow-previous"
    | "button-arrow-up"
    | "button-bevel"
    | "button-focus"
    | "caret"
    | "checkbox"
    | "checkbox-container"
    | "checkbox-label"
    | "checkmenuitem"
    | "dualbutton"
    | "groupbox"
    | "listbox"
    | "listitem"
    | "menuarrow"
    | "menubar"
    | "menucheckbox"
    | "menuimage"
    | "menuitem"
    | "menuitemtext"
    | "menulist"
    | "menulist-button"
    | "menulist-text"
    | "menulist-textfield"
    | "menupopup"
    | "menuradio"
    | "menuseparator"
    | "meterbar"
    | "meterchunk"
    | "none"
    | "progressbar"
    | "progressbar-vertical"
    | "progresschunk"
    | "progresschunk-vertical"
    | "radio"
    | "radio-container"
    | "radio-label"
    | "radiomenuitem"
    | "range"
    | "range-thumb"
    | "resizer"
    | "resizerpanel"
    | "scale-horizontal"
    | "scale-vertical"
    | "scalethumb-horizontal"
    | "scalethumb-vertical"
    | "scalethumbend"
    | "scalethumbstart"
    | "scalethumbtick"
    | "scrollbarbutton-down"
    | "scrollbarbutton-left"
    | "scrollbarbutton-right"
    | "scrollbarbutton-up"
    | "scrollbarthumb-horizontal"
    | "scrollbarthumb-vertical"
    | "scrollbartrack-horizontal"
    | "scrollbartrack-vertical"
    | "searchfield"
    | "separator"
    | "sheet"
    | "spinner"
    | "spinner-downbutton"
    | "spinner-textfield"
    | "spinner-upbutton"
    | "splitter"
    | "statusbar"
    | "statusbarpanel"
    | "tab"
    | "tab-scroll-arrow-back"
    | "tab-scroll-arrow-forward"
    | "tabpanel"
    | "tabpanels"
    | "textfield"
    | "textfield-multiline"
    | "toolbar"
    | "toolbarbutton"
    | "toolbarbutton-dropdown"
    | "toolbargripper"
    | "toolbox"
    | "tooltip"
    | "treeheader"
    | "treeheadercell"
    | "treeheadersortarrow"
    | "treeitem"
    | "treeline"
    | "treetwisty"
    | "treetwistyopen"
    | "treeview";

  export type MozBinding = "none" | OnlyString;

  export type MozBorderBottomColors = DataType.Color | "none" | OnlyString;

  export type MozBorderLeftColors = DataType.Color | "none" | OnlyString;

  export type MozBorderRightColors = DataType.Color | "none" | OnlyString;

  export type MozBorderTopColors = DataType.Color | "none" | OnlyString;

  export type MozContextProperties =
    | "fill"
    | "fill-opacity"
    | "none"
    | "stroke"
    | "stroke-opacity"
    | OnlyString;

  export type MozFloatEdge =
    | "border-box"
    | "content-box"
    | "margin-box"
    | "padding-box";

  export type MozForceBrokenImageIcon = OnlyNumber;

  export type MozImageRegion = "auto" | OnlyString;

  export type MozOrient = "block" | "horizontal" | "inline" | "vertical";

  export type MozOutlineRadius = OnlyStringNumeric;

  export type MozOutlineRadiusBottomleft = OnlyStringNumeric;

  export type MozOutlineRadiusBottomright = OnlyStringNumeric;

  export type MozOutlineRadiusTopleft = OnlyStringNumeric;

  export type MozOutlineRadiusTopright = OnlyStringNumeric;

  export type MozStackSizing = "ignore" | "stretch-to-fit";

  export type MozTextBlink = "blink" | "none";

  export type MozUserFocus =
    | "ignore"
    | "none"
    | "normal"
    | "select-after"
    | "select-all"
    | "select-before"
    | "select-menu"
    | "select-same";

  export type MozUserInput = "auto" | "disabled" | "enabled" | "none";

  export type MozUserModify = "read-only" | "read-write" | "write-only";

  export type MozWindowDragging = "drag" | "no-drag";

  export type MozWindowShadow =
    | "default"
    | "menu"
    | "none"
    | "sheet"
    | "tooltip";

  export type MsAccelerator = "false" | "true";

  export type MsBlockProgression = "bt" | "lr" | "rl" | "tb";

  export type MsContentZoomChaining = "chained" | "none";

  export type MsContentZoomLimit = OnlyString;

  export type MsContentZoomLimitMax = OnlyString;

  export type MsContentZoomLimitMin = OnlyString;

  export type MsContentZoomSnap =
    | "mandatory"
    | "none"
    | "proximity"
    | OnlyString;

  export type MsContentZoomSnapPoints = OnlyString;

  export type MsContentZoomSnapType = "mandatory" | "none" | "proximity";

  export type MsContentZooming = "none" | "zoom";

  export type MsFilter = OnlyString;

  export type MsFlowFrom = "none" | OnlyString;

  export type MsFlowInto = "none" | OnlyString;

  export type MsGridColumns = DataType.TrackBreadth | "none" | OnlyString;

  export type MsGridRows = DataType.TrackBreadth | "none" | OnlyString;

  export type MsHighContrastAdjust = "auto" | "none";

  export type MsHyphenateLimitChars = "auto" | OnlyStringNumeric;

  export type MsHyphenateLimitLines = "no-limit" | OnlyNumber;

  export type MsHyphenateLimitZone = OnlyStringNumeric;

  export type MsImeAlign = "after" | "auto";

  export type MsOverflowStyle = "auto" | "none" | "scrollbar";

  export type MsScrollChaining = "chained" | "none";

  export type MsScrollLimit = OnlyString;

  export type MsScrollLimitXMax = number | "auto";

  export type MsScrollLimitXMin = number;

  export type MsScrollLimitYMax = number | "auto";

  export type MsScrollLimitYMin = number;

  export type MsScrollRails = "none" | "railed";

  export type MsScrollSnapPointsX = OnlyString;

  export type MsScrollSnapPointsY = OnlyString;

  export type MsScrollSnapType = "mandatory" | "none" | "proximity";

  export type MsScrollSnapX = OnlyString;

  export type MsScrollSnapY = OnlyString;

  export type MsScrollTranslation = "none" | "vertical-to-horizontal";

  export type MsScrollbar3dlightColor = DataType.Color;

  export type MsScrollbarArrowColor = DataType.Color;

  export type MsScrollbarBaseColor = DataType.Color;

  export type MsScrollbarDarkshadowColor = DataType.Color;

  export type MsScrollbarFaceColor = DataType.Color;

  export type MsScrollbarHighlightColor = DataType.Color;

  export type MsScrollbarShadowColor = DataType.Color;

  export type MsTextAutospace =
    | "ideograph-alpha"
    | "ideograph-numeric"
    | "ideograph-parenthesis"
    | "ideograph-space"
    | "none";

  export type MsTouchSelect = "grippers" | "none";

  export type MsUserSelect = "element" | "none" | "text";

  export type MsWrapFlow =
    | "auto"
    | "both"
    | "clear"
    | "end"
    | "maximum"
    | "start";

  export type MsWrapMargin = number;

  export type MsWrapThrough = "none" | "wrap";

  export type WebkitAppearance =
    | "button"
    | "button-bevel"
    | "caret"
    | "checkbox"
    | "default-button"
    | "inner-spin-button"
    | "listbox"
    | "listitem"
    | "media-controls-background"
    | "media-controls-fullscreen-background"
    | "media-current-time-display"
    | "media-enter-fullscreen-button"
    | "media-exit-fullscreen-button"
    | "media-fullscreen-button"
    | "media-mute-button"
    | "media-overlay-play-button"
    | "media-play-button"
    | "media-seek-back-button"
    | "media-seek-forward-button"
    | "media-slider"
    | "media-sliderthumb"
    | "media-time-remaining-display"
    | "media-toggle-closed-captions-button"
    | "media-volume-slider"
    | "media-volume-slider-container"
    | "media-volume-sliderthumb"
    | "menulist"
    | "menulist-button"
    | "menulist-text"
    | "menulist-textfield"
    | "meter"
    | "none"
    | "progress-bar"
    | "progress-bar-value"
    | "push-button"
    | "radio"
    | "searchfield"
    | "searchfield-cancel-button"
    | "searchfield-decoration"
    | "searchfield-results-button"
    | "searchfield-results-decoration"
    | "slider-horizontal"
    | "slider-vertical"
    | "sliderthumb-horizontal"
    | "sliderthumb-vertical"
    | "square-button"
    | "textarea"
    | "textfield";

  export type WebkitBorderBefore =
    | DataType.LineWidth
    | DataType.LineStyle
    | DataType.Color
    | OnlyString;

  export type WebkitBorderBeforeColor = DataType.Color;

  export type WebkitBorderBeforeStyle = DataType.LineStyle | OnlyString;

  export type WebkitBorderBeforeWidth = DataType.LineWidth | OnlyString;

  export type WebkitBoxReflect =
    | "above"
    | "below"
    | "left"
    | "right"
    | OnlyStringNumeric;

  export type WebkitLineClamp = "none" | OnlyNumber;

  export type WebkitMask =
    | DataType.Position
    | DataType.RepeatStyle
    | DataType.Box
    | "border"
    | "content"
    | "none"
    | "padding"
    | "text"
    | OnlyString;

  export type WebkitMaskAttachment = DataType.Attachment | OnlyString;

  export type WebkitMaskClip =
    | DataType.Box
    | "border"
    | "content"
    | "padding"
    | "text"
    | OnlyString;

  export type WebkitMaskComposite = DataType.CompositeStyle | OnlyString;

  export type WebkitMaskImage = "none" | OnlyString;

  export type WebkitMaskOrigin =
    | DataType.Box
    | "border"
    | "content"
    | "padding"
    | OnlyString;

  export type WebkitMaskPosition = DataType.Position | OnlyString;

  export type WebkitMaskPositionX =
    | "center"
    | "left"
    | "right"
    | OnlyStringNumeric;

  export type WebkitMaskPositionY =
    | "bottom"
    | "center"
    | "top"
    | OnlyStringNumeric;

  export type WebkitMaskRepeat = DataType.RepeatStyle | OnlyString;

  export type WebkitMaskRepeatX = "no-repeat" | "repeat" | "round" | "space";

  export type WebkitMaskRepeatY = "no-repeat" | "repeat" | "round" | "space";

  export type WebkitMaskSize = DataType.BgSize | OnlyString;

  export type WebkitOverflowScrolling = "auto" | "touch";

  export type WebkitTapHighlightColor = DataType.Color;

  export type WebkitTextFillColor = DataType.Color;

  export type WebkitTextStroke = DataType.Color | OnlyStringNumeric;

  export type WebkitTextStrokeColor = DataType.Color;

  export type WebkitTextStrokeWidth = number;

  export type WebkitTouchCallout = "default" | "none";

  export type WebkitUserModify =
    | "read-only"
    | "read-write"
    | "read-write-plaintext-only";

  export type AlignmentBaseline =
    | "after-edge"
    | "alphabetic"
    | "auto"
    | "baseline"
    | "before-edge"
    | "central"
    | "hanging"
    | "ideographic"
    | "mathematical"
    | "middle"
    | "text-after-edge"
    | "text-before-edge";

  export type BaselineShift = "baseline" | "sub" | "super" | OnlyStringNumeric;

  export type ClipRule = "evenodd" | "nonzero";

  export type ColorInterpolation = "auto" | "linearRGB" | "sRGB";

  export type ColorRendering = "auto" | "optimizeQuality" | "optimizeSpeed";

  export type DominantBaseline =
    | "alphabetic"
    | "auto"
    | "central"
    | "hanging"
    | "ideographic"
    | "mathematical"
    | "middle"
    | "no-change"
    | "reset-size"
    | "text-after-edge"
    | "text-before-edge"
    | "use-script";

  export type Fill = DataType.Paint;

  export type FillOpacity = OnlyNumber;

  export type FillRule = "evenodd" | "nonzero";

  export type FloodColor =
    | DataType.Color
    | "CurrentColor"
    | "hsl("
    | "lab("
    | "rgb(";

  export type FloodOpacity = OnlyNumber;

  export type GlyphOrientationVertical = "auto" | OnlyStringNumeric;

  export type LightingColor =
    | DataType.Color
    | "CurrentColor"
    | "hsl("
    | "lab("
    | "rgb(";

  export type Marker = "none" | OnlyString;

  export type MarkerEnd = "none" | OnlyString;

  export type MarkerMid = "none" | OnlyString;

  export type MarkerStart = "none" | OnlyString;

  export type ShapeRendering =
    | "auto"
    | "crispEdges"
    | "geometricPrecision"
    | "optimizeSpeed";

  export type StopColor =
    | DataType.Color
    | "CurrentColor"
    | "hsl("
    | "lab("
    | "rgb(";

  export type StopOpacity = OnlyNumber;

  export type Stroke = DataType.Paint;

  export type StrokeDasharray = DataType.Dasharray | "none";

  export type StrokeDashoffset = OnlyStringNumeric;

  export type StrokeLinecap = "butt" | "round" | "square";

  export type StrokeLinejoin = "bevel" | "miter" | "round";

  export type StrokeMiterlimit = OnlyNumber;

  export type StrokeOpacity = OnlyNumber;

  export type StrokeWidth = OnlyStringNumeric;

  export type TextAnchor = "end" | "middle" | "start";

  export type VectorEffect = "non-scaling-stroke" | "none";
}

export namespace AtRule {
  export interface CounterStyle {
    additiveSymbols?: string;
    fallback?: string;
    negative?: string;
    pad?: string;
    prefix?: string;
    range?: Range;
    speakAs?: SpeakAs;
    suffix?: string;
    symbols?: string;
    system?: System;
  }

  export interface CounterStyleHyphen {
    "additive-symbols"?: string;
    fallback?: string;
    negative?: string;
    pad?: string;
    prefix?: string;
    range?: Range;
    "speak-as"?: SpeakAs;
    suffix?: string;
    symbols?: string;
    system?: System;
  }

  export type CounterStyleFallback = {
    [P in keyof CounterStyle]: CounterStyle[P] | CounterStyle[P][];
  };

  export type CounterStyleHyphenFallback = {
    [P in keyof CounterStyleHyphen]:
      | CounterStyleHyphen[P]
      | CounterStyleHyphen[P][];
  };

  export interface FontFace {
    MozFontFeatureSettings?: FontFeatureSettings;
    fontDisplay?: FontDisplay;
    fontFamily?: string;
    fontFeatureSettings?: FontFeatureSettings;
    fontStretch?: FontStretch;
    fontStyle?: FontStyle;
    fontVariant?: FontVariant;
    fontVariationSettings?: FontVariationSettings;
    fontWeight?: FontWeight;
    src?: string;
    unicodeRange?: string;
  }

  export interface FontFaceHyphen {
    "font-display"?: FontDisplay;
    "font-family"?: string;
    "font-feature-settings"?: FontFeatureSettings;
    "font-stretch"?: FontStretch;
    "font-style"?: FontStyle;
    "font-variant"?: FontVariant;
    "font-variation-settings"?: FontVariationSettings;
    "font-weight"?: FontWeight;
    src?: string;
    "unicode-range"?: string;
  }

  export type FontFaceFallback = {
    [P in keyof FontFace]: FontFace[P] | FontFace[P][];
  };

  export type FontFaceHyphenFallback = {
    [P in keyof FontFaceHyphen]: FontFaceHyphen[P] | FontFaceHyphen[P][];
  };

  export interface Page {
    size?: Size;
  }

  export interface PageHyphen {
    size?: Size;
  }

  export type PageFallback = {
    [P in keyof Page]: Page[P] | Page[P][];
  };

  export type PageHyphenFallback = {
    [P in keyof PageHyphen]: PageHyphen[P] | PageHyphen[P][];
  };

  export interface Property {
    inherits?: Inherits;
    initialValue?: boolean | OnlyStringNumeric;
    syntax?: string;
  }

  export interface PropertyHyphen {
    inherits?: Inherits;
    "initial-value"?: string;
    syntax?: string;
  }

  export type PropertyFallback = {
    [P in keyof Property]: Property[P] | Property[P][];
  };

  export type PropertyHyphenFallback = {
    [P in keyof PropertyHyphen]: PropertyHyphen[P] | PropertyHyphen[P][];
  };

  export interface Viewport {
    height?: Height;
    maxHeight?: MaxHeight;
    maxWidth?: MaxWidth;
    maxZoom?: MaxZoom;
    minHeight?: MinHeight;
    minWidth?: MinWidth;
    minZoom?: MinZoom;
    orientation?: Orientation;
    userZoom?: UserZoom;
    viewportFit?: ViewportFit;
    width?: Width;
    zoom?: Zoom;
  }

  export interface ViewportHyphen {
    height?: Height;
    "max-height"?: MaxHeight;
    "max-width"?: MaxWidth;
    "max-zoom"?: MaxZoom;
    "min-height"?: MinHeight;
    "min-width"?: MinWidth;
    "min-zoom"?: MinZoom;
    orientation?: Orientation;
    "user-zoom"?: UserZoom;
    "viewport-fit"?: ViewportFit;
    width?: Width;
    zoom?: Zoom;
  }

  export type ViewportFallback = {
    [P in keyof Viewport]: Viewport[P] | Viewport[P][];
  };

  export type ViewportHyphenFallback = {
    [P in keyof ViewportHyphen]: ViewportHyphen[P] | ViewportHyphen[P][];
  };

  type Range = "auto" | "infinite" | OnlyStringNumeric;

  type SpeakAs =
    | "auto"
    | "bullets"
    | "numbers"
    | "spell-out"
    | "words"
    | OnlyString;

  type System =
    | "additive"
    | "alphabetic"
    | "cyclic"
    | "fixed"
    | "numeric"
    | "symbolic"
    | OnlyString;

  type FontFeatureSettings = "normal" | OnlyString;

  type FontDisplay = "auto" | "block" | "fallback" | "optional" | "swap";

  type FontStretch = DataType.FontStretchAbsolute | OnlyString;

  type FontStyle = "italic" | "normal" | "oblique" | OnlyString;

  type FontVariant =
    | DataType.EastAsianVariantValues
    | "all-petite-caps"
    | "all-small-caps"
    | "common-ligatures"
    | "contextual"
    | "diagonal-fractions"
    | "discretionary-ligatures"
    | "full-width"
    | "historical-forms"
    | "historical-ligatures"
    | "lining-nums"
    | "no-common-ligatures"
    | "no-contextual"
    | "no-discretionary-ligatures"
    | "no-historical-ligatures"
    | "none"
    | "normal"
    | "oldstyle-nums"
    | "ordinal"
    | "petite-caps"
    | "proportional-nums"
    | "proportional-width"
    | "ruby"
    | "slashed-zero"
    | "small-caps"
    | "stacked-fractions"
    | "tabular-nums"
    | "titling-caps"
    | "unicase"
    | OnlyString;

  type FontVariationSettings = "normal" | OnlyString;

  type FontWeight = DataType.FontWeightAbsolute;

  type Size =
    | DataType.PageSize
    | "auto"
    | "landscape"
    | "portrait"
    | OnlyStringNumeric;

  type Inherits = "false" | "true" | boolean;

  type Height = DataType.ViewportLength | OnlyString;

  type MaxHeight = DataType.ViewportLength;

  type MaxWidth = DataType.ViewportLength;

  type MaxZoom = "auto" | OnlyStringNumeric;

  type MinHeight = DataType.ViewportLength;

  type MinWidth = DataType.ViewportLength;

  type MinZoom = "auto" | OnlyStringNumeric;

  type Orientation = "auto" | "landscape" | "portrait";

  type UserZoom = "fixed" | "zoom";

  type ViewportFit = "auto" | "contain" | "cover";

  type Width = DataType.ViewportLength | OnlyString;

  type Zoom = "auto" | OnlyStringNumeric;
}

declare namespace DataType {
  type AbsoluteSize =
    | "large"
    | "medium"
    | "small"
    | "x-large"
    | "x-small"
    | "xx-large"
    | "xx-small"
    | "xxx-large";

  type AnimateableFeature = "contents" | "scroll-position" | OnlyString;

  type Attachment = "fixed" | "local" | "scroll";

  type BgPosition =
    | "bottom"
    | "center"
    | "left"
    | "right"
    | "top"
    | OnlyStringNumeric;

  type BgSize = "auto" | "contain" | "cover" | OnlyStringNumeric;

  type BlendMode =
    | "color"
    | "color-burn"
    | "color-dodge"
    | "darken"
    | "difference"
    | "exclusion"
    | "hard-light"
    | "hue"
    | "lighten"
    | "luminosity"
    | "multiply"
    | "normal"
    | "overlay"
    | "saturation"
    | "screen"
    | "soft-light";

  type Box = "border-box" | "content-box" | "padding-box";

  type Color =
    | NamedColor
    | "CurrentColor"
    | "hsl("
    | "lab("
    | "rgb("
    | OnlyString;

  type CompatAuto =
    | "button"
    | "checkbox"
    | "listbox"
    | "menulist"
    | "meter"
    | "progress-bar"
    | "push-button"
    | "radio"
    | "searchfield"
    | "slider-horizontal"
    | "square-button"
    | "textarea";

  type CompositeStyle =
    | "clear"
    | "copy"
    | "destination-atop"
    | "destination-in"
    | "destination-out"
    | "destination-over"
    | "source-atop"
    | "source-in"
    | "source-out"
    | "source-over"
    | "xor";

  type CompositingOperator = "add" | "exclude" | "intersect" | "subtract";

  type ContentDistribution =
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "stretch";

  type ContentList = Quote | "contents" | OnlyString;

  type ContentPosition = "center" | "end" | "flex-end" | "flex-start" | "start";

  type CubicBezierTimingFunction =
    | "ease"
    | "ease-in"
    | "ease-in-out"
    | "ease-out"
    | OnlyString;

  type Dasharray = OnlyStringNumeric;

  type DisplayInside =
    | "flex"
    | "flow"
    | "flow-root"
    | "grid"
    | "ruby"
    | "table";

  type DisplayInternal =
    | "ruby-base"
    | "ruby-base-container"
    | "ruby-text"
    | "ruby-text-container"
    | "table-caption"
    | "table-cell"
    | "table-column"
    | "table-column-group"
    | "table-footer-group"
    | "table-header-group"
    | "table-row"
    | "table-row-group";

  type DisplayLegacy =
    | "inline-block"
    | "inline-flex"
    | "inline-grid"
    | "inline-list-item"
    | "inline-table";

  type DisplayOutside = "block" | "inline" | "run-in";

  type EasingFunction =
    | CubicBezierTimingFunction
    | StepTimingFunction
    | "linear";

  type EastAsianVariantValues =
    | "jis04"
    | "jis78"
    | "jis83"
    | "jis90"
    | "simplified"
    | "traditional";

  type FinalBgLayer =
    | Color
    | BgPosition
    | RepeatStyle
    | Attachment
    | Box
    | "none"
    | OnlyString;

  type FontStretchAbsolute =
    | "condensed"
    | "expanded"
    | "extra-condensed"
    | "extra-expanded"
    | "normal"
    | "semi-condensed"
    | "semi-expanded"
    | "ultra-condensed"
    | "ultra-expanded"
    | OnlyString;

  type FontWeightAbsolute = "bold" | "normal" | OnlyStringNumeric;

  type GenericFamily =
    | "cursive"
    | "emoji"
    | "fangsong"
    | "fantasy"
    | "math"
    | "monospace"
    | "sans-serif"
    | "serif"
    | "system-ui"
    | "ui-monospace"
    | "ui-rounded"
    | "ui-sans-serif"
    | "ui-serif";

  type GeometryBox =
    | Box
    | "fill-box"
    | "margin-box"
    | "stroke-box"
    | "view-box";

  type GridLine = "auto" | OnlyStringNumeric;

  type LineStyle =
    | "dashed"
    | "dotted"
    | "double"
    | "groove"
    | "hidden"
    | "inset"
    | "none"
    | "outset"
    | "ridge"
    | "solid";

  type LineWidth = number | OnlyString | "medium" | "thick" | "thin";

  type MaskLayer =
    | Position
    | RepeatStyle
    | GeometryBox
    | CompositingOperator
    | MaskingMode
    | "no-clip"
    | "none"
    | OnlyString;

  type MaskingMode = "alpha" | "luminance" | "match-source";

  type NamedColor =
    | "AliceBlue"
    | "AntiqueWhite"
    | "Aqua"
    | "Aquamarine"
    | "Azure"
    | "Beige"
    | "Bisque"
    | "Black"
    | "BlanchedAlmond"
    | "Blue"
    | "BlueViolet"
    | "Brown"
    | "BurlyWood"
    | "CadetBlue"
    | "Chartreuse"
    | "Chocolate"
    | "Coral"
    | "CornflowerBlue"
    | "Cornsilk"
    | "Crimson"
    | "Cyan"
    | "DarkBlue"
    | "DarkCyan"
    | "DarkGoldenRod"
    | "DarkGray"
    | "DarkGreen"
    | "DarkGrey"
    | "DarkKhaki"
    | "DarkMagenta"
    | "DarkOliveGreen"
    | "DarkOrange"
    | "DarkOrchid"
    | "DarkRed"
    | "DarkSalmon"
    | "DarkSeaGreen"
    | "DarkSlateBlue"
    | "DarkSlateGray"
    | "DarkSlateGrey"
    | "DarkTurquoise"
    | "DarkViolet"
    | "DeepPink"
    | "DeepSkyBlue"
    | "DimGray"
    | "DimGrey"
    | "DodgerBlue"
    | "FireBrick"
    | "FloralWhite"
    | "ForestGreen"
    | "Fuchsia"
    | "Gainsboro"
    | "GhostWhite"
    | "Gold"
    | "GoldenRod"
    | "Gray"
    | "Green"
    | "GreenYellow"
    | "Grey"
    | "HoneyDew"
    | "HotPink"
    | "IndianRed"
    | "Indigo"
    | "Ivory"
    | "Khaki"
    | "Lavender"
    | "LavenderBlush"
    | "LawnGreen"
    | "LemonChiffon"
    | "LightBlue"
    | "LightCoral"
    | "LightCyan"
    | "LightGoldenRodYellow"
    | "LightGray"
    | "LightGreen"
    | "LightGrey"
    | "LightPink"
    | "LightSalmon"
    | "LightSeaGreen"
    | "LightSkyBlue"
    | "LightSlateGray"
    | "LightSlateGrey"
    | "LightSteelBlue"
    | "LightYellow"
    | "Lime"
    | "LimeGreen"
    | "Linen"
    | "Magenta"
    | "Maroon"
    | "MediumAquaMarine"
    | "MediumBlue"
    | "MediumOrchid"
    | "MediumPurple"
    | "MediumSeaGreen"
    | "MediumSlateBlue"
    | "MediumSpringGreen"
    | "MediumTurquoise"
    | "MediumVioletRed"
    | "MidnightBlue"
    | "MintCream"
    | "MistyRose"
    | "Moccasin"
    | "NavajoWhite"
    | "Navy"
    | "OldLace"
    | "Olive"
    | "OliveDrab"
    | "Orange"
    | "OrangeRed"
    | "Orchid"
    | "PaleGoldenRod"
    | "PaleGreen"
    | "PaleTurquoise"
    | "PaleVioletRed"
    | "PapayaWhip"
    | "PeachPuff"
    | "Peru"
    | "Pink"
    | "Plum"
    | "PowderBlue"
    | "Purple"
    | "RebeccaPurple"
    | "Red"
    | "RosyBrown"
    | "RoyalBlue"
    | "SaddleBrown"
    | "Salmon"
    | "SandyBrown"
    | "SeaGreen"
    | "SeaShell"
    | "Sienna"
    | "Silver"
    | "SkyBlue"
    | "SlateBlue"
    | "SlateGray"
    | "SlateGrey"
    | "Snow"
    | "SpringGreen"
    | "SteelBlue"
    | "Tan"
    | "Teal"
    | "Thistle"
    | "Tomato"
    | "transparent"
    | "Turquoise"
    | "Violet"
    | "Wheat"
    | "White"
    | "WhiteSmoke"
    | "Yellow"
    | "YellowGreen";

  type PageSize =
    | "A3"
    | "A4"
    | "A5"
    | "B4"
    | "B5"
    | "JIS-B4"
    | "JIS-B5"
    | "ledger"
    | "legal"
    | "letter";

  type Paint =
    | Color
    | "child"
    | "context-fill"
    | "context-stroke"
    | "none"
    | OnlyString;

  type Position =
    | "bottom"
    | "center"
    | "left"
    | "right"
    | "top"
    | OnlyStringNumeric;

  type Quote =
    | "close-quote"
    | "no-close-quote"
    | "no-open-quote"
    | "open-quote";

  type RepeatStyle =
    | "no-repeat"
    | "repeat"
    | "repeat-x"
    | "repeat-y"
    | "round"
    | "space"
    | OnlyString;

  type SelfPosition =
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "self-end"
    | "self-start"
    | "start";

  type SingleAnimation =
    | EasingFunction
    | SingleAnimationDirection
    | SingleAnimationFillMode
    | "infinite"
    | "none"
    | "paused"
    | "running"
    | OnlyString
    | OnlyNumber;

  type SingleAnimationDirection =
    | "alternate"
    | "alternate-reverse"
    | "normal"
    | "reverse";

  type SingleAnimationFillMode = "backwards" | "both" | "forwards" | "none";

  type SingleTransition = EasingFunction | "all" | "none" | OnlyString;

  type StepTimingFunction = "step-end" | "step-start" | OnlyString;

  type TrackBreadth =
    | "auto"
    | "max-content"
    | "min-content"
    | OnlyStringNumeric;

  type ViewportLength = "auto" | OnlyStringNumeric;

  type VisualBox = "border-box" | "content-box" | "padding-box";
}
