import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";

import { RadioButton } from "./RadioButton";
import docs from "./radioButton.docs.json";

const meta = {
  title: "Atomic/RadioButton",
  component: RadioButton,
  argTypes: argTypesConvert(docs),
  tags: ["autodocs"],
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const basic: Story = {
  args: {},
};

export const error: Story = {
  args: {
    error: true,
  },
};

export const selected: Story = {
  args: {
    selected: true,
  },
};

export const withLabel: Story = {
  args: {
    label: "Radio Btn text",
  },
};

export const disabled: Story = {
  args: {
    disabled: true,
    label: "Radio Btn text",
  },
};
