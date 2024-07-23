/**
 * Created by: Júnior Conquista (junior@rarolabs.com.br)
 */
import { Config } from "@stencil/core";

export const config: Config = {
  outputTargets: [
    {
      type: "dist",
    },
    {
      type: "docs-readme",
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};

export default config;
