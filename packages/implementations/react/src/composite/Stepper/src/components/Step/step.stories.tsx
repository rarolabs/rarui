import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { CheckIcon, SentimentSatisfiedOutlinedIcon } from "@rarui/icons";
import { Icon } from "@rarui-react/icon";

import { Step } from "./Step";
import { Stepper } from "../../Stepper";
import docs from "../../stepper.docs.json";

const stepDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Stepper.Step",
);

const meta: Meta = {
  title: "Composite/Stepper.Step",
  component: Step,
  argTypes: {
    ...argTypesConvert(stepDocs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Step>;

export const basic: Story = {
  args: {
    children: 1,
  },
};

export const WithIcon: Story = {
  args: {
    active: true,
    children: (
      <Icon source={<SentimentSatisfiedOutlinedIcon size="medium" />} />
    ),
  },
};

export const WithTitle: Story = {
  args: {
    title: "Inactive",
    children: 1,
  },
};

export const WithTitleAndDescription: Story = {
  args: {
    title: "Done",
    description: "Description text",
    children: 1,
  },
};

export const VerticalWithNumbers: Story = {
  decorators: [
    (StoryComponent) => (
      <Stepper direction="vertical">
        <StoryComponent />
      </Stepper>
    ),
  ],
  args: {
    children: 4,
  },
};

export const VerticalWithIcons: Story = {
  decorators: [
    (StoryComponent) => (
      <Stepper direction="vertical">
        <StoryComponent />
      </Stepper>
    ),
  ],
  args: {
    children: (
      <Icon source={<SentimentSatisfiedOutlinedIcon size="medium" />} />
    ),
  },
};

export const VerticalWithTitle: Story = {
  decorators: [
    (StoryComponent) => (
      <Stepper direction="vertical">
        <StoryComponent />
      </Stepper>
    ),
  ],
  args: {
    title: "Done",
    done: true,
    children: <Icon source={<CheckIcon size="medium" />} />,
  },
};

export const VerticalWithTitleAndDescription: Story = {
  decorators: [
    (StoryComponent) => (
      <Stepper direction="vertical">
        <StoryComponent />
      </Stepper>
    ),
  ],
  args: {
    active: true,
    title: "Active",
    description: "Description text",
    children: (
      <Icon source={<SentimentSatisfiedOutlinedIcon size="medium" />} />
    ),
  },
};
