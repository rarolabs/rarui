/**
 * Created by: Júnior Conquista (junior@rarolabs.com.br)
 */

/**
 * @see https://webpack.js.org/guides/typescript/#loader
 */
export const typescriptRule = {
  test: /\.tsx?$/,
  loader: "ts-loader",
  exclude: /node_modules/,
};

export const typescriptVueRule = {
  test: /\.tsx?$/,
  loader: "ts-loader",
  exclude: /node_modules/,
  options: {
    appendTsSuffixTo: [/\.vue$/],
  },
};

export const VueRule = {
  test: /\.vue$/,
  loader: "vue-loader",
  exclude: /node_modules/,
};
