import React, { forwardRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button as ButtonComponent, ButtonProps } from "./Button";

export const Basic: React.FC<ButtonProps> = forwardRef(
  ({ children = "Button", ...props }: ButtonProps) => (
    <ButtonComponent {...props}>{children}</ButtonComponent>
  ),
) as React.FC<ButtonProps>;
Basic.displayName = "Button";

const meta = {
  title: "Atomic/Button",
  component: Basic,
  argTypes: {
    as: {
      description:
        "The underlying element to render — an HTML element name of type a or button or a React component of type HTMLAnchorElement or HTMLButtonElement.",
    },
    ref: {
      description:
        "A ref to the element rendered by this component. Because this component is polymorphic, the type will vary based on the value of the as prop.",
    },
    children: { control: { type: "text" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Basic>;

export default meta;
type Story = StoryObj<typeof Basic>;

export const basic: Story = {
  args: {
    appearance: "brand",
    children: "Label",
  },
};

export const large: Story = {
  args: {
    children: "Label",
    size: "large",
    appearance: "brand-secondary",
  },
};

export const medium: Story = {
  args: {
    children: "Label",
    size: "medium",
    appearance: "brand-secondary",
  },
};

export const small: Story = {
  args: {
    children: "Label",
    size: "small",
    appearance: "brand-secondary",
  },
};

export const disabled: Story = {
  args: {
    disabled: true,
    children: "Label",
  },
};

export const asLink = {
  args: {
    as: "a",
    children: "Button as anchor",
    href: "https://bmg.com/",
    target: "_blank",
  },
};

export const outlined: Story = {
  args: {
    children: "Label",
    variant: "outlined",
    appearance: "success",
  },
};

export const solid: Story = {
  args: {
    children: "Label",
    variant: "solid",
    appearance: "success",
  },
};

export const text: Story = {
  args: {
    children: "Label",
    variant: "text",
    appearance: "success",
  },
};

export const tonal: Story = {
  args: {
    children: "Label",
    variant: "tonal",
    appearance: "success",
  },
};
