import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Skeleton } from "./Skeleton";
import docs from "./skeleton.docs.json";

const meta: Meta<typeof Skeleton> = {
  title: "Atomic/Skeleton",
  component: Skeleton,
  argTypes: argTypesConvert(docs),
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const basic: Story = {
  args: {
    height: "3.125rem",
    width: "9.375rem",
  },
};
