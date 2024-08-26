import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { argTypesConvert } from ".storybook/utils";

import { Pagination } from "./Pagination";
import docs from "./pagination.docs.json";

const meta: Meta<typeof Pagination> = {
  title: "Composite/Pagination",
  component: Pagination,
  argTypes: argTypesConvert(docs),
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const basic: Story = {
  render: (args) => {
    const [{ activePage }, updateArgs] = useArgs();
    const onPageChange = (page: number) => updateArgs({ activePage: page });
    return (
      <Pagination
        {...args}
        onPageChange={onPageChange}
        activePage={activePage}
      />
    );
  },
  args: {
    pageCount: 20,
    activePage: 2,
  },
};

export const large: Story = {
  args: {
    pageCount: 20,
    activePage: 1,
    size: "large",
  },
};

export const small: Story = {
  args: {
    pageCount: 20,
    activePage: 1,
    size: "small",
  },
};

export const dot: Story = {
  args: {
    pageCount: 20,
    activePage: 1,
    size: "dot",
  },
};

export const noNumbers: Story = {
  args: {
    pageCount: 20,
    activePage: 1,
    showNumbers: false,
  },
};

export const nowArrows: Story = {
  args: {
    pageCount: 20,
    activePage: 1,
    showArrows: false,
  },
};

export const stressed: Story = {
  args: {
    pageCount: 3422,
    activePage: 2033,
  },
};

export const dotsLeft: Story = {
  args: {
    pageCount: 50,
    activePage: 48,
  },
};

export const dotsRight: Story = {
  args: {
    pageCount: 48,
    activePage: 2,
  },
};
