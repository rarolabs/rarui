import basePreview from "../../../../.storybook/preview";

import type { Preview } from "@storybook/vue3";

const preview: Preview = {
  parameters: {
    ...basePreview.parameters,
  },
};

export default preview;
