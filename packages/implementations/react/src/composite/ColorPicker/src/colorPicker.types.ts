import { ColorChangeHandler, ColorState } from "react-color";
import { AlphaColorResult } from "react-color/lib/components/common/Alpha";
import { HueColorResult } from "react-color/lib/components/common/Hue";
import { SaturationColorResult } from "react-color/lib/components/common/Saturation";

export type Color = ColorState;
export type ColorPickerProperties = {
  /**
   * Hexadecimal color to be displayed as initial color
   */
  color: string;
  /**
   * Callback function to be called when color changes
   * @param color @type Color
   *
   */
  onChange: (color: Color) => void;
};

export type PickerProps = {
  color: Color;
  onChange:
    | ColorChangeHandler<SaturationColorResult>
    | ColorChangeHandler<HueColorResult>
    | ColorChangeHandler<AlphaColorResult>;
};
export type ColorPickerProps = ColorPickerProperties;
