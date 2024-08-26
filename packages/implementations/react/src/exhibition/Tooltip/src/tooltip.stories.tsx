import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";
import { Button } from "@rarui-react/button";
import { Title } from "@rarui-react/title";

import { Tooltip } from "./Tooltip";
import docs from "./tooltip.docs.json";

const meta = {
  title: "Atomic/Tooltip",
  component: Tooltip,
  render: ({ onVisibility: _onVisibility, ...args }) => (
    <Box cursor="default" display="flex" justifyContent="center">
      <Tooltip {...args}>
        <Text color="$primary">Hover</Text>
      </Tooltip>
    </Box>
  ),
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const basic: Story = {
  args: {
    enabledHover: true,
    content: (
      <Text fontSize="$s" color="$primary">
        Lorem ipsum dolor site amet
      </Text>
    ),
  },
};

export const rich: Story = {
  args: {
    enabledHover: true,
    content: (
      <Box>
        <Tooltip.Header
          closeable
          title="Title lorem ipsum"
          subtitle="Description lorem ipsum dolor"
        />
        <Tooltip.Body>
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
            minHeight="252px"
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
        </Tooltip.Body>
        <Tooltip.Footer>
          <Button appearance="neutral" variant="text" size="medium">
            Action
          </Button>
        </Tooltip.Footer>
      </Box>
    ),
  },
};
