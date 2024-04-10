import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Badge as BadgeComponent } from "./Badge";
import type { BadgeProps } from "./";

export const Basic: React.FC<BadgeProps> = ({
  children = "Badge",
  ...props
}) => <BadgeComponent {...props}>{children}</BadgeComponent>;

Basic.displayName = "Badge";

const meta = {
  title: "Atomic/Badge",
  component: Basic,
  argTypes: {
    children: { control: { type: "text" } },
    appearance: {
      control: "select",
      options: [
        "brand",
        "danger",
        "success",
        "warning",
        "info",
        "neutral",
        "inverted",
      ],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large", "dot"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Basic>;

export default meta;
type Story = StoryObj<typeof Basic>;

export const basic: Story = {
  args: {
    appearance: "brand",
  },
};

export const outlined: Story = {
  args: {
    children: "badge",
    variant: "outlined",
  },
};

export const solid: Story = {
  args: {
    variant: "solid",
    appearance: "success",
  },
};
