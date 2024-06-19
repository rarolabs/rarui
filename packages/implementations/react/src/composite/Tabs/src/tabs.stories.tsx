import React from "react";
import flattenChildren from "react-keyed-flatten-children";
import { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { SentimentSatisfiedOutlinedIcon } from "@rarui/icons";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";
import { Icon } from "@rarui-react/icon";

import { Tabs } from "./Tabs";
import docs from "./tabs.docs.json";

const meta: Meta = {
  title: "Composite/Tabs",
  component: Tabs,
  render: ({ children, ...args }) => (
    <Tabs {...args}>{flattenChildren(children)}</Tabs>
  ),
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const basic: Story = {
  args: {
    children: (
      <>
        <Tabs.Item label="Label">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderStyle="dashed"
            borderWidth="$1"
            borderColor="$warning"
            width="100%"
            height="150px"
            backgroundColor="$warning-subdued"
          >
            <Text
              textAlign="center"
              color="$warning"
              fontSize="$s"
              lineHeight="$m"
            >
              Replace me with your content tab 1
            </Text>
          </Box>
        </Tabs.Item>
        <Tabs.Item label="Label">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderStyle="dashed"
            borderWidth="$1"
            borderColor="$warning"
            width="100%"
            height="150px"
            backgroundColor="$warning-subdued"
          >
            <Text
              textAlign="center"
              color="$warning"
              fontSize="$s"
              lineHeight="$m"
            >
              Replace me with your content tab 2
            </Text>
          </Box>
        </Tabs.Item>
      </>
    ),
  },
};

export const underlined: Story = {
  args: {
    underlined: true,
    children: (
      <>
        <Tabs.Item label="Label">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderStyle="dashed"
            borderWidth="$1"
            borderColor="$warning"
            width="100%"
            height="150px"
            backgroundColor="$warning-subdued"
          >
            <Text
              textAlign="center"
              color="$warning"
              fontSize="$s"
              lineHeight="$m"
            >
              Replace me with your content tab 1
            </Text>
          </Box>
        </Tabs.Item>
        <Tabs.Item label="Label">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderStyle="dashed"
            borderWidth="$1"
            borderColor="$warning"
            width="100%"
            height="150px"
            backgroundColor="$warning-subdued"
          >
            <Text
              textAlign="center"
              color="$warning"
              fontSize="$s"
              lineHeight="$m"
            >
              Replace me with your content tab 2
            </Text>
          </Box>
        </Tabs.Item>
      </>
    ),
  },
};

export const customLabel: Story = {
  args: {
    underlined: true,
    children: (
      <>
        <Tabs.Item
          label={
            <>
              <Icon source={<SentimentSatisfiedOutlinedIcon size="medium" />} />
              Label
            </>
          }
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderStyle="dashed"
            borderWidth="$1"
            borderColor="$warning"
            width="100%"
            height="150px"
            backgroundColor="$warning-subdued"
          >
            <Text
              textAlign="center"
              color="$warning"
              fontSize="$s"
              lineHeight="$m"
            >
              Replace me with your content tab 1
            </Text>
          </Box>
        </Tabs.Item>
        <Tabs.Item label="Label">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderStyle="dashed"
            borderWidth="$1"
            borderColor="$warning"
            width="100%"
            height="150px"
            backgroundColor="$warning-subdued"
          >
            <Text
              textAlign="center"
              color="$warning"
              fontSize="$s"
              lineHeight="$m"
            >
              Replace me with your content tab 2
            </Text>
          </Box>
        </Tabs.Item>
      </>
    ),
  },
};
