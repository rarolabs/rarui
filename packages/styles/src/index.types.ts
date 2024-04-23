export interface Conditions<T> {
  xs?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

export type AddDollar<T extends string> = `$${T}`;

export type {
  StandardLonghandProperties,
  StandardShorthandProperties,
} from "./types";
