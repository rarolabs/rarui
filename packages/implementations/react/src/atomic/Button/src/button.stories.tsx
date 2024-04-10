import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import docs from "./button.docs.json";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atomic/Button",
  component: Button,
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { type: "text" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

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
    appearance: "brand",
  },
};

export const medium: Story = {
  args: {
    children: "Label",
    size: "medium",
    appearance: "brand",
  },
};

export const small: Story = {
  args: {
    children: "Label",
    size: "small",
    appearance: "brand",
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
