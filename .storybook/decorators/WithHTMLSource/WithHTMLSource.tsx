import React, { useState, useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Prism } from "react-syntax-highlighter";
import { addons } from "@storybook/preview-api";
import { DARK_MODE_EVENT_NAME, useDarkMode } from "storybook-dark-mode";
import {
  prism as prismStyle,
  coldarkDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import formatter from "code-formatter";
import CopyToClipboard from "react-copy-to-clipboard";
import tokens from "@rarui/tokens/dist/js/tokens";

import { Tabs } from "@rarui-react/tabs";
import { Box } from "@rarui-react/box";
import { IconButton } from "@rarui-react/icon-button";
import { FileCopyOutlinedIcon, CheckIcon } from "@rarui/icons";
import { hashsRemoves } from "./withHTMLSource.definitions";
import "./withHTMLSource.styles.css";

const channel = addons.getChannel();

export const WithHTMLSource = (StoryFn: any) => {
  const [selected, setSelected] = useState(0);
  const [hasCopied, setHasCopied] = useState(false);
  const [isDark, setDark] = useState<boolean>(useDarkMode());

  useEffect(() => {
    if (hasCopied) setTimeout(() => setHasCopied(false), 1500);
  }, [hasCopied]);

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.removeListener(DARK_MODE_EVENT_NAME, setDark);
  }, [channel, setDark]);

  useEffect(() => window.addEventListener("message", receiveMessage), []);

  const receiveMessage = (message: MessageEvent) => {
    switch (message.data?.type) {
      case "change_dark_theme":
        setDark(message.data.value);
        break;
      default:
        break;
    }
  };

  const html = renderToStaticMarkup(<StoryFn />);
  const formattedHtml = (formatter as any)(html, { method: "html" });

  return (
    <>
      <Tabs underlined position="right" preSelectedTab={selected}>
        <Tabs.Item label="Preview" onSelectTab={() => setSelected(0)} />
        <Tabs.Item label="HTML" onSelectTab={() => setSelected(1)}>
          <Box paddingTop="$xs">
            <Box
              backgroundColor="$secondary"
              display="flex"
              padding="$xs"
              borderRadius="$xs"
            >
              <Prism
                wrapLongLines
                wrapLines
                style={isDark ? coldarkDark : prismStyle}
                language="html"
                customStyle={{
                  width: "100%",
                  fontSize: tokens.font.size.body.s.value,
                  backgroundColor:
                    tokens.color[isDark ? "dark" : "light"].surface.secondary
                      .value,
                  padding: 0,
                }}
              >
                {hashsRemoves(formattedHtml)}
              </Prism>
              <CopyToClipboard
                text={hashsRemoves(formattedHtml)}
                onCopy={() => setHasCopied(true)}
              >
                <IconButton
                  source={!hasCopied ? <FileCopyOutlinedIcon /> : <CheckIcon />}
                  size="small"
                  variant="tonal"
                  appearance="neutral"
                />
              </CopyToClipboard>
            </Box>
          </Box>
        </Tabs.Item>
      </Tabs>
      {selected === 0 && (
        <Box paddingTop="$xs">
          <StoryFn />
        </Box>
      )}
    </>
  );
};
