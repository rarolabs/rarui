import basePreview from "../../../../.storybook/preview";

import type { Preview } from "@storybook/vue3";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    ...basePreview.parameters,
  },
};

export default preview;
