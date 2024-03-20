/**
 * Created by: Júnior Conquista (junior@rarolabs.com.br)
 * @see https://webpack.js.org/configuration/dev-server/
 */
import dashify from "dashify";
import glob from "glob";
import { join } from "path";
import { rootDir } from "../utils/constants";

const paths = glob.sync(`${join(rootDir, "./packages/react/src/*/*/src")}`);

const packages = paths.reduce((prev: { [key: string]: string }, curr) => {
  const key = `@rarui/${dashify(curr.split("/")[10])}`;
  prev[key] = curr;
  return prev;
}, {});

export const aliasItems = {
  "@rarui/tokens": join(rootDir, "./packages/tokens"),
  "@rarui/styles": join(rootDir, "./packages/styles/src"),
  "@rarui/webpack": join(rootDir, "./packages/core/webpack/src"),
  ...packages,
};
