import { Color } from "./colorPicker.types";

export function rgbaToColorObject({
  r,
  g,
  b,
  a,
}: {
  r: number;
  g: number;
  b: number;
  a?: number;
}): Color {
  const toHex = (c: number) => c.toString(16).padStart(2, "0");

  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(Math.round(a! * 255))}`;

  const rgbFraction = [r / 255, g / 255, b / 255];
  const max = Math.max(...rgbFraction);
  const min = Math.min(...rgbFraction);
  const delta = max - min;

  let h = 0;
  if (delta !== 0) {
    switch (max) {
      case rgbFraction[0]:
        h = (rgbFraction[1] - rgbFraction[2]) / delta;
        break;
      case rgbFraction[1]:
        h = 2 + (rgbFraction[2] - rgbFraction[0]) / delta;
        break;
      case rgbFraction[2]:
        h = 4 + (rgbFraction[0] - rgbFraction[1]) / delta;
        break;
      default:
        break;
    }
  }

  h = (h * 60 + 360) % 360;
  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  const hsl = { h, s, l, a };

  const v = max;
  const hsvS = max === 0 ? 0 : delta / max;
  const hsv = { h, s: hsvS, v, a };

  return {
    hex,
    hsl,
    rgb: { r, g, b, a, source: "rgb" },
    hsv,
    source: "rgb",
    oldHue: hsl.h,
  };
}

export function hexToColorObject(value: string): Color {
  const hex = value.replace("#", "");
  const hexToDec = (h: string) => parseInt(h, 16);

  // Extract RGB values from hex
  const r = hexToDec(hex.slice(0, 2));
  const g = hexToDec(hex.slice(2, 4));
  const b = hexToDec(hex.slice(4, 6));
  const a = 1;

  const rgbFraction = [r / 255, g / 255, b / 255];
  const max = Math.max(...rgbFraction);
  const min = Math.min(...rgbFraction);
  const delta = max - min;

  let h = 0;
  if (delta !== 0) {
    switch (max) {
      case rgbFraction[0]:
        h = (rgbFraction[1] - rgbFraction[2]) / delta;
        break;
      case rgbFraction[1]:
        h = 2 + (rgbFraction[2] - rgbFraction[0]) / delta;
        break;
      case rgbFraction[2]:
        h = 4 + (rgbFraction[0] - rgbFraction[1]) / delta;
        break;
      default:
        break;
    }
  }

  h = (h * 60 + 360) % 360;
  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  const hsl = { h, s, l, a };

  const v = max;
  const hsvS = max === 0 ? 0 : delta / max;
  const hsv = { h, s: hsvS, v, a };

  return {
    hex: `#${hex}`,
    hsl,
    rgb: { r, g, b, a, source: "rgb" },
    hsv,
    source: "rgb",
    oldHue: hsl.h,
  };
}
