import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { CheckIcon, SentimentSatisfiedOutlinedIcon } from "@rarui/icons";
import { Icon } from "@rarui-react/icon";

import { Stepper } from "./Stepper";
import { Step } from "./components";

import docs from "./stepper.docs.json";

const meta: Meta = {
  title: "Composite/Stepper",
  component: Stepper,
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;

const containerDecorator = (StoryComponent: React.FC) => (
  <div style={{ height: "400px" }}>
    <StoryComponent />
  </div>
);

type Story = StoryObj<typeof Stepper>;

export const basic: Story = {
  args: {
    children: (
      <>
        <Step>1</Step>
        <Step active>2</Step>
        <Step done>3</Step>
      </>
    ),
  },
};

export const WithIcons: Story = {
  args: {
    children: (
      <>
        <Step>
          <Icon source={<SentimentSatisfiedOutlinedIcon size="medium" />} />
        </Step>
        <Step active>
          <Icon source={<SentimentSatisfiedOutlinedIcon size="medium" />} />
        </Step>
        <Step done>
          <Icon source={<CheckIcon size="medium" />} />
        </Step>
      </>
    ),
  },
};

export const WithTitle: Story = {
  args: {
    children: (
      <>
        <Step title="Inactive">1</Step>
        <Step active title="Active">
          2
        </Step>
        <Step done title="Done">
          3
        </Step>
      </>
    ),
  },
};

export const WithTitleAndDescription: Story = {
  args: {
    children: (
      <>
        <Step title="Done" description="Description text">
          1
        </Step>
        <Step title="Done" description="Description text">
          2
        </Step>
        <Step active title="Active" description="Description text">
          3
        </Step>
        <Step title="Inactive" description="Description text">
          4
        </Step>
        <Step done title="Inactive" description="Description text">
          5
        </Step>
      </>
    ),
  },
};

export const VerticalWithNumbers: Story = {
  decorators: [containerDecorator],

  args: {
    direction: "vertical",
    children: (
      <>
        <Step>1</Step>
        <Step active>2</Step>
        <Step done>3</Step>
      </>
    ),
  },
};

export const VerticalWithIcons: Story = {
  decorators: [containerDecorator],
  args: {
    direction: "vertical",
    children: (
      <>
        <Step>
          <Icon source={<SentimentSatisfiedOutlinedIcon size="medium" />} />
        </Step>
        <Step active>
          <Icon source={<SentimentSatisfiedOutlinedIcon size="medium" />} />
        </Step>
        <Step done>
          <Icon source={<CheckIcon size="medium" />} />
        </Step>
      </>
    ),
  },
};

export const VerticalWithTitle: Story = {
  decorators: [containerDecorator],
  args: {
    direction: "vertical",
    children: (
      <>
        <Step title="Inactive">1</Step>
        <Step active title="Active">
          2
        </Step>
        <Step done title="Done">
          3
        </Step>
      </>
    ),
  },
};

export const VerticalWithTitleAndDescription: Story = {
  decorators: [containerDecorator],
  args: {
    direction: "vertical",
    children: (
      <>
        <Step title="Done" description="Description text">
          1
        </Step>
        <Step done title="Done" description="Description text">
          2
        </Step>
        <Step active title="Active" description="Description text">
          3
        </Step>
        <Step title="Inactive" description="Description text">
          4
        </Step>
        <Step done title="Inactive" description="Description text">
          5
        </Step>
      </>
    ),
  },
};
