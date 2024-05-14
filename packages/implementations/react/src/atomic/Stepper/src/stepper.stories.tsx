import { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "./Stepper";

const meta: Meta = {
  title: "Atomic/Stepper",
  component: Stepper
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Primary: Story = {
  args: {}
};
