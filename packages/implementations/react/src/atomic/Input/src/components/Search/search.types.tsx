import { InputHTMLAttributes } from "react";
import { InputProps } from "@rarui/typings";

type InputSearchProperties = Pick<
  InputProps,
  "divider" | "appearance" | "size" | "border"
>;

export type _InputSearchProps = InputSearchProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
