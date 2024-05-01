import { ReactNode, HTMLAttributes } from "react";
import { LinkVariants } from "@rarui/styles";

interface Link {
  /**
   * The content of the link.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type LinkProperties = Link & LinkVariants;

export type _LinkProps = LinkProperties & HTMLAttributes<HTMLElement>;
