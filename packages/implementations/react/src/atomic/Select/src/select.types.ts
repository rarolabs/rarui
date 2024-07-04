import { InputHTMLAttributes, ReactNode } from "react";
import { SelectSprinkle, SelectVariants } from "@rarui/styles";
import { Placement } from "@floating-ui/react";

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
  value?: string | string[];
  /**
   * Callback function that is called when the selected values change.
   * This function receives an array of SelectOption objects representing the selected options.
   */
  onChange?: (selectedOptions: string | string[]) => void;
  /**
   * Fazer
   */
  multiple?: boolean;
  /**
   * Specifies the default selected value(s) for the select box.
   * This can be a string for single selection or an array of strings for multiple selections.
   */
  defaultValue?: string | string[];
  /**
   * If true, the Select component is shown.
   */
  open?: boolean;
  /**
   * Position of the select.
   * @default bottom
   */
  position?: Placement;
  /**
   * Determines whether the select box should enable flipping the options' dropdown when there is not enough space to display it in its default direction.
   * This can help ensure the dropdown is always visible on the screen.
   * @default true
   */
  enabledFlip?: boolean;
  /**
   * Specifies the ID of the portal element where the dropdown should be rendered.
   * This can be useful for rendering the dropdown in a different part of the DOM, such as a modal or overlay.
   */
  portalId?: string;
}

export type SelectProperties = SelectTyping & SelectVariants & SelectSprinkle;
export type SelectProps = SelectProperties &
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "size" | "options" | "onChange"
  >;
