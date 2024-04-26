import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Divider } from "./Divider";
import docs from "./divider.docs.json";

const meta: Meta<typeof Divider> = {
  title: "Atomic/Divider",
  component: Divider,
  argTypes: argTypesConvert(docs),
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Solid: Story = {
  args: {
    direction: "vertical",
    width: "medium",
    size: "md",
    style: "solid",
  },
};
export const Dashed: Story = {
  args: {
    direction: "vertical",
    width: "medium",
    size: "md",
    style: "dashed",
  },
};
