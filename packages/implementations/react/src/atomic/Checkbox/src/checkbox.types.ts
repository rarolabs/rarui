import { InputHTMLAttributes } from "react";

export interface CheckboxProperties {
  /**
   * The label of the checkbox.
   * @TJS-type React.ReactNode
   */
  label?: string;
  /**
   * The id of the checkbox.
   * @TJS-type React.ReactNode
   */
  id: string;
  /**
   * Change the visual style of the checkbox.
   * @default brand
   */
  danger?: boolean;
  /**
   * Disables the checkbox, disallowing user interaction.
   * @default false
   */
  disabled?: boolean;
  /**
   * Adds an indeterminate state to the checkbox. In a form this state is just visual, since the input can only have the state checked or unchecked
   * @default false
   */
  indeterminate?: boolean;
  /**
   * Change the size of the checkbox.
   * @default medium
   */
  size?: "medium" | "large";
}

export type CheckboxProps = CheckboxProperties &
  InputHTMLAttributes<HTMLInputElement>;
