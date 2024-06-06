import path from "path";
import { configuration, plugins } from "@rarui/webpack";

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
    entries: ["yarn g:dts -o ./dist/index.d.ts ./tmp/index.ts"],
  }),
];

export default () => config;
