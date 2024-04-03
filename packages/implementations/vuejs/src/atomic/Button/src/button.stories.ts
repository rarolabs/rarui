import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";

const meta = {
  title: "Atomic/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const basic: Story = {
  args: {
    appearance: "brand",
    default: "Label",
  },
};

export const large: Story = {
  args: {
    default: "Label",
    appearance: "brand",
  },
};

export const medium: Story = {
  args: {
    default: "Label",
    size: "medium",
    appearance: "brand",
  },
};

export const small: Story = {
  args: {
    default: "Label",
    size: "small",
    appearance: "brand",
  },
};

export const disabled: Story = {
  args: {
    disabled: true,
    default: "Label",
  },
};

export const asLink = {
  args: {
    as: "a",
    default: "Button as anchor",
    href: "https://bmg.com/",
    target: "_blank",
  },
};

export const outlined: Story = {
  args: {
    default: "Label",
    variant: "outlined",
    appearance: "success",
  },
};

export const solid: Story = {
  args: {
    default: "Label",
    variant: "solid",
    appearance: "success",
  },
};

export const text: Story = {
  args: {
    default: "Label",
    variant: "text",
    appearance: "success",
  },
};

export const tonal: Story = {
  args: {
    default: "Label",
    variant: "tonal",
    appearance: "success",
  },
};
