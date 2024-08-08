import { HTMLAttributes } from "react";
import { PaginationProperties } from "@rarui/typings";

export type PaginationProps = PaginationProperties &
  HTMLAttributes<HTMLUListElement>;
