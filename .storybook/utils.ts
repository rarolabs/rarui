import path from "path";

export const argTypesConvert = (properties: any = {}) => {
  const argTypes = properties.props.reduce(
    (
      prev: {
        [key: string]: {
          control: string;
          options: string[];
          description: string;
          defaultValue?: string;
        };
      },
      curr: any,
    ) => {
      let options: string[] = [];

      const enums =
        curr?.enum ??
        curr?.anyOf?.[4]?.enum ??
        curr?.anyOf?.[3]?.enum ??
        curr?.anyOf?.[2]?.enum ??
        curr?.anyOf?.[1]?.enum ??
        [];

      options = enums;

      prev[curr.title] = {
        defaultValue: curr.default,
        description: curr.description ?? "",
        control: options?.length > 6 ? "select" : "radio",
        options,
      };
      return prev;
    },
    {},
  );

  return argTypes;
};

export const convertTsConfigPathsToWebpackAliases = () => {
  const rootDir = path.resolve(__dirname, "../");
  const tsconfig = require("../tsconfig.json");
  const tsconfigPaths = Object.entries(tsconfig.compilerOptions.paths);

  const paths = tsconfigPaths.reduce(
    (aliases: any, [realPath, mappedPath]: any) => {
      const packageName = mappedPath[0].split("/")[6];

      const alias = `${mappedPath[0]}/${packageName}.tsx`;
      aliases[realPath] = path.join(rootDir, alias);
      return aliases;
    },
    {},
  );

  paths["@rarui/tokens"] = path.join(rootDir, "packages/tokens");
  paths["@rarui/icons"] = path.join(rootDir, "packages/icons");
  paths["@rarui/styles"] = path.join(rootDir, "packages/styles/src/index.ts");
  paths["@rarui/scripts"] = path.join(
    rootDir,
    "packages/core/scripts/src/index.ts",
  );
  paths["@rarui/webpack"] = path.join(
    rootDir,
    "packages/core/webpack/src/index.ts",
  );
  paths["@rarui/typings"] = path.join(
    rootDir,
    "packages/core/typings/src/index.ts",
  );
  paths[".storybook"] = path.join(rootDir, ".storybook");
  return paths;
};
