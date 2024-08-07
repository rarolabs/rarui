import type { Meta, StoryObj } from "@storybook/html";
import { argTypesConvert, storyGenerator } from ".storybook/utils";
import docs from "./button.docs.json";
import "./Button";

const { argTypes, Template } = storyGenerator(
  "rarui-button",
  argTypesConvert(docs),
);

const meta = {
  title: "Entrada/Button",
  tags: ["autodocs"],
  argTypes,
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

export const Basic: Story = Template.bind({});
Basic.args = {
  appearance: "brand",
  children: "Label",
};

export const Large: Story = Template.bind({});
Large.args = {
  children: "Label",
  size: "large",
  appearance: "brand",
};

export const Medium: Story = Template.bind({});
Medium.args = {
  children: "Label",
  size: "medium",
  appearance: "brand",
};

export const Small: Story = Template.bind({});
Small.args = {
  children: "Label",
  size: "small",
  appearance: "brand",
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  disabled: true,
  children: "Label",
};

export const AsLink: Story = Template.bind({});
AsLink.args = {
  as: "a",
  children: "Button as anchor",
  href: "https://www.google.com.br",
  target: "_blank",
};

export const Outlined: Story = Template.bind({});
Outlined.args = {
  children: "Label",
  variant: "outlined",
  appearance: "success",
};

export const Solid: Story = Template.bind({});
Solid.args = {
  children: "Label",
  variant: "solid",
  appearance: "danger",
};

export const Text: Story = Template.bind({});
Text.args = {
  children: "Label",
  variant: "text",
  appearance: "warning",
};

export const Tonal: Story = Template.bind({});
Tonal.args = {
  children: "Label",
  variant: "tonal",
  appearance: "success",
};
