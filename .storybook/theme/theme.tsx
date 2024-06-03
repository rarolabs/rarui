import React, { useState, useEffect } from "react";
import { DocsContainer } from "@storybook/addon-docs";
import { addons } from "@storybook/preview-api";
import { DARK_MODE_EVENT_NAME, useDarkMode } from "storybook-dark-mode";
import { ThemeProvider } from "@rarui/styles";

import light, { dark } from "./theme.definitions";

const channel = addons.getChannel();

export const ThemeDocsProvider: React.FC<any> = (props) => {
  const [isDark, setDark] = useState<boolean>();

  useEffect(() => window.addEventListener("message", receiveMessage), []);

  const receiveMessage = (message: MessageEvent) => {
    switch (message.data?.type) {
      case "change_dark_theme":
        setDark(message.data.value);
        break;
      case "change_css":
        const styleElement = document.createElement("style");
        styleElement.innerHTML = message.data.value;
        document.head.appendChild(styleElement);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.removeListener(DARK_MODE_EVENT_NAME, setDark);
  }, [channel, setDark]);

  return (
    <ThemeProvider theme={isDark ? "dark" : "base"}>
      <DocsContainer {...props} theme={isDark ? dark : light} />
    </ThemeProvider>
  );
};

export const ThemeRaruiProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={useDarkMode() ? "dark" : "base"}>
      {children}
    </ThemeProvider>
  );
};
