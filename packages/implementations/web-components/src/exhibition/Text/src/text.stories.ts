import type { Meta, StoryObj } from "@storybook/html";
import { argTypesConvert, storyGenerator } from ".storybook/utils";
import docs from "./text.docs.json";
import "./Text";

const { argTypes, Template } = storyGenerator(
  "rarui-text",
  argTypesConvert(docs),
);

const meta = {
  title: "Exibição/Text",
  tags: ["autodocs"],
  argTypes,
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

export const basic: Story = Template.bind({});
basic.args = {
  children: "Lorem ipsum dolor sit amet",
  color: "$primary",
};

export const p: Story = Template.bind({});
p.args = {
  as: "p",
  color: "$primary",
  children: "Lorem ipsum dolor sit amet",
};

export const span: Story = Template.bind({});
span.args = {
  as: "span",
  color: "$primary",
  children: "Lorem ipsum dolor sit amet",
};

export const primary: Story = Template.bind({});
primary.args = {
  color: "$primary",
  children: "Lorem ipsum dolor sit amet",
};

export const success: Story = Template.bind({});
success.args = {
  color: "$success",
  children: "Lorem ipsum dolor sit amet",
};

export const warning: Story = Template.bind({});
warning.args = {
  color: "$warning",
  children: "Lorem ipsum dolor sit amet",
};

export const danger: Story = Template.bind({});
danger.args = {
  color: "$error",
  children: "Lorem ipsum dolor sit amet",
};

export const secondary: Story = Template.bind({});
secondary.args = {
  color: "$secondary",
  children: "Lorem ipsum dolor sit amet",
};

export const responsive: Story = Template.bind({});
responsive.args = {
  color: "$primary",
  children: "Lorem ipsum dolor sit amet",
  textAlign: { xs: "center", md: "center", lg: "left", xl: "right" },
};

export const lineClamp: Story = Template.bind({});
lineClamp.args = {
  color: "$primary",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et nisi sit amet quam convallis consectetur. Vestibulum hendrerit ac urna eget rhoncus. Aliquam non velit finibus sem gravida pretium. In neque metus, interdum a quam id, pulvinar consequat leo. Proin sapien mauris, efficitur ut mi at, finibus commodo metus. Pellentesque ac pellentesque risus. Nulla facilisi.",
  textAlign: "left",
  lineClamp: 1,
};
