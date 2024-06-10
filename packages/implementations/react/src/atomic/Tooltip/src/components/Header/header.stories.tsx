import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";

import { Tooltip } from "../../Tooltip";
import docs from "../../tooltip.docs.json";

const headerDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Tooltip.Header",
);

const meta = {
  title: "Atomic/Tooltip/Header",
  component: Tooltip.Header,
  render: (args) => (
    <Box display="flex" justifyContent="center">
      <Tooltip content={<Tooltip.Header {...args} />}>
        <Text color="$primary">Hover</Text>
      </Tooltip>
    </Box>
  ),
  argTypes: {
    ...argTypesConvert(headerDocs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip.Header>;

export default meta;
type Story = StoryObj<typeof Tooltip.Header>;

export const basic: Story = {
  args: {
    closeable: true,
    title: "Title lorem ipsum",
    subtitle: "Description lorem ipsum dolor",
  },
};
