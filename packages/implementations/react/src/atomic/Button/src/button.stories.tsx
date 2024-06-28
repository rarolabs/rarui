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
    as: {
      control: { disable: true },
      description:
        "The underlying element to render — either a HTML element name or a React component.",
    },
    children: { control: { type: "text" } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    appearance: "brand",
    children: (
      <>
        Label
        <Icon
          source={<ArrowLineRightIcon size="small" />}
          color="$currentColor"
        />
      </>
    ),
  },
};

export const Large: Story = {
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

export const Medium: Story = {
  args: {
    children: (
      <>
        Label
        <Icon
          source={<ArrowLineRightIcon size="small" />}
          color="$currentColor"
        />
      </>
    ),
    size: "medium",
    appearance: "brand",
  },
};

export const Small: Story = {
  args: {
    children: (
      <>
        Label
        <Icon
          source={<ArrowLineRightIcon size="small" />}
          color="$currentColor"
        />
      </>
    ),
    size: "small",
    appearance: "brand",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        Label
        <Icon
          source={<ArrowLineRightIcon size="small" />}
          color="$currentColor"
        />
      </>
    ),
  },
};

export const AsLink = {
  args: {
    as: "a",
    children: "Button as anchor",
    href: "https://www.google.com.br",
    target: "_blank",
  },
};

export const Outlined: Story = {
  args: {
    children: (
      <>
        Label
        <Icon
          source={<ArrowLineRightIcon size="small" />}
          color="$currentColor"
        />
      </>
    ),
    variant: "outlined",
    appearance: "success",
  },
};

export const Solid: Story = {
  args: {
    children: (
      <>
        Label
        <Icon
          source={<ArrowLineRightIcon size="small" />}
          color="$currentColor"
        />
      </>
    ),
    variant: "solid",
    appearance: "success",
  },
};

export const Text: Story = {
  args: {
    children: (
      <>
        Label
        <Icon
          source={<ArrowLineRightIcon size="small" />}
          color="$currentColor"
        />
      </>
    ),
    variant: "text",
    appearance: "success",
  },
};

export const Tonal: Story = {
  args: {
    children: (
      <>
        Label
        <Icon
          source={<ArrowLineRightIcon size="small" />}
          color="$currentColor"
        />
      </>
    ),
    variant: "tonal",
    appearance: "success",
  },
};
