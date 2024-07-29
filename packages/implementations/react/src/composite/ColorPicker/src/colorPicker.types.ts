import { ColorChangeHandler } from "react-color";

export type Color = {
  rgb: {
    r: number;
    g: number;
    b: number;
    a: number | undefined;
    source: string;
  };
  hex: string;
  hsl: {
    h: number;
    s: number;
    l: number;
    a: number | undefined;
  };
  hsv: {
    h: number;
    s: number;
    v: number;
    a: number | undefined;
  };
  oldHue: number;
  source: string;
};
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
  onChange: ColorChangeHandler;
};
export type ColorPickerProps = ColorPickerProperties;
