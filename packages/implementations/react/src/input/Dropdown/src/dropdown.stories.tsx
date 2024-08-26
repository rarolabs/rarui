import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import {
  NotificationOutlinedIcon,
  TagOutlinedIcon,
  DownloadOutlinedIcon,
  WorkOutlinedIcon,
  MenuIcon,
} from "@rarui/icons";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";
import { Icon } from "@rarui-react/icon";
import { IconButton } from "@rarui-react/icon-button";

import { Dropdown } from "./Dropdown";
import docs from "./dropdown.docs.json";

const meta = {
  title: "Composite/Dropdown",
  component: Dropdown,
  render: ({ onVisibility: _onVisibility, ...args }) => (
    <Box display="flex" justifyContent="center">
      <Dropdown {...args}>
        <IconButton
          appearance="brand"
          source={
            <Icon color="$currentColor" source={<MenuIcon size="medium" />} />
          }
        />
      </Dropdown>
    </Box>
  ),
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const basic: Story = {
  args: {
    width: "200px",
    content: (
      <>
        <Dropdown.Item icon={<NotificationOutlinedIcon />} name="Newsletter">
          <Text fontSize="$xs" color="$disabled">
            ⌘+N
          </Text>
        </Dropdown.Item>
        <Dropdown.Item icon={<TagOutlinedIcon />} name="Purchase">
          <Text fontSize="$xs" color="$disabled">
            ⌘+P,J
          </Text>
        </Dropdown.Item>
        <Dropdown.Item icon={<DownloadOutlinedIcon />} name="Downloads">
          <Text fontSize="$xs" color="$disabled">
            ⌘+D
          </Text>
        </Dropdown.Item>
        <Dropdown.Item icon={<WorkOutlinedIcon />} name="Team Account">
          <Text fontSize="$xs" color="$disabled">
            ⌘+T,A
          </Text>
        </Dropdown.Item>
      </>
    ),
  },
};
