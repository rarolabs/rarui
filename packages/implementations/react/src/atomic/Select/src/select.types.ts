import { InputHTMLAttributes, ReactNode } from "react";
import { Placement } from "@floating-ui/react";
import { SelectProperties } from "@rarui/typings";

interface SelectTyping extends SelectProperties {
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

export type SelectProps = SelectTyping &
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "size" | "options" | "onChange"
  >;
