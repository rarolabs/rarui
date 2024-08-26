import React, { useEffect, useState } from "react";

import CustomPicker from "react-color/lib/components/common/ColorWrap";
import Saturation from "react-color/lib/components/common/Saturation";
import Hue from "react-color/lib/components/common/Hue";
import Alpha from "react-color/lib/components/common/Alpha";
import { Tooltip } from "@rarui-react/tooltip";
import { Box } from "@rarui-react/box";
import { Input } from "@rarui-react/input";
import { Text } from "@rarui-react/text";
import { ColorChangeHandler } from "react-color";
import {
  hexToColorObject,
  rgbaToColorObject,
} from "../../colorPicker.definitions";
import { PickerProps } from "../../colorPicker.types";
import { Pointer } from "../Pointer/Pointer";

const Picker: any = CustomPicker(({ color, onChange }: PickerProps) => {
  const [hex, setHex] = useState(color.hex);

  useEffect(() => {
    setHex(color.hex);
  }, [color]);

  const handleChangeRgb = (
    key: "r" | "g" | "b" | "a",
    value: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newrgba = color.rgb;
    newrgba[key] = Number(value);
    onChange(rgbaToColorObject(newrgba) as any, e);
  };

  const handleChangeHex = (
    value: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setHex(value);
    if (value.length === 7) {
      onChange(hexToColorObject(value) as any, e);
    }
  };
  return (
    <Tooltip
      data-testid="colorPicker-element"
      arrow={false}
      content={
        <Box
          position="relative"
          maxWidth="320px"
          width={{ md: "320px", xs: "100%" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="$xs"
          padding="$4xs"
        >
          <Box
            position="relative"
            width={{ md: "320px", xs: "100%" }}
            height="160px"
            borderRadius="$xs"
            overflow="hidden"
          >
            <Saturation
              {...color}
              onChange={onChange as ColorChangeHandler}
              pointer={Pointer}
            />
          </Box>
          <Box
            position="relative"
            width={{ md: "320px", xs: "100%" }}
            height="12px"
            borderRadius="$xs"
          >
            <Hue
              {...color}
              onChange={onChange as ColorChangeHandler}
              pointer={Pointer}
            />
          </Box>
          <Box
            position="relative"
            width={{ md: "320px", xs: "100%" }}
            height="12px"
            borderRadius="$xs"
          >
            <Alpha
              {...color}
              onChange={onChange as ColorChangeHandler}
              pointer={Pointer}
            />
          </Box>
          <Box
            display="flex"
            position="relative"
            style={{ borderRadius: "12px" }}
            width={{ md: "320px", xs: "100%" }}
            gap="$xs"
            justifyContent="space-between"
          >
            <Box
              width={{ md: "87PX", xs: "28%" }}
              display="flex"
              flexDirection="column"
              gap="$3xs"
            >
              <Text color="$primary" fontSize="$s" fontWeight="$semiBold">
                Hex
              </Text>
              <Input
                size="small"
                value={hex}
                maxLength={7}
                onChange={(e) => {
                  handleChangeHex(e.target.value, e);
                }}
              />
            </Box>
            <Box width={{ md: "210PX", xs: "70%" }} display="flex" gap="$3xs">
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
                    handleChangeRgb("r", e.target.value, e);
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
                    handleChangeRgb("g", e.target.value, e);
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
                    handleChangeRgb("b", e.target.value, e);
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
                    handleChangeRgb("a", e.target.value, e);
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
          handleChangeHex(e.target.value, e);
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

Picker.displayName = "Picker";

export { Picker };
