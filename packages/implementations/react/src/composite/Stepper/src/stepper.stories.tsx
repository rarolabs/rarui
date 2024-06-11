import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { CheckIcon, SentimentSatisfiedOutlinedIcon } from "@rarui/icons";
import { Icon } from "@rarui-react/icon";
import { Box } from "@rarui-react/box";

import { Stepper } from "./Stepper";

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
  <Box height="400px">
    <StoryComponent />
  </Box>
);

type Story = StoryObj<typeof Stepper>;

export const basic: Story = {
  args: {
    children: (
      <>
        <Stepper.Step>1</Stepper.Step>
        <Stepper.Step active>2</Stepper.Step>
        <Stepper.Step done>3</Stepper.Step>
      </>
    ),
  },
};

export const WithIcons: Story = {
  args: {
    children: (
      <>
        <Stepper.Step>
          <Icon source={<SentimentSatisfiedOutlinedIcon size="medium" />} />
        </Stepper.Step>
        <Stepper.Step active>
          <Icon source={<SentimentSatisfiedOutlinedIcon size="medium" />} />
        </Stepper.Step>
        <Stepper.Step done>
          <Icon source={<CheckIcon size="medium" />} />
        </Stepper.Step>
      </>
    ),
  },
};

export const WithTitle: Story = {
  args: {
    children: (
      <>
        <Stepper.Step title="Inactive">1</Stepper.Step>
        <Stepper.Step active title="Active">
          2
        </Stepper.Step>
        <Stepper.Step done title="Done">
          3
        </Stepper.Step>
      </>
    ),
  },
};

export const WithTitleAndDescription: Story = {
  args: {
    children: (
      <>
        <Stepper.Step title="Done" description="Description text">
          1
        </Stepper.Step>
        <Stepper.Step title="Done" description="Description text">
          2
        </Stepper.Step>
        <Stepper.Step active title="Active" description="Description text">
          3
        </Stepper.Step>
        <Stepper.Step title="Inactive" description="Description text">
          4
        </Stepper.Step>
        <Stepper.Step done title="Inactive" description="Description text">
          5
        </Stepper.Step>
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
        <Stepper.Step>1</Stepper.Step>
        <Stepper.Step active>2</Stepper.Step>
        <Stepper.Step done>3</Stepper.Step>
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
        <Stepper.Step>
          <Icon source={<SentimentSatisfiedOutlinedIcon size="medium" />} />
        </Stepper.Step>
        <Stepper.Step active>
          <Icon source={<SentimentSatisfiedOutlinedIcon size="medium" />} />
        </Stepper.Step>
        <Stepper.Step done>
          <Icon source={<CheckIcon size="medium" />} />
        </Stepper.Step>
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
        <Stepper.Step title="Inactive">1</Stepper.Step>
        <Stepper.Step active title="Active">
          2
        </Stepper.Step>
        <Stepper.Step done title="Done">
          3
        </Stepper.Step>
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
        <Stepper.Step title="Done" description="Description text">
          1
        </Stepper.Step>
        <Stepper.Step done title="Done" description="Description text">
          2
        </Stepper.Step>
        <Stepper.Step active title="Active" description="Description text">
          3
        </Stepper.Step>
        <Stepper.Step title="Inactive" description="Description text">
          4
        </Stepper.Step>
        <Stepper.Step done title="Inactive" description="Description text">
          5
        </Stepper.Step>
      </>
    ),
  },
};
