import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Status } from "./Status";
import docs from "./status.docs.json";

const meta: Meta<typeof Status> = {
  title: "Atomic/Status",
  component: Status,
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { type: "text" } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Status>;

export const basic: Story = {
  args: {
    appearance: "success",
    children: "Label",
  },
};

export const warning: Story = {
  args: {
    appearance: "warning",
    children: "Label",
  },
};

export const negative: Story = {
  args: {
    appearance: "negative",
    children: "Label",
  },
};

export const success: Story = {
  args: {
    appearance: "success",
    children: "Label",
  },
};

export const neutral: Story = {
  args: {
    appearance: "neutral",
    children: "Label",
  },
};

export const normal: Story = {
  args: {
    children: "Label",
    size: "normal",
    appearance: "warning",
  },
};

export const small: Story = {
  args: {
    children: "Label",
    size: "small",
    appearance: "negative",
  },
};
