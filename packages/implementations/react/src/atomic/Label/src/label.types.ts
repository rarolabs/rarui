import { HTMLAttributes, ReactNode } from "react";
import { LabelProps as LabelTyping } from "@rarui/typings";

interface LabelProperties extends LabelTyping {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type LabelProps = LabelProperties & HTMLAttributes<HTMLLabelElement>;
