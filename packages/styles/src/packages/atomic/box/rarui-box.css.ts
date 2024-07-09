import {
  createRainbowSprinkles,
  defineProperties as defineRainbowProperties,
} from "rainbow-sprinkles";

import { mediaQueries } from "../../../themes";
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
  fontFamilyProperties,
  fontWeightProperties,
} from "../../../properties";

/* -------------------------------------------------------------------------------------------------
 * Sprinkle
 * -----------------------------------------------------------------------------------------------*/

export const boxFillProperties = {
  ...backgroundColorProperties,
  currentColor: "currentColor",
};

const defineProperties = defineRainbowProperties({
  conditions: {
    xs: {
      "@media": mediaQueries.xs(),
    },
    md: {
      "@media": mediaQueries.md(),
    },
    lg: {
      "@media": mediaQueries.lg(),
    },
    xl: {
      "@media": mediaQueries.xl(),
    },
    active: { selector: "&:active" },
    hover: { selector: "&:hover" },
    focus: { selector: "&:focus" },
    focusWithin: { selector: "&:focus-within" },
    disabled: { selector: "&:disabled" },
  },
  defaultCondition: "xs",
  dynamicProperties: {
    width: true,
    height: true,
    maxWidth: true,
    maxHeight: true,
    minWidth: true,
    minHeight: true,
    bottom: true,
    left: true,
    right: true,
    top: true,
    flex: true,
    gridTemplateAreas: true,
    gridTemplateColumns: true,
    gridTemplateRows: true,
    gridArea: true,
    flexShrink: true,
    flexGrow: true,
    order: true,
    transitionDelay: true,
    transitionProperty: true,
    backgroundImage: true,
    backgroundPosition: true,
    backgroundPositionX: true,
    backgroundPositionY: true,
    backgroundBlendMode: true,
    backgroundRepeat: true,
    backgroundSize: true,
    display: true,
    flexDirection: true,
    flexWrap: true,
    flexBasis: true,
    flexFlow: true,
    justifyContent: true,
    justifyItems: true,
    alignContent: true,
    alignItems: true,
    alignSelf: true,
    pointerEvents: true,
    position: true,
    borderStyle: true,
    boxSizing: true,
    cursor: true,
    overflow: true,
    overflowX: true,
    overflowY: true,
    transitionTimingFunction: true,
    textDecoration: true,
    textAlign: true,
    opacity: true,
  },
  staticProperties: {
    backgroundColor: backgroundColorProperties,
    fill: boxFillProperties,
    borderColor: borderColorProperties,
    color: colorProperties,
    borderRadius: borderRadiusProperties,
    borderTopLeftRadius: borderRadiusProperties,
    borderTopRightRadius: borderRadiusProperties,
    borderBottomLeftRadius: borderRadiusProperties,
    borderBottomRightRadius: borderRadiusProperties,
    borderWidth: borderWidthProperties,
    borderTopWidth: borderWidthProperties,
    borderBottomWidth: borderWidthProperties,
    borderLeftWidth: borderWidthProperties,
    borderRightWidth: borderWidthProperties,
    boxShadow: shadowProperties,
    padding: spacingProperties,
    paddingTop: spacingProperties,
    paddingBottom: spacingProperties,
    paddingLeft: spacingProperties,
    paddingRight: spacingProperties,
    margin: marginProperties,
    marginTop: marginProperties,
    marginBottom: marginProperties,
    marginLeft: marginProperties,
    marginRight: marginProperties,
    gap: spacingProperties,
    gridGap: spacingProperties,
    zIndex: zIndexProperties,
    lineHeight: lineHeightProperties,
    fontWeight: fontWeightProperties,
    fontSize: fontSizeProperties,
    fontFamily: fontFamilyProperties,
  },
  shorthands: {
    borderWidth: [
      "borderTopWidth",
      "borderBottomWidth",
      "borderLeftWidth",
      "borderRightWidth",
    ],
    borderWidthX: ["borderLeftWidth", "borderRightWidth"],
    borderWidthY: ["borderTopWidth", "borderBottomWidth"],
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    p: ["padding"],
    pl: ["paddingLeft"],
    pr: ["paddingRight"],
    pt: ["paddingTop"],
    pb: ["paddingBottom"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    m: ["margin"],
    mr: ["marginRight"],
    ml: ["marginLeft"],
    mt: ["marginTop"],
    mb: ["marginBottom"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
  },
});

export const boxSprinkle = createRainbowSprinkles(defineProperties);
