import { HTMLAttributes, ReactNode } from "react";
import { BannerVariants } from "@rarui/styles";

export interface Banner {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
  /**
   *
   */
  onClose?: () => void;
}

export type BannerProperties = Banner & BannerVariants;

export type BannerProps = BannerProperties & HTMLAttributes<HTMLDivElement>;
