import { HTMLAttributes } from "react";
import { DividerProps as DividerTypings } from "@rarui/typings";

type DividerProperties = DividerTypings;

export type DividerProps = DividerProperties &
  Omit<HTMLAttributes<HTMLDivElement>, "type">;
