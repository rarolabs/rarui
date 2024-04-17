import { ReactNode, HTMLAttributes } from "react";
import { StatusVariants } from "@rarui/styles";

interface StatusBase {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type StatusProperties = StatusBase & StatusVariants;
export type StatusProps = StatusProperties & HTMLAttributes<HTMLElement>;
