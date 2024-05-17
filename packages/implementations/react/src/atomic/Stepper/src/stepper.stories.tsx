import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";

import { Stepper } from "./Stepper";
import { Step } from "./components/Step";

import docs from "./stepper.docs.json";

const meta: Meta = {
  title: "Atomic/Stepper",
  component: Stepper,
  argTypes: {
    ...argTypesConvert(docs)
  },
  tags: ["autodocs"]
};

export default meta;

const containerDecorator = (StoryComponent: React.FC) => (
  <div style={{ height: "400px" }}>
    <StoryComponent />
  </div>
);

type Story = StoryObj<typeof Stepper>;

export const WithNumbers: Story = {
  args: {
    children: (
      <>
        <Step>1</Step>
        <Step active>2</Step>
        <Step done>3</Step>
      </>
    )
  }
};

export const WithIcons: Story = {
  args: {
    children: (
      <>
        <Step done>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_156_38762)">
              <path
                d="M9.00063 16.1703L5.53063 12.7003C5.14063 12.3103 4.51063 12.3103 4.12062 12.7003C3.73063 13.0903 3.73063 13.7203 4.12062 14.1103L8.30063 18.2903C8.69063 18.6803 9.32063 18.6803 9.71063 18.2903L20.2906 7.71031C20.6806 7.32031 20.6806 6.69031 20.2906 6.30031C19.9006 5.91031 19.2706 5.91031 18.8806 6.30031L9.00063 16.1703Z"
                fill="rgba(235, 255, 238, 1)"
              />
            </g>
            <defs>
              <clipPath id="clip0_156_38762">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Step>
        <Step active>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_156_39313)">
              <path
                d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"
                fill="#68CEFD"
              />
              <path
                d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"
                fill="#68CEFD"
              />
              <path
                d="M12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.75 15.19 13.48 16 12 16ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                fill="#68CEFD"
              />
            </g>
            <defs>
              <clipPath id="clip0_156_39313">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Step>
        <Step>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_156_39313)">
              <path
                d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"
                fill="rgba(0, 0, 0, 0.2)"
              />
              <path
                d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"
                fill="rgba(0, 0, 0, 0.2)"
              />
              <path
                d="M12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.75 15.19 13.48 16 12 16ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                fill="rgba(0, 0, 0, 0.2)"
              />
            </g>
            <defs>
              <clipPath id="clip0_156_39313">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Step>
      </>
    )
  }
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
    )
  }
};

export const WithTitleAndDescription: Story = {
  args: {
    children: (
      <>
        <Step done title="Done" description="Description text">
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
        <Step title="Inactive" description="Description text">
          5
        </Step>
      </>
    )
  }
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
    )
  }
};

export const VerticalWithIcons: Story = {
  decorators: [containerDecorator],
  args: {
    direction: "vertical",
    children: (
      <>
        <Step done>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_156_38762)">
              <path
                d="M9.00063 16.1703L5.53063 12.7003C5.14063 12.3103 4.51063 12.3103 4.12062 12.7003C3.73063 13.0903 3.73063 13.7203 4.12062 14.1103L8.30063 18.2903C8.69063 18.6803 9.32063 18.6803 9.71063 18.2903L20.2906 7.71031C20.6806 7.32031 20.6806 6.69031 20.2906 6.30031C19.9006 5.91031 19.2706 5.91031 18.8806 6.30031L9.00063 16.1703Z"
                fill="rgba(235, 255, 238, 1)"
              />
            </g>
            <defs>
              <clipPath id="clip0_156_38762">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Step>
        <Step active>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_156_39313)">
              <path
                d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"
                fill="#68CEFD"
              />
              <path
                d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"
                fill="#68CEFD"
              />
              <path
                d="M12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.75 15.19 13.48 16 12 16ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                fill="#68CEFD"
              />
            </g>
            <defs>
              <clipPath id="clip0_156_39313">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Step>
        <Step>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_156_39313)">
              <path
                d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"
                fill="rgba(0, 0, 0, 0.2)"
              />
              <path
                d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"
                fill="rgba(0, 0, 0, 0.2)"
              />
              <path
                d="M12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.75 15.19 13.48 16 12 16ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                fill="rgba(0, 0, 0, 0.2)"
              />
            </g>
            <defs>
              <clipPath id="clip0_156_39313">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Step>
      </>
    )
  }
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
    )
  }
};

export const VerticalWithTitleAndDescription: Story = {
  decorators: [containerDecorator],
  args: {
    direction: "vertical",
    children: (
      <>
        <Step done title="Done" description="Description text">
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
        <Step title="Inactive" description="Description text">
          5
        </Step>
      </>
    )
  }
};
