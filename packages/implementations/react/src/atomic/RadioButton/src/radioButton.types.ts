import { InputHTMLAttributes } from "react";
import { RadioButtonVariants } from "@rarui/styles";

interface RadioButton {
  /**
   * Sets radio state to activated or deactivated.
   */
  selected?: boolean;
  /**
   * Text to be rendered inside the component.
   */
  label?: string;
}

export type RadioButtonProperties = RadioButton & RadioButtonVariants;

export type RadioButtonProps = RadioButtonProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
