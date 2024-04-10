import { PartialArgs, CompilerOptions } from "typescript-json-schema";

export const defaultSettings: PartialArgs = {
  required: true,
  ref: false,
  noExtraProps: true,
  titles: true,
  propOrder: true,
};

export const defaultCompilerOptions: Omit<CompilerOptions, "jsx"> & {
  jsx: string;
} = {
  strictNullChecks: false,
  esModuleInterop: true,
  skipLibCheck: true,
  jsx: "react",
};
