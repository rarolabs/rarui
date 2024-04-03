import type { Meta, StoryObj } from "@storybook/vue3";
import Chip from "./Chip.vue";

const meta = {
  title: "Atomic/Chip",
  component: Chip,
  tags: ["autodocs"],
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args };
    },
    template: "<Chip v-bind='args'>Chip</Chip>",
  }),
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    shape: "pill",
    default: "Chip",
  },
  argTypes: {
    shape: { control: "select", options: ["pill", "rounded"] },
  },
};
export const Rounded: Story = {
  args: {
    shape: "rounded",
    default: "Chip",
  },
};
export const Disabled: Story = {
  args: {
    shape: "rounded",
    default: "Chip",
    disabled: true,
  },
};
export const Closeable: Story = {
  args: {
    shape: "rounded",
    default: "Chip",
    closeable: true,
  },
};
