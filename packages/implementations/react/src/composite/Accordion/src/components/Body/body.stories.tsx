import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { BookmarkOutlinedIcon } from "@rarui/icons";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";

import { Accordion } from "../../Accordion";
import docs from "../../accordion.docs.json";

const bodyDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Accordion.Body",
);

const meta: Meta<typeof Accordion.Body> = {
  title: "Composite/Accordion/Body",
  component: Accordion.Body,
  render: (args) => (
    <Accordion>
      <Accordion.Item index="0">
        <Accordion.Header
          title="Title one"
          icon={<BookmarkOutlinedIcon size="medium" />}
        />
        <Accordion.Body {...args} />
      </Accordion.Item>
    </Accordion>
  ),
  argTypes: {
    ...argTypesConvert(bodyDocs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion.Body>;

export const basic: Story = {
  args: {
    children: (
      <Box display="flex" flexDirection="column" gap="$2xs">
        <Text color="$secondary">Lorem ipsum dolor sit amet.</Text>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderStyle="dashed"
          borderWidth="$1"
          borderColor="$warning"
          width="100%"
          minHeight="200px"
        >
          <Text textAlign="center" color="$warning">
            Replace me with your content two
          </Text>
        </Box>
      </Box>
    ),
  },
};
