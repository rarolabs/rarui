import React from "react";
import { Preview } from "@storybook/react";
import { ThemeDocsProvider, ThemeRaruiProvider, dark, light } from "./theme";
import "./static/style.css";

const preview: Preview = {
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
  decorators: [
    (Story) => (
      <ThemeRaruiProvider>
        <Story />
      </ThemeRaruiProvider>
    ),
  ],
};

export default preview;
