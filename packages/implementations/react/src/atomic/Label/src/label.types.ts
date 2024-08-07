import { HTMLAttributes, ReactNode } from "react";
import { LabelProperties } from "@rarui/typings";

interface LabelTyping extends LabelProperties {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type LabelProps = LabelTyping & HTMLAttributes<HTMLLabelElement>;
