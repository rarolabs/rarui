import { ReactNode, HTMLAttributes } from "react";
import { StatusProperties } from "@rarui/typings";

interface StatusTyping extends StatusProperties {
  /**
   * The content of the status component. This prop accepts any React node.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type StatusProps = StatusTyping & HTMLAttributes<HTMLElement>;
