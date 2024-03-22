import path from "path";
import { plugins, rules, configuration, utils } from "@rarui/webpack/src";

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
      `node ${utils.rootDir}/node_modules/.bin/dts-bundle-generator -o ./dist/index.d.ts ./src/index.ts`,
      `node ${utils.rootDir}/node_modules/.bin/dts-bundle-generator -o ./dist/themes/dark.d.ts ./src/themes/rarui-theme-dark.css.ts`,
    ],
  }),
];

export default () => config;
