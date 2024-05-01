import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";

import { Button } from "@rarui-react/button";
import { Box } from "@rarui-react/box";
import docs from "../../toast.docs.json";

import { Toast } from "../../Toast";
import { useToast } from "../../hooks";

const providerdDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Toast.Provider",
);

const meta: Meta<typeof Toast.Provider> = {
  title: "Atomic/Toast.Provider",
  component: Toast.Provider,
  argTypes: {
    ...argTypesConvert(providerdDocs),
    children: { control: { type: "text" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toast.Provider>;

export default meta;

type Story = StoryObj<typeof Toast.Provider>;

export const basic: Story = {
  decorators: [
    (StoryComponent, { args }) => (
      <Toast.Provider {...args}>
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
