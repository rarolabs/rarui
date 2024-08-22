import { CheckboxVariants } from "@rarui/styles";

export interface CheckboxTyping {
  /**
   * The label of the checkbox.
   */
  label?: string;
  /**
   * The id of the checkbox.
   */
  id: string;
}

export type CheckboxProps = CheckboxTyping & CheckboxVariants;
