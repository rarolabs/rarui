import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { argTypesConvert } from ".storybook/utils";
import { Text } from "@rarui-react/text";
import { Button } from "@rarui-react/button";
import { Box } from "@rarui-react/box";
import { Title } from "@rarui-react/title";

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
          <Modal.Body {...args} />
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
    ),
  },
};
