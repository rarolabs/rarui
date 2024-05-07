import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";
import { Button } from "@rarui-react/button";

import { Tooltip } from "../../Tooltip";
import docs from "../../tooltip.docs.json";

const footerDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Tooltip.Footer",
);

const meta = {
  title: "Atomic/Tooltip.Footer",
  component: Tooltip.Footer,
  render: (args) => (
    <Box display="flex" justifyContent="center">
      <Tooltip
        content={
          <>
            <Tooltip.Header
              closeable
              title="Title lorem ipsum"
              subtitle="Description lorem ipsum dolor"
            />
            <Tooltip.Body>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderStyle="dashed"
                borderWidth="$1"
                borderColor="$warning"
                width="100%"
                height="150px"
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
            </Tooltip.Body>
            <Tooltip.Footer {...args} />
          </>
        }
      >
        <Text color="$primary">Hover</Text>
      </Tooltip>
    </Box>
  ),
  argTypes: {
    ...argTypesConvert(footerDocs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip.Footer>;

export default meta;
type Story = StoryObj<typeof Tooltip.Footer>;

export const basic: Story = {
  args: {
    children: (
      <Button appearance="neutral" variant="text" size="medium">
        Action
      </Button>
    ),
  },
};
