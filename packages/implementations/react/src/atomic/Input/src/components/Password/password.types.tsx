import { InputHTMLAttributes } from "react";
import { InputProperties } from "@rarui/typings";

export type _InputPasswordProps = InputProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
