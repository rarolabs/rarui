import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Icon } from "@rarui-react/icon";
import { LightbulbFilledIcon, LightbulbOutlinedIcon } from "@rarui/icons";
import { Toggle } from "./Toggle";

import docs from "./toggle.docs.json";

const meta: Meta<typeof Toggle> = {
  title: "Atomic/Toggle",
  component: Toggle,
  argTypes: argTypesConvert(docs),
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const basic: Story = {
  args: {
    icons: {
      unchecked: (
        <Icon source={<LightbulbOutlinedIcon size="small" />} color="$invert" />
      ),
      checked: (
        <Icon source={<LightbulbFilledIcon size="small" />} color="$primary" />
      ),
    },
  },
};

export const error: Story = {
  args: {
    error: true,
  },
};

export const small: Story = {
  args: {
    size: "small",
  },
};

export const selected: Story = {
  args: {
    selected: true,
  },
};

export const label: Story = {
  args: {
    label: "Label",
  },
};
