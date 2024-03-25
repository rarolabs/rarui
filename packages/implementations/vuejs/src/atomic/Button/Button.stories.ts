import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Example/Button",
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
  },
  args: {
    appearance: "brand",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
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
