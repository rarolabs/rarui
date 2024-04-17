import { InputHTMLAttributes } from "react";
import { CheckboxVariants } from "@rarui/styles";

export interface CheckboxProperties {
  /**
   * The label of the checkbox.
   */
  label?: string;
  /**
   * The id of the checkbox.
   */
  id: string;
}

export type CheckboxProps = CheckboxProperties &
  CheckboxVariants &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
