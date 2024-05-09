import { HTMLAttributes, ReactNode } from "react";
import { BannerVariants } from "@rarui/styles";

export interface BannerTyping {
  /**
   * The content to be displayed within the banner message. This can include text, icons, or any other ReactNode.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
  /**
   * A function to be called when the user closes the banner. This function is typically used to handle the closing action.
   * @TJS-type () => void;
   */
  onClose?: () => void;
  appearance?:
    | "brand"
    | "error"
    | "info"
    | "warning"
    | "neutral"
    | "inverted"
    | undefined;
  floating?: boolean | undefined;
}

export type BannerProperties = BannerTyping & BannerVariants;
export type BannerProps = BannerProperties & HTMLAttributes<HTMLDivElement>;
