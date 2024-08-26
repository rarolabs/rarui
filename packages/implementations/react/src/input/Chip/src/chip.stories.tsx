import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Icon } from "@rarui-react/icon";
import { Text } from "@rarui-react/text";
import { CloudOutlinedIcon } from "@rarui/icons";
import docs from "./chip.docs.json";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Atomic/Chip",
  component: Chip,
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { type: "text" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};

export const Pill: Story = {
  args: {
    children: "Label",
    pill: true,
  },
};

export const Closeable: Story = {
  args: {
    children: "Label",
    closeable: true,
    size: "small",
    padding: "$small",
  },
};

export const Disabled: Story = {
  args: {
    children: "label",
    closeable: true,
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    padding: "$medium",
    children: (
      <>
        <Icon source={<CloudOutlinedIcon size="small" />} />
        <Text color="$primary">Chip</Text>
      </>
    ),
  },
};
