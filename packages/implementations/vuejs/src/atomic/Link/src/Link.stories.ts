import type { Meta, StoryObj } from "@storybook/vue3";
import Link from "./Link.vue";

const meta = {
  title: "Atomic/Link",
  component: Link,
  tags: ["autodocs"],
  render: (args) => ({
    components: { Link },
    setup() {
      return { args };
    },
    template: "<Link v-bind='args'>Link</Link>",
  }),
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    appearance: "default",
    size: "large",
  },
};
export const Neutral: Story = {
  args: {
    appearance: "neutral",
    size: "medium",
  },
};
export const Inverted: Story = {
  args: {
    appearance: "inverted",
    size: "medium",
  },
};
export const Small: Story = {
  args: {
    appearance: "default",
    size: "small",
  },
};
export const Medium: Story = {
  args: {
    appearance: "default",
    size: "medium",
  },
};
export const Large: Story = {
  args: {
    appearance: "default",
    size: "large",
  },
};
