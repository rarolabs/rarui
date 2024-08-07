import { ReactNode, HTMLAttributes } from "react";
import { BadgeProps } from "@rarui-react/badge";
import { AvatarProperties } from "@rarui/typings";

export interface AvatarTyping {
  /**
   * The content of the Avatar. This prop accepts a ReactNode, allowing you to pass any React element or content as the Avatar's children.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
  /**
   * Renders a Badge component along with the Avatar. The badge prop accepts an object of type Badge, representing the Badge component.
   * @TJS-type Badge
   */
  badge?: BadgeProps;
}

export type AvatarProps = AvatarProperties &
  Omit<AvatarTyping, "badge"> & {
    badge?: BadgeProps;
  } & HTMLAttributes<HTMLDivElement>;
