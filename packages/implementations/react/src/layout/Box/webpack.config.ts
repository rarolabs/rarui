import path from "path";
import { configuration } from "@rarui/webpack/src";

const config = {
  output: {
    path: path.resolve(__dirname, "dist"),
    library: "@rarui-react/box",
  },
};

export default () => configuration.getConfiguration(config);
