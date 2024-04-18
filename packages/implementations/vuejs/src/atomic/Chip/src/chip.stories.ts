import type { Meta, StoryObj } from "@storybook/vue3";
import Chip from "./Chip.vue";

const meta = {
  title: "Atomic/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    pill: { control: "boolean" },
    selected: { control: "boolean" },
  },
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
    pill: false,
    default: "Chip",
  },
};
