import basePreview from "../../../../.storybook/basePreview";
import type { Preview } from "@storybook/html";

const preview: Preview = {
  parameters: {
    ...basePreview.parameters,
  },
};

export default preview;
