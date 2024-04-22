import React, { useContext } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Button } from "@rarui-react/button";
import docs from "./toast.docs.json";
import { Toast } from "./Toast";
import { ToastContext, ToastProvider } from "./context/ToastProvider";
import ToastContainer from "./components/ToastContainer";

const meta: Meta<typeof Toast> = {
  title: "Atomic/Toast",
  component: Toast,
  argTypes: argTypesConvert(docs),
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: { children: "Texto qualquer" },
};

export const Use: Story = {
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  render: () => {
    const { createToast } = useContext(ToastContext);
    return (
      <div>
        <Button
          onClick={() => createToast({ message: "Hello!", variant: "neutral" })}
        >
          Open Toast
        </Button>
        <ToastContainer size="small" />
      </div>
    );
  },
};
