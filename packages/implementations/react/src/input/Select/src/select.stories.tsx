import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { SearchIcon } from "@rarui/icons";
import { Input } from "@rarui-react/input";
import { Icon } from "@rarui-react/icon";
import { Box } from "@rarui-react/box";
import { Divider } from "@rarui-react/divider";

import { Select } from "./Select";
import docs from "./select.docs.json";

const meta = {
  title: "Atomic/Select",
  component: Select,
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { disable: true } },
  },
  render: ({ ...args }) => {
    const options = [
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
    ];
    return (
      <Select
        {...args}
        options={options}
        placeholder="Selecione"
        maxHeight="300px"
      />
    );
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const basic: Story = {
  args: {},
};

export const multiple: Story = {
  args: {
    multiple: true,
  },
};

export const withFilterOptions: Story = {
  render: ({ ...args }) => {
    const [filter, setFilter] = useState("");
    const options = [
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
    ];

    return (
      <Select
        {...args}
        options={options.filter((option) =>
          option.label.toLowerCase().includes(filter.toLowerCase()),
        )}
        placeholder="Selecione"
        maxHeight="300px"
      >
        <Box display="flex" flexDirection="column" gap="$3xs">
          <Input
            size="small"
            divider={false}
            border={false}
            leadingStart={
              <Icon
                color="$currentColor"
                source={<SearchIcon size="small" />}
              />
            }
            onChange={(event) => setFilter(event.target.value)}
            value={filter}
          />
          <Divider thickness="$2" color="$secondary" />
        </Box>
      </Select>
    );
  },
  args: {
    multiple: true,
  },
};
