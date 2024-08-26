import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Text } from "@rarui-react/text";
import { Box } from "@rarui-react/box";
import { Link } from "@rarui-react/link";
import { Icon } from "@rarui-react/icon";
import { SentimentSatisfiedFilledIcon } from "@rarui/icons";

import React from "react";
import { Banner } from "./Banner";
import docs from "./banner.docs.json";

const meta = {
  title: "Atomic/Banner",
  component: Banner,
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof Banner>;

export const basic: Story = {
  args: {
    appearance: "brand",
    children: (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="$4xs"
        width="100%"
      >
        <Icon source={<SentimentSatisfiedFilledIcon size={20} />} />
        <Text>Banner description with</Text>
        <Link as="a" appearance="neutral" href="https://www.google.com.br">
          link
        </Link>
      </Box>
    ),
  },
};

export const info: Story = {
  args: {
    appearance: "info",
    children: (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="$4xs"
        width="100%"
      >
        <Icon source={<SentimentSatisfiedFilledIcon size={20} />} />
        <Text>Banner description with</Text>
        <Link as="a" appearance="brand" href="https://www.google.com.br">
          link
        </Link>
      </Box>
    ),
  },
};

export const neutral: Story = {
  args: {
    appearance: "neutral",
    children: (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="$4xs"
        width="100%"
      >
        <Icon source={<SentimentSatisfiedFilledIcon size={20} />} />
        <Text>Banner description with</Text>
        <Link as="a" appearance="brand" href="https://www.google.com.br">
          link
        </Link>
      </Box>
    ),
  },
};

export const inverted: Story = {
  args: {
    appearance: "inverted",
    children: (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="$4xs"
        width="100%"
      >
        <Icon source={<SentimentSatisfiedFilledIcon size={20} />} />
        <Text>Banner description with</Text>
        <Link as="a" appearance="inverted" href="https://www.google.com.br">
          link
        </Link>
      </Box>
    ),
  },
};

export const warning: Story = {
  args: {
    appearance: "warning",
    children: (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="$4xs"
        width="100%"
      >
        <Icon source={<SentimentSatisfiedFilledIcon size={20} />} />
        <Text>Banner description with</Text>
        <Link as="a" appearance="inverted" href="https://www.google.com.br">
          link
        </Link>
      </Box>
    ),
  },
};

export const error: Story = {
  args: {
    appearance: "error",
    children: (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="$4xs"
        width="100%"
      >
        <Icon source={<SentimentSatisfiedFilledIcon size={20} />} />
        <Text>Banner description with</Text>
        <Link as="a" appearance="inverted" href="https://www.google.com.br">
          link
        </Link>
      </Box>
    ),
  },
};

export const longText: Story = {
  args: {
    appearance: "info",
    children: (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="$4xs"
        width="100%"
        padding="$xs"
      >
        <Text textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          lobortis efficitur condimentum. Donec dignissim ac nibh id elementum.
          Nam condimentum purus commodo leo hendrerit tincidunt. Nam non mi in
          massa gravida tincidunt commodo quis enim. Quisque id sapien est.
          Pellentesque sed sollicitudin diam, non pulvinar magna. Mauris
          vulputate nibh sit amet ligula tincidunt accumsan.
        </Text>
      </Box>
    ),
  },
};
