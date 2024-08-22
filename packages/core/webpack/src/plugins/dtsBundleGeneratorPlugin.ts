/**
 * Created by: Júnior Conquista (junior@rarolabs.com.br)
 */

import WebpackShellPluginNextPlugin from "webpack-shell-plugin-next";

const entry = [
  "yarn g:dts --external-imports=@rarui/typings @rarui-react/components @floating-ui/react react --disable-symlinks-following --export-referenced-types=false -o ./dist/index.d.ts ./src/index.ts",
];

export const dtsBundleGeneratorPlugin = (
  configuration: { entries: string[] } = { entries: entry },
) => {
  const config = {
    onBuildEnd: {
      scripts: [...configuration.entries],
      blocking: false,
      parallel: true,
    },
  };

  return new WebpackShellPluginNextPlugin(config);
};
