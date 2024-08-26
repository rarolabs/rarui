import path from "path";
import { configuration } from "@rarui/webpack/src";

const config = {
  output: {
    path: path.resolve(__dirname, "dist"),
    library: "@rarui-react/badge",
  },
};

export default () => configuration.getConfiguration(config);
