import path from "path";
import tsconfig from "./tsconfig.json";

export const argTypesConvert = (properties: any = {}) => {
  const argTypes = properties.props.reduce((prev: any, curr: any) => {
    const enums =
      curr?.enum ||
      curr?.anyOf?.[4]?.enum ||
      curr?.anyOf?.[3]?.enum ||
      curr?.anyOf?.[2]?.enum ||
      curr?.anyOf?.[1]?.enum ||
      [];

    const anyOf = curr?.anyOf?.find((item: any) => item.type !== "object");

    const typeMapping: { [key: string]: string } = {
      string: "text",
      number: "number",
      boolean: "boolean",
    };

    const control = (() => {
      if (anyOf?.type && enums.length === 0)
        return typeMapping[anyOf.type] || anyOf.type;
      if (curr.type in typeMapping && enums.length === 0)
        return typeMapping[curr.type];
      if (enums.length > 6) return "select";
      if (enums.length <= 6) return "radio";
      return { disable: true };
    })();

    prev[curr.title] = {
      defaultValue: curr.default,
      description: curr.description ?? "",
      control,
      options: enums,
      table: { type: { summary: curr.type } },
    };

    return prev;
  }, {});

  return argTypes;
};

export const convertTsConfigPathsToWebpackAliases = (
  rootDir = path.resolve(__dirname, "../"),
  tsconfigPaths = Object.entries(tsconfig.compilerOptions.paths),
) => {
  const aliases = Object.fromEntries(
    tsconfigPaths.map(([realPath, [mappedPath]]) => {
      const packageName = mappedPath.split("/")[6];
      const alias = `${mappedPath}/${packageName}.tsx`;
      return [realPath, path.join(rootDir, alias)];
    }),
  );

  const additionalPaths = {
    "@rarui/tokens": "packages/tokens",
    "@rarui/icons": "packages/icons",
    "@rarui/styles": "packages/styles/src/index.ts",
    "@rarui/scripts": "packages/core/scripts/src/index.ts",
    "@rarui/webpack": "packages/core/webpack/src/index.ts",
    "@rarui/typings": "packages/typings/src/index.ts",
    ".storybook": ".storybook",
  };

  Object.entries(additionalPaths).forEach(([key, value]) => {
    aliases[key] = path.join(rootDir, value);
  });

  return aliases;
};

interface formatterProps {
  value: any;
  description: string;
  control?: any;
  options?: string[];
  type?: string;
}

export interface IformatterObj {
  [key: string]: formatterProps;
}

const camelToKebabCase = (camelCaseString: string) => {
  return camelCaseString.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};

export const storyGenerator = (componentTag: string, params: IformatterObj) => {
  const args = Object.fromEntries(
    Object.entries(params).map(([prop, value]) => [prop, value.value]),
  );

  const argTypes = Object.fromEntries(
    Object.entries(params).map(
      ([prop, { description, control, options, type }]) => [
        prop,
        {
          description,
          type: { summary: type },
          ...(control && { control: { type: control } }),
          ...(options && { options }),
        },
      ],
    ),
  );

  const Template = (args: any) => {
    const props = Object.entries(params)
      .filter(
        ([prop]) =>
          args[prop] !== undefined &&
          args[prop] !== false &&
          prop !== "children",
      )

      .map(([prop]) => {
        const value = args[prop];
        const formattedValue =
          typeof value === "object" ? JSON.stringify(value) : value;
        return `${camelToKebabCase(prop)}='${formattedValue}'`;
      })
      .join(" ");

    const children = args.children || "";

    return `<${componentTag} ${props}>${children}</${componentTag}>`;
  };

  return { args, argTypes, Template };
};

export default storyGenerator;
