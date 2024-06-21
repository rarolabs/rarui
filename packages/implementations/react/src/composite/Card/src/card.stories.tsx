import React from "react";
import flattenChildren from "react-keyed-flatten-children";
import { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";

import { Card } from "./Card";
import docs from "./card.docs.json";

const meta: Meta = {
  title: "Composite/Card",
  component: Card,
  render: ({ children, ...args }) => (
    <Card {...args}>{flattenChildren(children)}</Card>
  ),
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const basic: Story = {
  args: {
    children: (
      <>
        <Card.Header title="Title" description="Description" />
        <Card.Body>
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
            <Text
              textAlign="center"
              color="$warning"
              fontSize="$s"
              lineHeight="$m"
            >
              Replace me with your content
            </Text>
          </Box>
        </Card.Body>
      </>
    ),
  },
};

export const customContent: Story = {
  args: {
    padding: "none",
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
