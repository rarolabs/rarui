import { Color, ColorPickerProps as ColorPickerTypings } from "@rarui/typings";
import { ColorChangeHandler } from "react-color";

export type PickerProps = {
  color: Color;
  onChange: ColorChangeHandler;
};

type ColorPickerProperties = ColorPickerTypings;
export type ColorPickerProps = ColorPickerProperties;
