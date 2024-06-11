import React from "react";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Button } from "@rarui-react/button";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";

import { Modal } from "../../Modal";
import docs from "../../modal.docs.json";

const itemDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Modal.Footer",
);

const meta: Meta<typeof Modal.Footer> = {
  title: "Composite/Modal/Footer",
  component: Modal.Footer,
  render: (args) => {
    const [{ open }, updateArgs] = useArgs();
    const handleClose = () => updateArgs({ open: !open });
    return (
      <Box minHeight={open ? "500px" : "auto"}>
        <Button onClick={handleClose}>Open</Button>
        <Modal open={open} onDismiss={handleClose}>
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
          <Modal.Footer {...args} />
        </Modal>
      </Box>
    );
  },
  argTypes: {
    ...argTypesConvert(itemDocs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal.Footer>;

export const basic: Story = {
  args: {
    children: (
      <>
        <Button appearance="neutral" variant="outlined" size="medium">
          Secondary action
        </Button>
        <Button appearance="brand" size="medium">
          Main action
        </Button>
      </>
    ),
  },
};
