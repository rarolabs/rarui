import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { Box } from "@rarui-react/box";
import { Button } from "@rarui-react/button";
import { Text } from "@rarui-react/text";
import { argTypesConvert } from ".storybook/utils";

import { Sidebar } from "./Sidebar";
import docs from "./sidebar.docs.json";

const meta: Meta<typeof Sidebar> = {
  title: "Composite/Sidebar",
  component: Sidebar,
  argTypes: {
    children: { control: { disable: true } },
    ...argTypesConvert(docs),
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const basic: Story = {
  render: (args) => {
    const [{ open }, updateArgs] = useArgs();
    const handleClose = () => updateArgs({ open: !open });
    return (
      <>
        <Button onClick={handleClose}>Open</Button>
        <Sidebar {...args} onRemove={handleClose} open={open} />
      </>
    );
  },
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
