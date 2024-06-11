import { HTMLAttributes, ReactNode } from "react";
import { LabelVariants } from "@rarui/styles";

interface SelectTyping {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
  /**
   * The for attribute specifies which form element a label is bound to.
   */
  htmlFor?: string;
}

export type SelectProperties = SelectTyping & LabelVariants;

export type SelectProps = SelectProperties & HTMLAttributes<HTMLLabelElement>;
