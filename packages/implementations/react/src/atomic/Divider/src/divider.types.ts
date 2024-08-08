import { HTMLAttributes } from "react";
import { DividerProperties } from "@rarui/typings";

export type DividerProps = DividerProperties &
  Omit<HTMLAttributes<HTMLDivElement>, "type">;
