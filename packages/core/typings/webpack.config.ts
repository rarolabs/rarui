import path from "path";
import { configuration } from "@rarui/webpack";

const config = {
  output: {
    path: path.resolve(__dirname, "dist"),
    library: "@rarui/typings",
  },
};

export default () => configuration.getConfiguration(config);
