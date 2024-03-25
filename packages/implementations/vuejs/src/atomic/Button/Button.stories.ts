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

export const Brand: Story = {
  args: {
    appearance: "brand",
    children: "Button",
  },
};

export const BrandSecondary: Story = {
  args: {
    appearance: "brand-secondary",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "large",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "small",
  },
};
