import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";

import { Input } from "../../Input";
import docs from "../../input.docs.json";

const passwordDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Input.Search",
);

const meta = {
  title: "Atomic/Input/Search",
  component: Input.Search,
  argTypes: {
    ...argTypesConvert(passwordDocs),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input.Search>;

export default meta;
type Story = StoryObj<typeof Input.Search>;

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
