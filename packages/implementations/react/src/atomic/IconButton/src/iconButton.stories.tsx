import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { TrashOutlinedIcon } from "@rarui/icons";
import { Icon } from "@rarui-react/icon";
import { IconButton } from "./IconButton";
import docs from "./iconButton.docs.json";

const meta: Meta<typeof IconButton> = {
  title: "Atomic/IconButton",
  component: IconButton,
  argTypes: {
    ...argTypesConvert(docs),
    source: { control: { type: "text" } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const basic: Story = {
  args: {
    appearance: "brand",
    source: (
      <Icon
        source={<TrashOutlinedIcon size="medium" />}
        color="$currentColor"
      />
    ),
  },
};

export const rounded: Story = {
  args: {
    source: (
      <Icon
        source={<TrashOutlinedIcon size="medium" />}
        color="$currentColor"
      />
    ),
    rounded: true,
    appearance: "brand",
  },
};

export const disabled: Story = {
  args: {
    disabled: true,
    source: (
      <Icon
        source={<TrashOutlinedIcon size="medium" />}
        color="$currentColor"
      />
    ),
  },
};

export const outlined: Story = {
  args: {
    source: (
      <Icon
        source={<TrashOutlinedIcon size="medium" />}
        color="$currentColor"
      />
    ),
    variant: "outlined",
    appearance: "success",
  },
};

export const solid: Story = {
  args: {
    source: (
      <Icon
        source={<TrashOutlinedIcon size="medium" />}
        color="$currentColor"
      />
    ),
    variant: "solid",
    appearance: "success",
  },
};

export const ghost: Story = {
  args: {
    source: (
      <Icon
        source={<TrashOutlinedIcon size="medium" />}
        color="$currentColor"
      />
    ),
    variant: "ghost",
    appearance: "success",
  },
};

export const tonal: Story = {
  args: {
    source: (
      <Icon
        source={<TrashOutlinedIcon size="medium" />}
        color="$currentColor"
      />
    ),
    variant: "tonal",
    appearance: "success",
  },
};
