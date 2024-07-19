import React, { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Prism } from "react-syntax-highlighter";
import { useDarkMode } from "storybook-dark-mode";
import {
  prism as prismStyle,
  coldarkDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import formatter from "code-formatter";
import tokens from "@rarui/tokens/dist/js/tokens";

//@ts-ignore
import { Tabs } from "@rarui-react/tabs";
//@ts-ignore
import { Box } from "@rarui-react/box";
//@ts-ignore
import { IconButton } from "@rarui-react/icon-button";
import { FileCopyOutlinedIcon } from "@rarui/icons";
import { hashsRemoves } from "./withHTMLSource.definitions";
import "./withHTMLSource.styles.css";

export const WithHTMLSource = (StoryFn: any) => {
  const [selected, setSelected] = useState(0);
  const isDark = useDarkMode();
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
              <IconButton
                source={<FileCopyOutlinedIcon />}
                size="small"
                variant="tonal"
                appearance="neutral"
              />
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
