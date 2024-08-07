import { Preview } from "@storybook/react";
import basePreview from "./basePreview";
import { WithHTMLSource } from "./decorators";

const preview: Preview = {
  ...basePreview,
  decorators: [WithHTMLSource],
};

export default preview;
