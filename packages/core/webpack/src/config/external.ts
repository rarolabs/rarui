/**
 * Created by: Júnior Conquista (junior@rarolabs.com.br)
 * @see https://webpack.js.org/configuration/externals/
 */
export const externalLibs = {
  "@rarui/styles": "@rarui/styles",
  "@floating-ui/react": "@floating-ui/react",
  react: "react",
  "react-dom": "react-dom",
  "react-datepicker": "react-datepicker",
  vue: "vue",
};

export const externalPackages = {
  "@rarui/icons": "@rarui/icons",
  "@rarui/tokens": "@rarui/tokens",
  "@floating-ui/react": "@floating-ui/react",
  "react-datepicker": "react-datepicker",
};

export const externalItems = { ...externalLibs, ...externalPackages };
