import { ReactNode, ButtonHTMLAttributes } from "react";
import { IconButtonProps as IconButtonTyping } from "@rarui/typings";

export interface IconButtonProperties extends IconButtonTyping {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  source: ReactNode;
}

export type IconButtonProps = IconButtonProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
