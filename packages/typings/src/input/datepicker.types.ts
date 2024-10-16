import { InputProps } from "../input/input.types";

export interface DatepickerProps {
  /**
   * Specifies the input properties for the datepicker component.
   * This should be an object of type InputPros, which defines various attributes and behaviors for the input field within the datepicker.
   * @TJS-type Input
   */
  input?: InputProps;
  /**
   * Specifies the locale for the datepicker, influencing how dates are displayed and formatted.
   */
  locale?: string;
  /**
   * Determines whether to show a year picker.
   * When true, the datepicker will display options for selecting a year.
   */
  showYearPicker?: boolean;
  /**
   * Determines whether to show a time selector.
   * When true, the datepicker will include options for selecting a time.
   */
  showTimeSelect?: boolean;
  /**
   * Determines whether to show a combined month and year picker.
   * When true, the datepicker will display options for selecting both month and year together.
   */
  showMonthYearPicker?: boolean;
  /**
   * Specifies the format in which the date should be displayed.
   * This should be a string representing the desired date format.
   */
  dateFormat?: string;
  /**
   * The currently selected date. This should be a Date object representing the selected date.
   */
  selected?: Date | null;
  /**
   * The start date in a date range selection. This should be a Date object.
   */
  startDate?: Date;
  /**
   * The end date in a date range selection. This should be a Date object.
   */
  endDate?: Date;
  /**
   * The min date in a date selection.
   */
  minDate?: Date;
  /**
   * The max date in a date selection.
   */
  maxDate?: Date;
  /**
   * Determines whether the datepicker allows selecting a date range.
   * When true, the datepicker enables range selection.
   */
  selectsRange?: boolean;
  /**
   * Specifies the ID of the portal element where the datepicker should be rendered.
   * This can be useful for rendering the datepicker in a different part of the DOM, such as a modal or overlay.
   */
  portalId?: string;
  /**
   * Specifies whether the datepicker is disabled.
   */
  disabled?: boolean;
  open?: boolean;
  /**
   * A callback function that is called when a date is selected.
   * This function receives the selected date as a parameter.
   * @TJS-type (date: Date) => void;
   */
  onSelect?: (date: Date) => void;
  /**
   * A callback function that is called when the date value changes.
   * This function receives the selected date or an array of dates (in the case of range selection) as a parameter.
   * @TJS-type (date: Date | Date[]) => void
   */
  onChange: (date: Date | Date[] | null) => void;
}
