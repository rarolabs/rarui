import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { StorefrontIcon } from "@rarui/icons";
import { Icon } from "./Icon";
import docs from "./icon.docs.json";

const meta: Meta<typeof Icon> = {
  title: "Atomic/Icon",
  component: Icon,
  argTypes: argTypesConvert(docs),
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const basic: Story = {
  args: {
    source: <StorefrontIcon size={32} />,
    color: "$brand",
  },
};

export const large: Story = {
  args: {
    source: <StorefrontIcon size="large" />,
    color: "$brand",
  },
};

export const medium: Story = {
  args: {
    source: <StorefrontIcon size="medium" />,
    color: "$brand",
  },
};

export const small: Story = {
  args: {
    source: <StorefrontIcon size="small" />,
    color: "$brand",
  },
};
