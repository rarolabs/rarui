import type { Meta, StoryObj } from "@storybook/vue3";
import Badge from "./Badge.vue";

const meta = {
  title: "Atomic/Badge",
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    appearance: "brand",
    size: "medium",
    default: "Badge",
  },
};
export const Danger: Story = {
  args: {
    appearance: "danger",
    size: "medium",
    default: "Badge",
  },
};
export const Success: Story = {
  args: {
    appearance: "success",
    size: "medium",
    default: "Badge",
  },
};
export const Warning: Story = {
  args: {
    appearance: "warning",
    size: "medium",
    default: "Badge",
  },
};
export const Info: Story = {
  args: {
    appearance: "info",
    size: "medium",
    default: "Badge",
  },
};
export const Neutral: Story = {
  args: {
    appearance: "neutral",
    size: "medium",
    default: "Badge",
  },
};
export const Inverted: Story = {
  args: {
    appearance: "inverted",
    size: "medium",
    default: "Badge",
  },
};
export const Outlined: Story = {
  args: {
    appearance: "brand",
    size: "medium",
    variant: "outlined",
    default: "Badge",
  },
  argTypes: {
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
  },
};
export const Dot: Story = {
  args: {
    appearance: "brand",
    size: "dot",
    default: "Badge",
  },
  argTypes: {
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
  },
};
export const DotOutlined: Story = {
  args: {
    appearance: "brand",
    size: "dot",
    variant: "outlined",
    default: "Badge",
  },
  argTypes: {
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
  },
};
export const Large: Story = {
  args: {
    appearance: "brand",
    size: "large",
    default: "Badge",
  },
};
export const Small: Story = {
  args: {
    appearance: "brand",
    size: "small",
    default: "Badge",
  },
};
