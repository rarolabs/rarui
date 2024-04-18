import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import docs from "./badge.docs.json";

import { Badge } from "./Badge";

const meta = {
  title: "Atomic/Badge",
  component: Badge,
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { type: "text" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const basic: Story = {
  args: {
    appearance: "brand",
    children: "Badge",
  },
};

export const outlined: Story = {
  args: {
    children: "Badge",
    variant: "outlined",
  },
};

export const solid: Story = {
  args: {
    variant: "solid",
    appearance: "success",
    children: "Badge",
  },
};
