import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";

import { Button } from "@rarui-react/button";
import { Box } from "@rarui-react/box";

import { Toast } from "./Toast";
import { useToast } from "./hooks";
import docs from "./toast.docs.json";

console.log(" argTypesConvert(docs),", argTypesConvert(docs));

const meta: Meta<typeof Toast> = {
  title: "Atomic/Toast",
  component: Toast,
  argTypes: argTypesConvert(docs),
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof Toast>;

export const basic: Story = {
  args: { title: "Title Text", autoClose: false },
};

export const usage: Story = {
  decorators: [
    (StoryComponent) => (
      <Toast.Provider placement="bottomRight">
        <StoryComponent />
      </Toast.Provider>
    ),
  ],
  render: () => {
    const { addToast } = useToast();
    return (
      <Box height="64vh" maxHeight="64vh">
        <Button
          onClick={() =>
            addToast({
              title: "Hello!",
              appearance: "info",
              variant: "solid",
            })
          }
        >
          Open Toast
        </Button>
      </Box>
    );
  },
};
