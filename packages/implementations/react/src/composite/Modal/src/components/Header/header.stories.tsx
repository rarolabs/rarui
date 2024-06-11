import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { argTypesConvert } from ".storybook/utils";
import { Button } from "@rarui-react/button";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";

import { Modal } from "../../Modal";
import docs from "../../modal.docs.json";

const modalDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Modal.Header",
);

const meta: Meta<typeof Modal.Header> = {
  title: "Composite/Modal/Header",
  component: Modal.Header,
  render: (args) => {
    const [{ open }, updateArgs] = useArgs();
    const handleClose = () => updateArgs({ open: !open });
    return (
      <Box minHeight={open ? "500px" : "auto"}>
        <Button onClick={handleClose}>Open</Button>
        <Modal open={open} onDismiss={handleClose}>
          <Modal.Header {...args} />
          <Modal.Body>
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
          </Modal.Body>
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
    ...argTypesConvert(modalDocs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal.Header>;

export const basic: Story = {
  args: {
    title: "Modal title",
    subtitle: "Description",
  },
};
