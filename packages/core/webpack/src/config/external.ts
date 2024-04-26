/**
 * Created by: Júnior Conquista (junior@rarolabs.com.br)
 * @see https://webpack.js.org/configuration/externals/
 */
export const externalLibs = {
  "@rarui/styles": "@rarui/styles",
  react: "react",
  "react-dom": "react-dom",
  vue: "vue",
};

export const externalPackages = {
  "@rarui/icons": "@rarui/icons",
  "@rarui/tokens": "@rarui/tokens",
};

export const externalItems = { ...externalLibs, ...externalPackages };
