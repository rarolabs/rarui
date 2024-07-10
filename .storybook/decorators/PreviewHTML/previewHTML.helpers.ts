import Prism from "prismjs";
import "prismjs/components/prism-cshtml";
import prettier from "prettier/standalone";
// @ts-ignore
import * as parserHtml from "prettier/parser-html";

export const darkClasses = {
  buttonsWrapper: ".css-1wpn6ca",
  button: "css-o02ltd",
};
export const lightClasses = {
  buttonsWrapper: ".css-175ir4x",
  button: "css-s1nxsf",
};

export const createElementWithClasses = (
  element: string,
  ...classes: string[]
) => {
  const newElement = document.createElement(element);
  newElement.classList.add(...classes);
  return newElement;
};

export const processCode = async (code: string) => {
  const cleanedCode = code
    .replace(/(?:(__\w{7,}))/gm, "")
    .replace(/(?:(_[a-z]{1,}))(?:_)/gm, "_")
    .replace(/(?:(_[a-z]{1,}))/, "");
  const formatedCode = await prettier.format(cleanedCode, {
    parser: "html",
    plugins: [parserHtml],
  });
  return Prism.highlight(formatedCode, Prism.languages.html, "html");
};
