import { HTMLAttributes, ReactNode } from "react";
import { BannerProperties } from "@rarui/typings";

export interface BannerTyping extends BannerProperties {
  /**
   * The content to be displayed within the banner message. This can include text, icons, or any other ReactNode.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type BannerProps = BannerTyping & HTMLAttributes<HTMLDivElement>;
