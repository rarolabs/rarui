import type { Meta, StoryObj } from "@storybook/html";
import { argTypesConvert, storyGenerator } from ".storybook/utils";
import docs from "./title.docs.json";
import "./Title";

const { argTypes, Template } = storyGenerator(
  "rarui-title",
  argTypesConvert(docs),
);

const meta = {
  title: "Exibição/Title",
  tags: ["autodocs"],
  argTypes,
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

export const basic: Story = Template.bind({});
basic.args = {
  color: "$primary",
  children: "Lorem ipsum dolor sit amet",
};

export const h1: Story = Template.bind({});
h1.args = {
  as: "h1",
  color: "$primary",
  children: "Lorem ipsum dolor sit amet",
};

export const h2: Story = Template.bind({});
h2.args = {
  as: "h2",
  color: "$primary",
  children: "Lorem ipsum dolor sit amet",
};

export const h3: Story = Template.bind({});
h3.args = {
  as: "h3",
  color: "$primary",
  children: "Lorem ipsum dolor sit amet",
};

export const h4: Story = Template.bind({});
h4.args = {
  as: "h4",
  color: "$primary",
  children: "Lorem ipsum dolor sit amet",
};

export const h5: Story = Template.bind({});
h5.args = {
  as: "h5",
  color: "$primary",
  children: "Lorem ipsum dolor sit amet",
};

export const h6: Story = Template.bind({});
h6.args = {
  as: "h6",
  color: "$primary",
  children: "Lorem ipsum dolor sit amet",
};

export const responsive: Story = Template.bind({});
responsive.args = {
  fontSize: "$s",
  textAlign: {
    xs: "left",
    md: "center",
    lg: "right",
  },
  children: "Lorem ipsum dolor sit amet",
};
