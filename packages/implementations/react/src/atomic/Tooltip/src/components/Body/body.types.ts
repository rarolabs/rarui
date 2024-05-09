import { HTMLAttributes, ReactNode } from "react";
import { TooltipVariants } from "@rarui/styles";

interface Body {
  /**
   * The content of the modal header.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type BodyProperties = Body & Exclude<TooltipVariants, "inverted">;
export type BodyProps = BodyProperties & HTMLAttributes<HTMLElement>;
