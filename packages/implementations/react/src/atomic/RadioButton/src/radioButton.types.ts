import { InputHTMLAttributes } from "react";
import { RadioButtonProperties } from "@rarui/typings";

export type RadioButtonProps = RadioButtonProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
