import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { argTypesConvert } from ".storybook/utils";
import { Button } from "@rarui-react/button";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";
import { Title } from "@rarui-react/title";

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
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              borderStyle="dashed"
              borderWidth="$1"
              borderColor="$warning"
              borderRadius="$2xs"
              gap="$3xs"
              width="100%"
              minHeight="200px"
              backgroundColor="$warning-subdued"
            >
              <Title as="h6" textAlign="center" color="$warning">
                ❖ Slot
              </Title>
              <Text fontSize="$s" textAlign="center" color="$warning">
                Substitua por Componente
              </Text>
            </Box>
          </Modal.Body>
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
