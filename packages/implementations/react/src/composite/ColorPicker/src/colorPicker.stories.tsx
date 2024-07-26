import { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";

import { ColorPicker } from "./ColorPicker";
import docs from "./colorPicker.docs.json";

const meta: Meta = {
  title: "Composite/ColorPicker",
  component: ColorPicker,

  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const basic: Story = {
  args: {
    color: "#FF00FF",
    onChange: (color: any) => console.log({ color }),
  },
};
