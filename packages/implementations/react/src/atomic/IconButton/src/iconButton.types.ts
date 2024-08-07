import { ReactNode, ButtonHTMLAttributes } from "react";
import { IconButtonProperties } from "@rarui/typings";

export interface IconButtonTyping extends IconButtonProperties {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  source: ReactNode;
}

export type IconButtonProps = IconButtonTyping &
  ButtonHTMLAttributes<HTMLButtonElement>;
