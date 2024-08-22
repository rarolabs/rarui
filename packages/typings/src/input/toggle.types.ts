import { ToggleVariants } from "@rarui/styles";

export interface ToggleTyping {
  /**
   * The name of the input element.
   */
  name: string;
  /**
   * Sets toggle state to activated or deactivated.
   */
  selected?: boolean;
  /**
   * Text to be rendered inside the component
   */
  label?: string;
}

export type ToggleProps = ToggleTyping & ToggleVariants;
