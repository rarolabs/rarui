import { ReactNode, HTMLAttributes } from "react";
import { BadgeProps } from "@rarui-react/badge";
import { AvatarProps as AvatarTypings } from "@rarui/typings";

export interface AvatarProperties extends AvatarTypings {
  /**
   * The content of the Avatar. This prop accepts a ReactNode, allowing you to pass any React element or content as the Avatar's children.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type AvatarProps = AvatarProperties &
  Omit<AvatarProperties, "badge"> & {
    badge?: BadgeProps;
  } & HTMLAttributes<HTMLDivElement>;
