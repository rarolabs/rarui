import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";

import { Tooltip } from "../../Tooltip";
import docs from "../../tooltip.docs.json";

const footerDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Tooltip.Body",
);

const meta = {
  title: "Atomic/Tooltip/Body",
  component: Tooltip.Body,
  render: (args) => (
    <Box display="flex" justifyContent="center">
      <Tooltip
        content={
          <>
            <Tooltip.Header
              closeable
              title="Title lorem ipsum"
              subtitle="Description lorem ipsum dolor"
            />
            <Tooltip.Body {...args} />
          </>
        }
      >
        <Text color="$primary">Hover</Text>
      </Tooltip>
    </Box>
  ),
  argTypes: {
    ...argTypesConvert(footerDocs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip.Body>;

export default meta;
type Story = StoryObj<typeof Tooltip.Body>;

export const basic: Story = {
  args: {
    children: (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderStyle="dashed"
        borderWidth="$1"
        borderColor="$warning"
        width="100%"
        height="150px"
      >
        <Text textAlign="center" color="$warning" fontSize="$s" lineHeight="$m">
          Replace me with your content
        </Text>
      </Box>
    ),
  },
};
