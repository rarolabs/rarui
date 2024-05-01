import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";

import { Password } from "./Password";
import docs from "../../input.docs.json";

const passwordDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Input.Password",
);

const meta = {
  title: "Atomic/Input.Password",
  component: Password,
  argTypes: {
    ...argTypesConvert(passwordDocs),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Password>;

export default meta;
type Story = StoryObj<typeof Password>;

export const basic: Story = {
  args: {
    placeholder: "Placeholder",
  },
};

export const success: Story = {
  args: {
    placeholder: "Placeholder",
    appearance: "success",
  },
};

export const error: Story = {
  args: {
    placeholder: "Placeholder",
    appearance: "error",
  },
};

export const large: Story = {
  args: {
    placeholder: "Placeholder",
    size: "large",
  },
};

export const medium: Story = {
  args: {
    placeholder: "Placeholder",
    size: "medium",
  },
};

export const small: Story = {
  args: {
    placeholder: "Placeholder",
    size: "small",
  },
};
