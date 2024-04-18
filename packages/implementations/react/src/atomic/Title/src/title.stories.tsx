import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Title } from "./Title";
import docs from "./title.docs.json";

const meta: Meta<typeof Title> = {
  title: "Atomic/Title",
  component: Title,
  argTypes: argTypesConvert(docs),
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Title>;

export const basic: Story = {
  args: {
    color: "$primary",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const h1: Story = {
  args: {
    as: "h1",
    color: "$primary",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const h2: Story = {
  args: {
    as: "h2",
    color: "$primary",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const h3: Story = {
  args: {
    as: "h3",
    color: "$primary",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const h4: Story = {
  args: {
    as: "h4",
    color: "$primary",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const h5: Story = {
  args: {
    as: "h5",
    color: "$primary",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const h6: Story = {
  args: {
    as: "h6",
    color: "$primary",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const responsive: Story = {
  args: {
    fontSize: "$s",
    textAlign: {
      xs: "left",
      md: "center",
      lg: "right",
    },
    children: "Lorem ipsum dolor sit amet",
  },
};
