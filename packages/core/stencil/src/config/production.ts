/**
 * Created by: Júnior Conquista (junior@rarolabs.com.br)
 */

import { Config } from "@stencil/core";
import { aliasPlugin } from "../plugins";

export const config: Config = {
  outputTargets: [
    {
      type: "dist",
    },
  ],

  testing: {
    browserHeadless: "new",
  },
  rollupPlugins: {
    before: [aliasPlugin],
  },
  rollupConfig: {
    inputOptions: {
      external: (id) => {
        // Externalize @rarui/styles and other external libraries
        return /^@rarui\/styles/.test(id);
      },
    },
  },
};

export default config;
