import React, { forwardRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Link as LinkComponent, LinkProps } from "./Link";

export const Basic: React.FC<LinkProps> = forwardRef(
  ({ children = "Link", ...props }: LinkProps) => (
    <LinkComponent {...props}>{children}</LinkComponent>
  ),
) as React.FC<LinkProps>;
Basic.displayName = "Link";

const meta: Meta<typeof Basic> = {
  title: "Atomic/Link",
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

export const basic = {
  args: {
    children: "Link",
    href: "mailto: hola@tiendanube.com",
  },
};

export const neutral: Story = {
  args: {
    appearance: "neutral",
    children: "Link",
  },
};

export const large = {
  args: {
    children: "Link",
    size: "large",
  },
};

export const medium = {
  args: {
    children: "Link",
    size: "medium",
  },
};

export const small = {
  args: {
    children: "Link",
    size: "small",
  },
};

export const asButton: Story = {
  args: {
    children: "Link as button",
    as: "button",
  },
};
