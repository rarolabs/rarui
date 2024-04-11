import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import docs from "./chip.docs.json";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Atomic/Chip",
  component: Chip,
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { type: "text" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: "Label",
    pill: true,
  },
};

export const Avatar: Story = {
  args: {
    children: "Label",
    avatar: "M",
  },
};

export const Closeable: Story = {
  args: {
    children: "Label",
    closeable: true,
  },
};

export const Selected: Story = {
  args: {
    children: "Label",
    selected: true,
  },
};
