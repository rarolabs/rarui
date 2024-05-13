import { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Circle } from "./Circle";
import docs from "../../progress.docs.json";

const progressDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Progress.Circle"
);

const meta: Meta = {
  title: "Atomic/Progress.Circle",
  component: Circle,
  argTypes: {
    ...argTypesConvert(progressDocs)
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Circle>;

export default meta;

type Story = StoryObj<typeof Circle>;

export const Primary: Story = {
  args: {
    percentage: 50
  }
};

export const Completed: Story = {
  args: {
    percentage: 100
  }
};
export const Small: Story = {
  args: {
    percentage: 50,
    size: "small"
  }
};
export const SmallCompleted: Story = {
  args: {
    percentage: 100,
    size: "small"
  }
};
