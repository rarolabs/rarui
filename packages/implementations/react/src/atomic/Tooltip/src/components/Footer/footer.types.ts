import { HTMLAttributes, ReactNode } from "react";
import { TooltipVariants } from "@rarui/styles";

interface Footer {
  /**
   * The content of the modal header.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type FooterProperties = Footer & Exclude<TooltipVariants, "inverted">;
export type FooterProps = FooterProperties & HTMLAttributes<HTMLElement>;
