import { InputHTMLAttributes, ReactNode } from "react";
import { Placement } from "@floating-ui/react";
import { SelectProps as SelectTyping } from "@rarui/typings";

interface SelectProperties extends SelectTyping {
  /**
   * Element to be rendered inside the Box of options component.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
  /**
   * Position of the select.
   * @default bottom
   */
  position?: Placement;
}

export type SelectProps = SelectProperties &
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "size" | "options" | "onChange"
  >;
