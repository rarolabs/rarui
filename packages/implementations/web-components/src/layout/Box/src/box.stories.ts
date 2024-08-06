import type { Meta, StoryObj } from "@storybook/html";
import { argTypesConvert, storyGenerator } from ".storybook/utils";
import docs from "./box.docs.json";
import "./Box";

const { argTypes, Template } = storyGenerator(
  "rarui-box",
  argTypesConvert(docs),
);

const meta = {
  title: "Layout/Box",
  tags: ["autodocs"],
  argTypes,
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

export const basic: Story = Template.bind({});
basic.args = {
  height: "5rem",
  width: "12rem",
  borderWidth: "$2",
  borderStyle: "dashed",
  borderRadius: "$xs",
  borderColor: "$brand",
  backgroundColor: "$brand-subdued",
};

export const responsive: Story = Template.bind({});
responsive.args = {
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
};
