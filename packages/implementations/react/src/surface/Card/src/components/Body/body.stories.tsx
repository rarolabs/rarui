import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";

import { Card } from "../../Card";
import docs from "../../card.docs.json";

const bodyDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Card.Body",
);

const meta: Meta<typeof Card.Body> = {
  title: "Composite/Card/Body",
  render: (args) => (
    <Card>
      <Card.Header title="Title" />
      <Card.Body {...args} />
    </Card>
  ),
  component: Card.Body,
  argTypes: {
    ...argTypesConvert(bodyDocs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card.Body>;

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
        borderRadius="$2xs"
        width="100%"
        height="250px"
        backgroundColor="$warning-subdued"
      >
        <Text textAlign="center" color="$warning" fontSize="$s" lineHeight="$m">
          Replace me with your content
        </Text>
      </Box>
    ),
  },
};
