import React, { useEffect, useState } from "react";
import { ColorChangeHandler, CustomPicker } from "react-color";
import Saturation, {
  SaturationColorResult,
} from "react-color/lib/components/common/Saturation";
import Hue, { HueColorResult } from "react-color/lib/components/common/Hue";
import Alpha, {
  AlphaColorResult,
} from "react-color/lib/components/common/Alpha";
import { Tooltip } from "@rarui-react/tooltip";
import { Box } from "@rarui-react/box";
import { Input } from "@rarui-react/input";
import { Text } from "@rarui-react/text";
import {
  hexToColorObject,
  rgbaToColorObject,
} from "../../colorPicker.definitions";
import { PickerProps } from "../../colorPicker.types";
import { Pointer } from "../Pointer/Pointer";

const Picker = CustomPicker(({ color, onChange }: PickerProps) => {
  const [hex, setHex] = useState(color.hex);

  useEffect(() => {
    setHex(color.hex);
  }, [color]);

  const handleChangeRgb = (key: "r" | "g" | "b" | "a", value: string) => {
    const newrgba = color.rgb;
    newrgba[key] = Number(value);
    onChange(rgbaToColorObject(newrgba) as any);
  };

  const handleChangeHex = (value: string) => {
    setHex(value);
    if (value.length === 7) {
      onChange(hexToColorObject(value) as any);
    }
  };
  return (
    <Tooltip
      data-testid="colorPicker-element"
      arrow={false}
      content={
        <Box
          position="relative"
          width="320px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="$xs"
          padding="$4xs"
        >
          <Box
            position="relative"
            width="320px"
            height="160px"
            borderRadius="$xs"
            overflow="hidden"
          >
            <Saturation
              {...color}
              onChange={onChange as ColorChangeHandler<SaturationColorResult>}
              pointer={Pointer}
            />
          </Box>
          <Box
            position="relative"
            width="320px"
            height="12px"
            borderRadius="$xs"
          >
            <Hue
              {...color}
              onChange={onChange as ColorChangeHandler<HueColorResult>}
              pointer={Pointer}
            />
          </Box>
          <Box
            position="relative"
            width="320px"
            height="12px"
            borderRadius="$xs"
          >
            <Alpha
              {...color}
              onChange={onChange as ColorChangeHandler<AlphaColorResult>}
              pointer={Pointer}
            />
          </Box>
          <Box
            display="flex"
            position="relative"
            style={{ borderRadius: "12px" }}
            width="320px"
            justifyContent="space-between"
          >
            <Box width="87px" display="flex" flexDirection="column" gap="$3xs">
              <Text color="$primary" fontSize="$s" fontWeight="$semiBold">
                Hex
              </Text>
              <Input
                size="small"
                value={hex}
                maxLength={7}
                onChange={(e) => {
                  handleChangeHex(e.target.value);
                }}
              />
            </Box>
            <Box width="210px" display="flex" gap="$3xs">
              <Box display="flex" flexDirection="column" gap="$3xs">
                <Text color="$primary" fontSize="$s" fontWeight="$semiBold">
                  R
                </Text>
                <Input
                  type="number"
                  data-testid="input-red"
                  max="255"
                  min="0"
                  size="small"
                  value={color.rgb.r}
                  onChange={(e) => {
                    handleChangeRgb("r", e.target.value);
                  }}
                />
              </Box>
              <Box display="flex" flexDirection="column" gap="$3xs">
                <Text color="$primary" fontSize="$s" fontWeight="$semiBold">
                  G
                </Text>
                <Input
                  data-testid="input-green"
                  type="number"
                  max="255"
                  min="0"
                  size="small"
                  value={color.rgb.g}
                  onChange={(e) => {
                    handleChangeRgb("g", e.target.value);
                  }}
                />
              </Box>
              <Box display="flex" flexDirection="column" gap="$3xs">
                <Text color="$primary" fontSize="$s" fontWeight="$semiBold">
                  B
                </Text>
                <Input
                  data-testid="input-blue"
                  type="number"
                  max="255"
                  min="0"
                  size="small"
                  value={color.rgb.b}
                  onChange={(e) => {
                    handleChangeRgb("b", e.target.value);
                  }}
                />
              </Box>
              <Box display="flex" flexDirection="column" gap="$3xs">
                <Text color="$primary" fontSize="$s" fontWeight="$semiBold">
                  a
                </Text>

                <Input
                  size="small"
                  value={parseFloat(color.rgb.a!.toFixed(2))}
                  type="number"
                  max="1"
                  min="0"
                  step="0.1"
                  onChange={(e) => {
                    handleChangeRgb("a", e.target.value);
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      }
    >
      <Input
        value={hex}
        data-testid="colorPicker-trigger"
        divider={false}
        maxLength={7}
        onChange={(e) => {
          handleChangeHex(e.target.value);
        }}
        leadingEnd={
          <Box width="24px" height="24px" borderRadius="$sm" overflow="hidden">
            <div
              style={{
                backgroundColor: color.hex,
                height: "100%",
                width: "100%",
              }}
            />
          </Box>
        }
      />
    </Tooltip>
  );
});

export { Picker };
