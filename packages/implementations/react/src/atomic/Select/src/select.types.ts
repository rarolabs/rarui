import { InputHTMLAttributes, ReactNode } from "react";
import { SelectSprinkle, SelectVariants } from "@rarui/styles";

export interface SelectOption {
  /**
   * Label for the option. This is the text that will be displayed for the option.
   */
  label: string;
  /**
   * Value of the option. This is the value that will be used internally and returned when the option is selected.
   */
  value: string;
}

interface SelectTyping {
  /**
   * Element to be rendered inside the Box of options component.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
  /**
   * Options for the Select component. This should be an array of SelectOption objects.
   */
  options: SelectOption[];
  /**
   * Default selected values for the Select component.
   * This should be an array of SelectOption objects representing the selected options.
   */
  value?: SelectOption[];
  /**
   * Callback function that is called when the selected values change.
   * This function receives an array of SelectOption objects representing the selected options.
   */
  onChange?: (values: SelectOption[]) => void;
}

export type SelectProperties = SelectTyping & SelectVariants & SelectSprinkle;

export type SelectProps = SelectProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "size" | "options">;
