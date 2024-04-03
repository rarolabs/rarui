import path from "path";
import { configuration, plugins } from "@rarui/webpack";

const baseConfig = {
  output: {
    path: path.resolve(__dirname, "dist"),
    library: "@rarui-vuejs/button",
  },
};

const config = configuration.getConfiguration(baseConfig);

config.plugins = [plugins.vueLoaderPlugin];

export default () => config;
