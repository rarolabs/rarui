import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import {
  MailOutlinedIcon,
  FileCopyOutlinedIcon,
  CreditCardOutlinedIcon,
} from "@rarui/icons";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";
import { Icon } from "@rarui-react/icon";

import { Input } from "./Input";
import docs from "./input.docs.json";

const meta = {
  title: "Atomic/Input",
  component: Input,
  argTypes: {
    ...argTypesConvert(docs),
    leadingStart: { control: { disable: true } },
    leadingEnd: { control: { disable: true } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const basic: Story = {
  args: {
    placeholder: "Placeholder",
  },
};

export const disabled: Story = {
  args: {
    placeholder: "Placeholder",
    disabled: true,
    leadingEnd: (
      <Icon
        color="$currentColor"
        source={<CreditCardOutlinedIcon size="small" />}
      />
    ),
  },
};

export const success: Story = {
  args: {
    placeholder: "Placeholder",
    appearance: "success",
    leadingEnd: (
      <Icon
        color="$currentColor"
        source={<CreditCardOutlinedIcon size="small" />}
      />
    ),
  },
};

export const error: Story = {
  args: {
    placeholder: "Placeholder",
    appearance: "error",
    leadingEnd: (
      <Icon
        color="$currentColor"
        source={<CreditCardOutlinedIcon size="small" />}
      />
    ),
  },
};

export const large: Story = {
  args: {
    placeholder: "Placeholder",
    size: "large",
    leadingEnd: (
      <Icon
        color="$currentColor"
        source={<CreditCardOutlinedIcon size="small" />}
      />
    ),
  },
};

export const medium: Story = {
  args: {
    placeholder: "Placeholder",
    size: "medium",
    leadingEnd: (
      <Icon
        color="$currentColor"
        source={<CreditCardOutlinedIcon size="small" />}
      />
    ),
  },
};

export const small: Story = {
  args: {
    placeholder: "Placeholder",
    size: "small",
    leadingEnd: (
      <Icon
        color="$currentColor"
        source={<CreditCardOutlinedIcon size="small" />}
      />
    ),
  },
};

export const withLeading: Story = {
  args: {
    placeholder: "Placeholder",
    leadingStart: (
      <Icon color="$currentColor" source={<MailOutlinedIcon size="small" />} />
    ),
  },
};

export const withLeadings: Story = {
  args: {
    placeholder: "Placeholder",
    leadingStart: (
      <Icon color="$currentColor" source={<MailOutlinedIcon size="small" />} />
    ),
    leadingEnd: (
      <Box
        display="flex"
        alignItems="center"
        gap="$3xs"
        backgroundColor="$transparent"
        color="$currentColor"
        cursor="pointer"
        height="100%"
      >
        <Icon
          color="$currentColor"
          source={<FileCopyOutlinedIcon size="small" />}
        />
        <Text>Copy</Text>
      </Box>
    ),
  },
};
