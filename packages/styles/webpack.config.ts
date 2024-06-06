import path from "path";
import { plugins, rules, configuration } from "@rarui/webpack/src";

const baseConfig = {
  entry: {
    "./themes/dark": "./src/themes/rarui-theme-dark.css.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    library: "@rarui/styles",
  },
  module: { rules: [rules.cssLoaderExtractRule] },
};

const config = configuration.getConfiguration(baseConfig);

delete config.plugins;
config.plugins = [
  plugins.vanillaExtractPlugin,
  plugins.miniCssExtractPlugin,
  plugins.cssHashRemoverPlugin,
  plugins.dtsBundleGeneratorPlugin({
    entries: [
      `yarn g:dts -o ./dist/index.d.ts ./src/index.ts`,
      `yarn g:dts -o ./dist/themes/dark.d.ts ./src/themes/rarui-theme-dark.css.ts`,
    ],
  }),
];

export default () => config;
