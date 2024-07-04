import { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Progress } from "./Progress";
import docs from "./progress.docs.json";

const meta: Meta = {
  title: "Atomic/Progress",
  component: Progress,
  argTypes: argTypesConvert(docs),
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof Progress>;

export const Primary: Story = {
  args: {
    percentage: 50,
  },
};

export const Completed: Story = {
  args: {
    percentage: 100,
  },
};
