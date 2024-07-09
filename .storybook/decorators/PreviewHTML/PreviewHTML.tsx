import React, { useEffect, useState } from "react";

import { useDarkMode } from "storybook-dark-mode";
import {
  createElementWithClasses,
  processCode,
  lightClasses,
  darkClasses,
} from "./previewHTML.helpers";

import "./style.css";

export const PreviewHTML = (Story, context) => {
  const darkMode = useDarkMode();

  const [classes] = useState(darkMode ? darkClasses : lightClasses);
  const appendHTMLPanel = async (
    root: HTMLDivElement,
    element: HTMLDivElement,
  ) => {
    const htmlPanel = root.parentElement?.querySelector(".html-display");

    if (htmlPanel) {
      root.parentElement?.removeChild(htmlPanel);
      return;
    }

    const mainWrapper = createElementWithClasses(
      "div",
      "css-1xrl4hz",
      "html-display",
    );
    const copyButtonContainer = createElementWithClasses("div", "css-111a2cx");
    mainWrapper.appendChild(copyButtonContainer);

    const secondWrapper = createElementWithClasses("div", "css-8ycahn");
    mainWrapper.appendChild(secondWrapper);

    const htmlDisplay = createElementWithClasses(
      "div",
      "css-zye6j",
      "language-jsx",
    );
    const htmlWrapper = createElementWithClasses(
      "pre",
      "css-4zr3vl",
      "prismjs",
    );
    secondWrapper.appendChild(htmlWrapper);

    if (htmlWrapper.innerHTML === "") {
      htmlWrapper.appendChild(htmlDisplay);
    }
    if (element) {
      const code = element?.innerHTML;
      htmlDisplay.innerHTML = await processCode(code);
    }

    const copyButton = createElementWithClasses("button", "css-9hpw1j");
    copyButton.textContent = "Copy";
    copyButton.addEventListener("click", () => {
      copyButton.textContent = "Copied";
      setTimeout(() => (copyButton.textContent = "Copy"), 1500);
      navigator.clipboard.writeText(htmlDisplay.innerText);
    });
    copyButtonContainer.appendChild(copyButton);
    mainWrapper.appendChild(copyButtonContainer);
    const showCodeButton = root.parentElement?.querySelector(
      ".docblock-code-toggle",
    ) as HTMLButtonElement;
    if (root.querySelector(".docblock-code-toggle--expanded")) {
      showCodeButton.click();
    }
    root.parentElement?.appendChild(mainWrapper);
  };

  const appendButton = (root: HTMLDivElement) => {
    if (root.querySelector(".show-html-button")) {
      return;
    }
    const button = createElementWithClasses(
      "button",
      "show-html-button",
      "docblock-code-toggle",
      classes.button,
    );
    button.textContent = "Show HTML";
    button.addEventListener("click", showHTMLPanel);
    root?.appendChild(button);
  };

  const showHTMLPanel = (e) => {
    setTimeout(() => {
      e.target.textContent =
        e.target.textContent === "Show HTML" ? "Hide HTML" : "Show HTML";
      const root =
        e.target?.parentElement.parentElement.parentElement.querySelector(
          ".docs-story",
        ) as HTMLDivElement;
      const element =
        e.target.parentElement.parentElement.querySelector("#theme-provider");
      appendHTMLPanel(root, element);
    }, 50);
  };

  const removeHTMLPanel = (e) => {
    const root =
      e.target?.parentElement.parentElement.parentElement.querySelector(
        ".docs-story",
      ) as HTMLDivElement;
    const htmlPanel = root.parentElement?.querySelector(".html-display");
    if (htmlPanel) {
      const button = root.querySelector(".show-html-button");
      if (button) button.textContent = "Show HTML";
      root.parentElement?.removeChild(htmlPanel);
    }
  };

  useEffect(() => {
    document.querySelectorAll(".show-html-button").forEach((element) => {
      if (darkMode) {
        element.classList.remove(lightClasses.button);
        element.classList.add(darkClasses.button);
      } else {
        element.classList.remove(darkClasses.button);
        element.classList.add(lightClasses.button);
      }
    });
  }, [darkMode]);

  useEffect(() => {
    document
      .querySelectorAll<HTMLDivElement>(classes.buttonsWrapper)
      ?.forEach((element) => appendButton(element));
    document
      .querySelectorAll(".docblock-code-toggle:first-child")
      .forEach((element) => {
        element.addEventListener("click", (e) => removeHTMLPanel(e));
      });
  }, []);

  return (
    <div>
      <Story {...context} />
    </div>
  );
};