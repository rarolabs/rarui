import { getConfiguration, production, base } from "./config";

import {
  rootDir,
  arrayFilterEmpty,
  isProduction,
  isDevelopment,
} from "./utils";

export const configuration = {
  production,
  base,
  getConfiguration,
};

export const utils = { rootDir, arrayFilterEmpty, isProduction, isDevelopment };

const stencil = {
  configuration,
  utils,
};

export default stencil;
