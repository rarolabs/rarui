/**
 * Created by: Júnior Conquista (junior@rarolabs.com.br)
 */

import { Config } from "@stencil/core";
import { isProduction } from "../utils";
import production from "./production";

export const getConfiguration = (config?: Config) =>
  isProduction
    ? { ...production, ...(config ?? {}) }
    : { ...production, ...(config ?? {}) };

export default getConfiguration();
