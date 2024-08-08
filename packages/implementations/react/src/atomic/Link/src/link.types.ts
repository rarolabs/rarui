import { ReactNode, HTMLAttributes } from "react";
import { LinkProperties } from "@rarui/typings";

export interface LinkTyping {
  /**
   * The content of the link.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type _LinkProps = LinkTyping &
  LinkProperties &
  HTMLAttributes<HTMLElement>;
