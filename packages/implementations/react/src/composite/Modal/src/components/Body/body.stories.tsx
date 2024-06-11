import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { argTypesConvert } from ".storybook/utils";
import { Text } from "@rarui-react/text";
import { Button } from "@rarui-react/button";
import { Box } from "@rarui-react/box";

import { Modal } from "../../Modal";
import docs from "../../modal.docs.json";

const bodyDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Modal.Body",
);

const meta: Meta<typeof Modal.Body> = {
  title: "Composite/Modal/Body",
  component: Modal.Body,
  render: (args) => {
    const [{ open }, updateArgs] = useArgs();
    const handleClose = () => updateArgs({ open: !open });
    return (
      <Box minHeight={open ? "500px" : "auto"}>
        <Button onClick={handleClose}>Open</Button>
        <Modal open={open} onDismiss={handleClose}>
          <Modal.Header title="Modal title" subtitle="Description" />
          <Modal.Body {...args} />
          <Modal.Footer>
            <Button appearance="neutral" variant="outlined" size="medium">
              Secondary action
            </Button>
            <Button appearance="brand" size="medium">
              Main action
            </Button>
          </Modal.Footer>
        </Modal>
      </Box>
    );
  },
  argTypes: {
    ...argTypesConvert(bodyDocs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal.Body>;

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
        minHeight="200px"
      >
        <Text textAlign="center" color="$warning">
          Replace me with your content
        </Text>
      </Box>
    ),
  },
};
