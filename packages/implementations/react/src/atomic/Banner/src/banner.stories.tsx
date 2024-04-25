import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import docs from "./banner.docs.json";

import { Banner } from "./Banner";

const meta = {
  title: "Atomic/Banner",
  component: Banner,
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { type: "text" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof Banner>;

export const basic: Story = {
  args: {
    appearance: "brand",
    children: "Banner",
  },
};
export const longText: Story = {
  args: {
    appearance: "brand",
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis efficitur condimentum. Donec dignissim ac nibh id elementum. Nam condimentum purus commodo leo hendrerit tincidunt.
      Nam non mi in massa gravida tincidunt commodo quis enim. Quisque id sapien est. Pellentesque sed sollicitudin diam, non pulvinar magna. Mauris vulputate nibh sit amet ligula tincidunt accumsan.`,
  },
};
