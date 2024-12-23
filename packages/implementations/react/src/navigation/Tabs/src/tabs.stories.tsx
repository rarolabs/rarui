import React, { useState } from "react";
import flattenChildren from "react-keyed-flatten-children";
import { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { SentimentSatisfiedOutlinedIcon } from "@rarui/icons";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";
import { Title } from "@rarui-react/title";
import { Icon } from "@rarui-react/icon";
import { Button } from "@rarui-react/button";

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
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderStyle="dashed"
            borderWidth="$1"
            borderColor="$warning"
            borderRadius="$2xs"
            gap="$3xs"
            width="100%"
            height="150px"
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
        </Tabs.Item>
        <Tabs.Item label="Label">
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
            height="150px"
            minWidth="260px"
            backgroundColor="$warning-subdued"
          >
            <Title as="h6" textAlign="center" color="$warning">
              ❖ Slot 2
            </Title>
            <Text fontSize="$s" textAlign="center" color="$warning">
              Substitua por Componente
            </Text>
          </Box>
        </Tabs.Item>
      </>
    ),
  },
};

export const withExternalTabSelection: Story = {
  render: () => {
    const [currentTab, setCurrentTab] = useState(0);
    return (
      <>
        <Box display="flex" justifyContent="space-around" marginBottom="$s">
          <Button
            size="small"
            variant="tonal"
            appearance="neutral"
            onClick={() => setCurrentTab(0)}
          >
            Go to Tab 1
          </Button>
          <Button
            size="small"
            variant="tonal"
            appearance="neutral"
            onClick={() => setCurrentTab(1)}
          >
            Go to Tab 2
          </Button>
          <Button
            size="small"
            variant="tonal"
            appearance="neutral"
            onClick={() => setCurrentTab(2)}
          >
            Go to Tab 3
          </Button>
        </Box>
        <Tabs selectedTab={currentTab}>
          <Tabs.Item label="Tab 1">
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
              height="150px"
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
          </Tabs.Item>
          <Tabs.Item label="Tab 2">
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
              height="150px"
              minWidth="260px"
              backgroundColor="$warning-subdued"
            >
              <Title as="h6" textAlign="center" color="$warning">
                ❖ Slot 2
              </Title>
              <Text fontSize="$s" textAlign="center" color="$warning">
                Substitua por Componente
              </Text>
            </Box>
          </Tabs.Item>
          <Tabs.Item label="Tab 3">
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
              height="150px"
              minWidth="260px"
              backgroundColor="$warning-subdued"
            >
              <Title as="h6" textAlign="center" color="$warning">
                ❖ Slot 3
              </Title>
              <Text fontSize="$s" textAlign="center" color="$warning">
                Substitua por Componente
              </Text>
            </Box>
          </Tabs.Item>
        </Tabs>
      </>
    );
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
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderStyle="dashed"
            borderWidth="$1"
            borderColor="$warning"
            borderRadius="$2xs"
            gap="$3xs"
            width="100%"
            height="150px"
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
        </Tabs.Item>
        <Tabs.Item label="Label">
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
            height="150px"
            minWidth="260px"
            backgroundColor="$warning-subdued"
          >
            <Title as="h6" textAlign="center" color="$warning">
              ❖ Slot 2
            </Title>
            <Text fontSize="$s" textAlign="center" color="$warning">
              Substitua por Componente
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
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderStyle="dashed"
            borderWidth="$1"
            borderColor="$warning"
            borderRadius="$2xs"
            gap="$3xs"
            width="100%"
            height="150px"
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
        </Tabs.Item>
        <Tabs.Item label="Label">
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
            height="150px"
            minWidth="260px"
            backgroundColor="$warning-subdued"
          >
            <Title as="h6" textAlign="center" color="$warning">
              ❖ Slot 2
            </Title>
            <Text fontSize="$s" textAlign="center" color="$warning">
              Substitua por Componente
            </Text>
          </Box>
        </Tabs.Item>
      </>
    ),
  },
};
