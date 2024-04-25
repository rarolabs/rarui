import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
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
  args: {},
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
