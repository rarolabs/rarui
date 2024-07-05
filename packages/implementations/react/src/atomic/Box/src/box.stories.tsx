import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Box } from "./Box";
import docs from "./box.docs.json";

const meta: Meta<typeof Box> = {
  title: "Atomic/Box",
  component: Box,
  argTypes: argTypesConvert(docs),
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const basic: Story = {
  args: {
    height: "5rem",
    width: "12rem",
    borderWidth: "$2",
    borderStyle: "dashed",
    borderRadius: "$xs",
    borderColor: "$brand",
    backgroundColor: "$brand-subdued",
  },
};

export const responsive: Story = {
  args: {
    height: {
      xl: "6rem",
      lg: "4rem",
      md: "3rem",
      xs: "2rem",
    },
    width: {
      xl: "12rem",
      lg: "10rem",
      md: "8rem",
      xs: "2rem",
    },
    backgroundColor: {
      xl: "$warning",
      lg: "$brand",
      md: "$background",
      xs: "$success",
    },
    paddingX: {
      xl: "$xl",
      lg: "$lg",
      md: "$md",
      xs: "$none",
    },
    borderRadius: {
      xl: "$xl",
      lg: "$lg",
      md: "$md",
      xs: "$pill",
    },
  },
};
