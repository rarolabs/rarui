import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { BookmarkOutlinedIcon } from "@rarui/icons";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";

import { Accordion } from "./Accordion";
import docs from "./accordion.docs.json";

const meta: Meta = {
  title: "Composite/Accordion",
  component: Accordion,
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const basic: Story = {
  args: {
    children: (
      <>
        <Accordion.Item index="0">
          <Accordion.Header
            title="Title one"
            icon={<BookmarkOutlinedIcon size="medium" />}
          />
          <Accordion.Body>
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
                  Replace me with your content
                </Text>
              </Box>
            </Box>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item index="1">
          <Accordion.Header
            title="Title two"
            icon={<BookmarkOutlinedIcon size="medium" />}
          />
          <Accordion.Body>
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
          </Accordion.Body>
        </Accordion.Item>
      </>
    ),
  },
};
