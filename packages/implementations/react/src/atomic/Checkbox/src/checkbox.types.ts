import { InputHTMLAttributes } from "react";
import type { CheckboxProperties } from "@rarui/typings";

export type CheckboxProps = CheckboxProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
