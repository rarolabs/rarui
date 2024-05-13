import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Icon } from "@rarui-react/icon";
import { UserFilledIcon } from "@rarui/icons";
import docs from "./breadcrumbs.docs.json";
import { Breadcrumbs } from "./Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Atomic/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: argTypesConvert(docs),
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const basic: Story = {
  args: {
    itens: [
      {
        id: "1",
        title: (
          <>
            <Icon source={<UserFilledIcon size={16} />} />
            hello
          </>
        ),
        href: "https://www.youtube.com",
      },
      {
        id: "2",
        title: "Link",
        href: "/",
      },
      {
        id: "3",
        title: "Link",
        href: "https://www.google.com",
      },
      {
        id: "4",
        title: "Link",
        href: "https://www.google.com",
      },
      {
        id: "5",
        title: "Link",
        href: "https://www.google.com",
      },
    ],
  },
};

export const collapsed: Story = {
  args: {
    itens: [
      {
        id: "1",
        title: (
          <>
            <Icon source={<UserFilledIcon size={16} />} />
            hello
          </>
        ),
        href: "https://www.youtube.com",
      },
      {
        id: "2",
        title: "Link",
        href: "/",
      },
      {
        id: "3",
        title: "Link",
        href: "https://www.google.com",
      },
      {
        id: "4",
        title: "Link",
        href: "https://www.google.com",
      },
      {
        id: "5",
        title: "Link",
        href: "https://www.google.com",
      },
    ],
    maxItens: 2,
  },
};
