import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { argTypesConvert } from ".storybook/utils";
import { Button } from "@rarui-react/button";
import { Checkbox } from "@rarui-react/checkbox";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";
import { Icon } from "@rarui-react/icon";
import { ArrowLineRightIcon } from "@rarui/icons";
import { Title } from "@rarui-react/title";

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
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderStyle="dashed"
            borderWidth="$1"
            borderColor="$warning"
            borderRadius="$2xs"
            gap="$3xs"
            width="100%"
            minHeight="260px"
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
        <Modal.Footer>
          <Box
            gap="$3xs"
            width="100%"
            display="flex"
            justifyContent="space-between"
          >
            <Checkbox id="rarui-checkbox" label="I agree to something" />
            <Box gap="$3xs" display="flex">
              <Button appearance="neutral" variant="outlined" size="medium">
                Secondary action
              </Button>
              <Button appearance="brand" size="medium">
                Main action
                <Icon source={<ArrowLineRightIcon size="small" />} />
              </Button>
            </Box>
          </Box>
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
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderStyle="dashed"
            borderWidth="$1"
            borderColor="$warning"
            borderRadius="$2xs"
            gap="$3xs"
            width="100%"
            minHeight="32px"
            padding="$s"
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
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderStyle="dashed"
            borderWidth="$1"
            borderColor="$warning"
            borderRadius="$2xs"
            gap="$3xs"
            width="100%"
            minHeight="260px"
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
        <Modal.Footer>
          <Button appearance="brand" size="medium">
            Main action
            <Icon source={<ArrowLineRightIcon size="small" />} />
          </Button>
        </Modal.Footer>
      </>
    ),
  },
};
export const WithFullWidth: Story = {
  render,
  args: {
    maxWidth: "stretch",
    children: (
      <>
        <Modal.Header title="Modal title" />
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
            minHeight="100px"
            backgroundColor="$warning-subdued"
            padding="$s"
          >
            <Title as="h6" textAlign="center" color="$warning">
              ❖ Slot
            </Title>
            <Text fontSize="$s" textAlign="center" color="$warning">
              Substitua por Componente
            </Text>
          </Box>
        </Modal.Body>
        <Modal.Footer>
          <Box
            gap="$3xs"
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box flexDirection="column" gap="$3xs" display="flex">
              <Button full appearance="brand" size="medium">
                Main action
                <Icon source={<ArrowLineRightIcon size="small" />} />
              </Button>
              <Button
                full
                appearance="neutral"
                variant="outlined"
                size="medium"
              >
                Secondary action
              </Button>
            </Box>
          </Box>
        </Modal.Footer>
      </>
    ),
  },
};
