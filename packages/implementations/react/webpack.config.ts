import path from "path";
import { configuration } from "@rarui/webpack/src";

const baseConfig = {
  output: {
    path: path.resolve(__dirname, "dist"),
    library: "@rarui-react/components",
  },
};

const config = configuration.getConfiguration(baseConfig);
delete config.externals;
config.externals = configuration.externalLibs;

export default () => config;
