import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Textarea } from "./Textarea";
import docs from "./textarea.docs.json";

const meta: Meta<typeof Textarea> = {
  title: "Atomic/Textarea",
  component: Textarea,
  argTypes: argTypesConvert(docs),
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const basic: Story = {
  args: {},
};

export const disabled: Story = {
  args: {
    disabled: true,
  },
};
