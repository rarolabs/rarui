/**
 * Created by: Júnior Conquista (junior@rarolabs.com.br)
 */
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config = {
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: "[name].css",
  chunkFilename: "[id].css",
};

export const miniCssExtractPlugin = new MiniCssExtractPlugin(config);
