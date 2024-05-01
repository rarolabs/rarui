import { HTMLAttributes, ReactNode } from "react";
import { LabelVariants } from "@rarui/styles";

interface Label {
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

export type LabelProperties = Label & LabelVariants;

export type LabelProps = LabelProperties & HTMLAttributes<HTMLLabelElement>;
