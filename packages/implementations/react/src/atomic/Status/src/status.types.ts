import { ReactNode, HTMLAttributes } from "react";
import { StatusVariants } from "@rarui/styles";

interface StatusTyping {
  /**
   * The content of the status component. This prop accepts any React node.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
  /**
   * Specifies whether to display a dot indicator alongside the status text. When true, a dot is shown to visually represent the status.
   * @default true
   */
  dot?: boolean;
}

export type StatusProperties = StatusTyping & StatusVariants;
export type StatusProps = StatusProperties & HTMLAttributes<HTMLElement>;
