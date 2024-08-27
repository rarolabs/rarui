import { SelectSprinkle, SelectVariants } from "@rarui/styles";

export interface SelectOptionProps {
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
   * Options for the Select component. This should be an array of SelectOptionProps objects.
   */
  options: SelectOptionProps[];
  /**
   * Default selected values for the Select component.
   * This should be an array of SelectOptionProps objects representing the selected options.
   */
  value?: SelectOptionProps | SelectOptionProps[];
  /**
   * Callback function that is called when the selected values change.
   * This function receives an array of SelectOptionProps objects representing the selected options.
   */
  onChange?: (selectedOptions: SelectOptionProps | SelectOptionProps[]) => void;
  /**
   * Fazer
   */
  multiple?: boolean;
  /**
   * Specifies the default selected value(s) for the select box.
   * This can be a selectOption for single selection or an array of selectOption for multiple selections.
   */
  defaultValue?: SelectOptionProps | SelectOptionProps[];
  /**
   * If true, the Select component is shown.
   */
  open?: boolean;
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

export type SelectProps = SelectTyping & SelectVariants & SelectSprinkle;
