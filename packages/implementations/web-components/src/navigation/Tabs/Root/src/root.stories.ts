import type { Meta, StoryObj } from "@storybook/html";
import { argTypesConvert, storyGenerator } from ".storybook/utils";
import docs from "./root.docs.json";

import "@rarui/text/src/Text";
import "@rarui/box/src/Box";
import "@rarui/tabs-item/src/Item";
import "./Root";

const { argTypes, Template } = storyGenerator(
  "rarui-tabs",
  argTypesConvert(docs),
);

const meta = {
  title: "Navegação/Tabs",
  tags: ["autodocs"],
  argTypes,
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

export const basic: Story = Template.bind({});
basic.args = {
  children: `
  <rarui-tabs-item label="Label">
    <rarui-box
      align-items="center"
      background-color="$warning-subdued"
      border-color="$warning"
      border-radius="$2xs"
      border-style="dashed"
      border-width="$1"
      display="flex"
      flex-direction="column"
      gap="$3xs"
      height="150px"
      justify-content="center"
      min-width="260px"
      width="100%"
      margin-top="$xs"
    >
      <rarui-text color="$warning" font-size="$s" text-align="center"> ❖ Slot 1 </rarui-text>
    </rarui-box>
  </rarui-tabs-item>
  <rarui-tabs-item label="Label">
    <rarui-box
      align-items="center"
      background-color="$warning-subdued"
      border-color="$warning"
      border-radius="$2xs"
      border-style="dashed"
      border-width="$1"
      display="flex"
      flex-direction="column"
      gap="$3xs"
      height="150px"
      justify-content="center"
      min-width="260px"
      width="100%"
      margin-top="$xs"
    >
      <rarui-text color="$warning" font-size="$s" text-align="center"> ❖ Slot 2 </rarui-text>
    </rarui-box>
  </rarui-tabs-item>
  `,
};
