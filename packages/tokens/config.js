// eslint-disable-next-line
const StyleDictionary = require("style-dictionary");

const { fileHeader } = StyleDictionary.formatHelpers;

StyleDictionary.registerFormat({
  name: "custom/javascript/module",
  formatter({ file, dictionary }) {
    return `${fileHeader({
      file,
    })}export default ${JSON.stringify(dictionary.tokens, null, 2)};`;
  },
});

module.exports = {
  source: ["src/**/*.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "./dist/scss/",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables",
        },
      ],
    },
    css: {
      transformGroup: "css",
      buildPath: "./dist/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
    ts: {
      transformGroup: "js",
      buildPath: "./dist/js/",
      files: [
        {
          format: "custom/javascript/module",
          destination: "tokens.js",
        },
        {
          format: "javascript/module",
          destination: "tokens.cjs",
        },
        {
          format: "typescript/module-declarations",
          destination: "tokens.d.ts",
        },
      ],
    },
  },
};
