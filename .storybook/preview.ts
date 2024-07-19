import { Preview } from "@storybook/react";
import basePreview from "./basePreview";
import { WithHTMLSource } from "./decorators";

const preview: Preview = {
  ...basePreview,
  decorators: [...(basePreview.decorators as any), WithHTMLSource],
};

export default preview;
