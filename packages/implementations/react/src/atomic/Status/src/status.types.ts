import { ReactNode, HTMLAttributes } from "react";
import { StatusProps as StatusTyping } from "@rarui/typings";

interface StatusProperties extends StatusTyping {
  /**
   * The content of the status component. This prop accepts any React node.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type StatusProps = StatusProperties & HTMLAttributes<HTMLElement>;
