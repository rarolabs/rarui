import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { ArrowLineRightIcon } from "@rarui/icons";
import { Icon } from "@rarui-react/icon";
import { Button } from "./Button";
import docs from "./button.docs.json";

const meta: Meta<typeof Button> = {
  title: "Atomic/Button",
  component: Button,
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { type: "text" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const basic: Story = {
  args: {
    appearance: "brand",
    children: (
      <>
        Label
        <Icon
          source={<ArrowLineRightIcon size="medium" />}
          color="$currentColor"
        />
      </>
    ),
  },
};

export const large: Story = {
  args: {
    children: (
      <>
        Label
        <Icon
          source={<ArrowLineRightIcon size="medium" />}
          color="$currentColor"
        />
      </>
    ),
    size: "large",
    appearance: "brand",
  },
};

export const medium: Story = {
  args: {
    children: (
      <>
        Label
        <Icon
          source={<ArrowLineRightIcon size="medium" />}
          color="$currentColor"
        />
      </>
    ),
    size: "medium",
    appearance: "brand",
  },
};

export const small: Story = {
  args: {
    children: (
      <>
        Label
        <Icon
          source={<ArrowLineRightIcon size="medium" />}
          color="$currentColor"
        />
      </>
    ),
    size: "small",
    appearance: "brand",
  },
};

export const disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        Label
        <Icon
          source={<ArrowLineRightIcon size="medium" />}
          color="$currentColor"
        />
      </>
    ),
  },
};

export const asLink = {
  args: {
    as: "a",
    children: "Button as anchor",
    href: "https://www.google.com.br",
    target: "_blank",
  },
};

export const outlined: Story = {
  args: {
    children: (
      <>
        Label
        <Icon
          source={<ArrowLineRightIcon size="medium" />}
          color="$currentColor"
        />
      </>
    ),
    variant: "outlined",
    appearance: "success",
  },
};

export const solid: Story = {
  args: {
    children: (
      <>
        Label
        <Icon
          source={<ArrowLineRightIcon size="medium" />}
          color="$currentColor"
        />
      </>
    ),
    variant: "solid",
    appearance: "success",
  },
};

export const text: Story = {
  args: {
    children: (
      <>
        Label
        <Icon
          source={<ArrowLineRightIcon size="medium" />}
          color="$currentColor"
        />
      </>
    ),
    variant: "text",
    appearance: "success",
  },
};

export const tonal: Story = {
  args: {
    children: (
      <>
        Label
        <Icon
          source={<ArrowLineRightIcon size="medium" />}
          color="$currentColor"
        />
      </>
    ),
    variant: "tonal",
    appearance: "success",
  },
};
