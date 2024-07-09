import React from "react";
import flattenChildren from "react-keyed-flatten-children";
import { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";
import { Title } from "@rarui-react/title";

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
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderStyle="dashed"
            borderWidth="$1"
            borderColor="$warning"
            borderRadius="$2xs"
            gap="$3xs"
            width="100%"
            minHeight="250px"
            minWidth="260px"
            backgroundColor="$warning-subdued"
          >
            <Title as="h6" textAlign="center" color="$warning">
              ❖ Slot
            </Title>
            <Text fontSize="$s" textAlign="center" color="$warning">
              Substitua por Componente
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
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        borderStyle="dashed"
        borderWidth="$1"
        borderColor="$warning"
        borderRadius="$2xs"
        gap="$3xs"
        width="100%"
        minHeight="250px"
        minWidth="260px"
        backgroundColor="$warning-subdued"
      >
        <Title as="h6" textAlign="center" color="$warning">
          ❖ Slot
        </Title>
        <Text fontSize="$s" textAlign="center" color="$warning">
          Substitua por Componente
        </Text>
      </Box>
    ),
  },
};
