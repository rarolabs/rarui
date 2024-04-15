import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import docs from "./checkbox.docs.json";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Atomic/Checkbox",
  component: Checkbox,
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { type: "text" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const basic: Story = {
  args: {
    label: "Label",
  },
};
export const danger: Story = {
  args: {
    danger: true,
    label: "Label",
  },
};
export const disabled: Story = {
  args: {
    label: "Label",
    disabled: true,
  },
};
