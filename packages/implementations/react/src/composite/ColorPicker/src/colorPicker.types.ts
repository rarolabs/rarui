import { Color, ColorPickerProperties } from "@rarui/typings";
import { ColorChangeHandler } from "react-color";

export type PickerProps = {
  color: Color;
  onChange: ColorChangeHandler;
};
export type ColorPickerProps = ColorPickerProperties;
