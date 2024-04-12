import path from "path";
import { configuration, plugins, utils } from "@rarui/webpack";

const baseConfig = {
  entry: { "./index": "./tmp/index.ts" },
  output: {
    path: path.resolve(__dirname, "dist"),
    library: "@rarui/icons",
  },
};

const config = configuration.getConfiguration(baseConfig);
config.plugins = [
  plugins.dtsBundleGeneratorPlugin({
    entries: [
      `node ${utils.rootDir}/node_modules/.bin/dts-bundle-generator -o ./dist/index.d.ts ./tmp/index.ts`,
    ],
  }),
];

export default () => config;
