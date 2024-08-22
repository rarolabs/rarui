import { HTMLAttributes } from "react";
import { PaginationProps as PaginationTypings } from "@rarui/typings";

type PaginationProperties = PaginationTypings;
export type PaginationProps = PaginationProperties &
  HTMLAttributes<HTMLUListElement>;
