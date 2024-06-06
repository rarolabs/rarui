import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { StorefrontIcon } from "@rarui/icons";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";
import { Accordion } from "../../Accordion";

const meta: Meta<typeof Accordion.Body> = {
  title: "Composite/Accordion.Body",
  component: Accordion.Body,
  render: (args) => (
    <Accordion>
      <Accordion.Item index="0">
        <Accordion.Header
          title="Title one"
          subtitle="Caption one"
          icon={<StorefrontIcon size="medium" />}
        />
        <Accordion.Body {...args} />
      </Accordion.Item>
    </Accordion>
  ),
  argTypes: {
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion.Body>;

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
        height="100%"
      >
        <Text textAlign="center">Replace me with your content</Text>
      </Box>
    ),
  },
};
