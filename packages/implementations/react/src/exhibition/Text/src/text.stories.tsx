import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Text } from "./Text";
import docs from "./text.docs.json";

const meta: Meta<typeof Text> = {
  title: "Atomic/Text",
  component: Text,
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { type: "text" } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const basic: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet",
    color: "$primary",
  },
};

export const p: Story = {
  args: {
    as: "p",
    color: "$primary",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const span: Story = {
  args: {
    as: "span",
    color: "$primary",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const primary: Story = {
  args: {
    color: "$primary",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const success: Story = {
  args: {
    color: "$success",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const warning: Story = {
  args: {
    color: "$warning",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const danger: Story = {
  args: {
    color: "$error",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const secondary: Story = {
  args: {
    color: "$secondary",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const responsive: Story = {
  args: {
    color: "$primary",
    children: "Lorem ipsum dolor sit amet",
    textAlign: { xs: "center", md: "center", lg: "left", xl: "right" },
  },
};

export const lineClamp: Story = {
  args: {
    color: "$primary",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et nisi sit amet quam convallis consectetur. Vestibulum hendrerit ac urna eget rhoncus. Aliquam non velit finibus sem gravida pretium. In neque metus, interdum a quam id, pulvinar consequat leo. Proin sapien mauris, efficitur ut mi at, finibus commodo metus. Pellentesque ac pellentesque risus. Nulla facilisi.",
    textAlign: "left",
    lineClamp: 1,
  },
};
