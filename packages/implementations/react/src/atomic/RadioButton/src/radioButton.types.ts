import { InputHTMLAttributes } from "react";
import { RadioButtonProps as RadioButtontyping } from "@rarui/typings";

type RadioButtonProperties = RadioButtontyping;
export type RadioButtonProps = RadioButtonProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
