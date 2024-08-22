import { InputHTMLAttributes } from "react";
import { CheckboxProps as CheckboxTypings } from "@rarui/typings";

type CheckboxProperties = CheckboxTypings;

export type CheckboxProps = CheckboxProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
