import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { argTypesConvert } from ".storybook/utils";
import { Button } from "@rarui-react/button";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";

import { Modal } from "./Modal";
import { ModalProps } from "./modal.types";
import docs from "./modal.docs.json";

const meta: Meta = {
  title: "Composite/Modal",
  component: Modal,
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const basic: Story = {
  render: (args) => {
    const [{ open }, updateArgs] = useArgs();
    const handleClose = () => updateArgs({ open: !open });
    return (
      <Box minHeight={open ? "500px" : "auto"}>
        <Button onClick={handleClose}>Open</Button>
        <Modal {...args} open={open} onDismiss={handleClose} />
      </Box>
    );
  },
  args: {
    children: (
      <>
        <Modal.Header title="Modal title" subtitle="Description" />
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
      </>
    ),
  },
};

const render = (args: ModalProps) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen((prevState) => !prevState);
  return (
    <Box minHeight={open ? "500px" : "auto"}>
      <Button onClick={handleClose}>Open</Button>
      <Modal {...args} open={open} onDismiss={handleClose} />
    </Box>
  );
};

export const WithHeader: Story = {
  render,
  args: {
    children: (
      <>
        <Modal.Header title="Modal title" />
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
      </>
    ),
  },
};

export const WithFooterAndHeader: Story = {
  render,
  args: {
    children: (
      <>
        <Modal.Header title="Modal title" />
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
          <Button appearance="brand" size="medium">
            Main action
          </Button>
        </Modal.Footer>
      </>
    ),
  },
};
