import basePreview from "../../../../.storybook/basePreview";

import type { Preview } from "@storybook/vue3";

const preview: Preview = {
  parameters: {
    ...basePreview.parameters,
  },
};

export default preview;
