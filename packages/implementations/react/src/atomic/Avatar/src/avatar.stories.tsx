import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Icon } from "@rarui-react/icon";
import { UserFilledIcon } from "@rarui/icons";
import docs from "./avatar.docs.json";

import { Avatar } from "./Avatar";

const meta = {
  title: "Atomic/Avatar",
  component: Avatar,
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { type: "text" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const basic: Story = {
  args: {
    children: "RU",
    size: "xLarge",
  },
};
export const icon: Story = {
  args: {
    children: (
      <Icon source={<UserFilledIcon size="medium" />} color="$currentColor" />
    ),

    size: "xLarge",
  },
};

export const image: Story = {
  args: {
    children: (
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    ),
    size: "xLarge",
  },
};

export const withBadge: Story = {
  args: {
    children: (
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    ),
    size: "xLarge",
    badge: {
      children: "1",
    },
  },
};
