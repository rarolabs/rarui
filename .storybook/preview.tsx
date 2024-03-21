import React from "react";
import { ThemeDocsProvider, ThemeRaruiProvider, dark, light } from "./theme";
import "./static/style.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: "dark",
      darkClass: "darkClass",
      lightClass: "lightClass",
      stylePreview: true,
      light,
      dark,
    },
    docs: {
      container: ThemeDocsProvider,
      autodocs: true,
    },
  },
};

export default preview;

export const decorators = [
  (renderStory) => <ThemeRaruiProvider>{renderStory()}</ThemeRaruiProvider>,
];
