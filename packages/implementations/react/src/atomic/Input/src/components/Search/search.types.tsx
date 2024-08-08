import { InputHTMLAttributes } from "react";
import { InputSearchProperties } from "@rarui/typings";

export type _InputSearchProps = InputSearchProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
