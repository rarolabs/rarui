import { HTMLAttributes, ReactNode } from "react";
import { BannerProps as BannerTyping } from "@rarui/typings";

export interface BannerProperties extends BannerTyping {
  /**
   * The content to be displayed within the banner message. This can include text, icons, or any other ReactNode.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type BannerProps = BannerProperties & HTMLAttributes<HTMLDivElement>;
