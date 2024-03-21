import React, { forwardRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button as ButtonComponent, ButtonProps } from "./Button";

export const Basic: React.FC<ButtonProps> = forwardRef(
  ({ children = "Button", ...props }: ButtonProps) => (
    <ButtonComponent {...props}>{children}</ButtonComponent>
  ),
) as React.FC<ButtonProps>;
Basic.displayName = "Button";

const meta: Meta<typeof Basic> = {
  title: "Atomics/Button",
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
};

export default meta;
type Story = StoryObj<typeof Basic>;

export const basic: Story = {
  args: {
    appearance: "brand",
    children: "Label",
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

export const primary: Story = {
  args: {
    children: "Label",
    appearance: "brand",
  },
};

export const brandSecondary: Story = {
  args: {
    children: "Label",
    appearance: "brand-secondary",
  },
};

export const danger: Story = {
  args: {
    children: "Label",
    appearance: "danger",
  },
};
