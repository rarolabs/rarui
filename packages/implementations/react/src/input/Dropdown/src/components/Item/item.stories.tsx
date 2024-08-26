import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Text } from "@rarui-react/text";
import { NotificationOutlinedIcon } from "@rarui/icons";

import { Dropdown } from "../../Dropdown";
import docs from "../../dropdown.docs.json";

const footerDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Dropdown.Item",
);

const meta = {
  title: "Composite/Dropdown/Item",
  component: Dropdown.Item,
  argTypes: {
    ...argTypesConvert(footerDocs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown.Item>;

export default meta;
type Story = StoryObj<typeof Dropdown.Item>;

export const basic: Story = {
  args: {
    icon: <NotificationOutlinedIcon />,
    name: "Newsletter",
    children: (
      <Text fontSize="$xs" color="$disabled">
        ⌘+N
      </Text>
    ),
  },
};
