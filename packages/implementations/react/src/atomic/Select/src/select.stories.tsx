import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { SearchIcon } from "@rarui/icons";
import { Input } from "@rarui-react/input";
import { Icon } from "@rarui-react/icon";
import { Box } from "@rarui-react/box";

import { Select } from "./Select";
import docs from "./select.docs.json";

const meta = {
  title: "Atomic/Select",
  component: Select,
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const basic: Story = {
  args: {
    onChange: (options) => console.log(options),
    value: [
      {
        label: "Item 1",
        value: "item-1",
      },
      {
        label: "Item 2",
        value: "item-2",
      },
      {
        label: "Item 3",
        value: "item-3",
      },
    ],
    options: [
      {
        label: "Item 1",
        value: "item-1",
      },
      {
        label: "Item 2",
        value: "item-2",
      },
      {
        label: "Item 3",
        value: "item-3",
      },
    ],
  },
};

export const withFilterOptions: Story = {
  args: {
    onChange: (options) => options,
    children: (
      <Box
        paddingRight="$3xs"
        borderWidth="$none"
        borderBottomWidth="$1"
        borderStyle="solid"
        borderColor="$secondary"
      >
        <Input
          size="small"
          divider={false}
          border={false}
          leadingStart={
            <Icon color="$currentColor" source={<SearchIcon size="small" />} />
          }
        />
      </Box>
    ),
    options: [
      {
        label: "Item 1",
        value: "item-1",
      },
      {
        label: "Item 2",
        value: "item-2",
      },
      {
        label: "Item 3",
        value: "item-3",
      },
    ],
  },
};
