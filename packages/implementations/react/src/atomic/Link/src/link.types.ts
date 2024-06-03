import { ReactNode, HTMLAttributes } from "react";
import { LinkVariants } from "@rarui/styles";

interface LinkTyping {
  /**
   * The content of the link.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type LinkProperties = LinkTyping & LinkVariants;

export type _LinkProps = LinkProperties & HTMLAttributes<HTMLElement>;
