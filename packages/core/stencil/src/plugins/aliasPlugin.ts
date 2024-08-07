/**
 * Created by: Júnior Conquista (junior@rarolabs.com.br)
 */
import path from "path";
import alias from "@rollup/plugin-alias";
import { rootDir } from "../utils";

export const aliasPlugin = alias({
  entries: [
    {
      find: "@rarui/styles",
      replacement: path.join(rootDir, "packages/styles/src"),
    },
  ],
});
