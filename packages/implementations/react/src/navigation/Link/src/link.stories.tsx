import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import docs from "./link.docs.json";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Atomic/Link",
  component: Link,
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { type: "text" } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Link>;

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
