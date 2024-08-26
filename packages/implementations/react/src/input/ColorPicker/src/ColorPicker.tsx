import React, { useState } from "react";

import { Color } from "@rarui/typings";
import { ColorPickerProps } from "./colorPicker.types";
import { hexToColorObject } from "./colorPicker.definitions";
import { Picker } from "./components/Picker/Picker";

const ColorPicker = ({ color: initialColor, onChange }: ColorPickerProps) => {
  const [color, setColor] = useState(hexToColorObject(initialColor));
  const changeElement = (newColor: Color) => {
    setColor(newColor);
    onChange(newColor);
  };
  return <Picker color={color} onChange={changeElement} />;
};

ColorPicker.displayName = "ColorPicker";

export { ColorPicker };
