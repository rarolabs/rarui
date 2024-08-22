import { InputHTMLAttributes } from "react";
import { InputProps } from "@rarui/typings";

export type InputPasswordProperties = Pick<
  InputProps,
  "divider" | "appearance" | "size" | "border"
>;

export type _InputPasswordProps = InputPasswordProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
