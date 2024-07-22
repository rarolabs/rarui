import React, { useState, useEffect } from "react";
import { DocsContainer } from "@storybook/addon-docs";
import { addons } from "@storybook/preview-api";
import { DARK_MODE_EVENT_NAME, useDarkMode } from "storybook-dark-mode";
import { variablesDark } from "@rarui/styles";

import light, { dark } from "./theme.definitions";

const channel = addons.getChannel();

export const ThemeDocsProvider: React.FC<any> = (props) => {
  const [isDark, setDark] = useState<boolean>();

  useEffect(() => window.addEventListener("message", receiveMessage), []);
  useEffect(() => {
    const iframeScript = document.getElementById("@iframe-resizer-child");
    if (!iframeScript) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/@iframe-resizer/child@5.2.1/index.umd.min.js";
      script.type = "text/javascript";
      script.async = true;
      script.id = "@iframe-resizer-child";
      document.body.appendChild(script);
    }
  }, []);

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
    <div id="theme-provider" className={isDark ? variablesDark : ""}>
      <DocsContainer {...props} theme={isDark ? dark : light} />
    </div>
  );
};

export const ThemeRaruiProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div id="theme-provider" className={useDarkMode() ? variablesDark : ""}>
      {children}
    </div>
  );
};
