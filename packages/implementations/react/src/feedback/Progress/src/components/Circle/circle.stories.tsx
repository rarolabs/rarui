import { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Progress } from "../../Progress";
import docs from "../../progress.docs.json";

const progressDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Progress.Circle",
);

const meta: Meta = {
  title: "Atomic/Progress/Circle",
  component: Progress.Circle,
  argTypes: argTypesConvert(progressDocs),
  tags: ["autodocs"],
} satisfies Meta<typeof Progress.Circle>;

export default meta;

type Story = StoryObj<typeof Progress.Circle>;

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
export const Small: Story = {
  args: {
    percentage: 50,
    size: "small",
  },
};
export const SmallCompleted: Story = {
  args: {
    percentage: 100,
    size: "small",
  },
};
