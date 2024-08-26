import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { StorefrontIcon } from "@rarui/icons";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";
import { Title } from "@rarui-react/title";

import { Accordion } from "../../Accordion";
import docs from "../../accordion.docs.json";

const itemDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Accordion.Item",
);

const meta: Meta<typeof Accordion.Item> = {
  title: "Composite/Accordion/Item",
  component: Accordion.Item,
  render: (args) => (
    <Accordion>
      <Accordion.Item {...args} />
    </Accordion>
  ),
  argTypes: {
    ...argTypesConvert(itemDocs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion.Item>;

export const basic: Story = {
  args: {
    index: "0",
    children: (
      <>
        <Accordion.Header
          title="Title one"
          subtitle="Caption one"
          icon={<StorefrontIcon size={18} />}
        />
        <Accordion.Body>
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
        </Accordion.Body>
      </>
    ),
  },
};
