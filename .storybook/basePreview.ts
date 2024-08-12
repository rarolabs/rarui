import { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { ThemeDocsProvider, dark, light } from "./theme";

const basePreview: Preview = {
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
      light: { ...themes.light, ...light },
      dark: { ...themes.dark, ...dark },
    },
    docs: {
      container: ThemeDocsProvider,
      autodocs: true,
      source: "code",
    },
  },
};

export default basePreview;
