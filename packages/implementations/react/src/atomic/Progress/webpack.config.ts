import path from "path";
import { configuration } from "@rarui/webpack";

const config = {
  output: {
    path: path.resolve(__dirname, "dist"),
    library: "@rarui-react/progress-bar",
  },
};

export default () => configuration.getConfiguration(config);
