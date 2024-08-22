import { InputHTMLAttributes } from "react";
import { InputProperties } from "@rarui/typings";

export type _InputSearchProps = Pick<
  InputProperties,
  "divider" | "appearance" | "size" | "border"
> &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
