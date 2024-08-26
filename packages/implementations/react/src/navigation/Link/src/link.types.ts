import { ReactNode, HTMLAttributes } from "react";
import { LinkProps as LinkTyping } from "@rarui/typings";

export interface LinkProperties extends LinkTyping {
  /**
   * The content of the link.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type _LinkProps = LinkProperties & HTMLAttributes<HTMLElement>;
