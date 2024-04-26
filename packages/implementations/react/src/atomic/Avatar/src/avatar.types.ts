import { BadgeProps } from "@rarui-react/badge";
import { AvatarVariants } from "@rarui/styles";
import { ReactNode, HTMLAttributes } from "react";

export interface Avatar {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
  /**
   * Renders a badge component along withe the avatar.
   */
  badge?: BadgeProps;
}

export type AvatarProperties = Avatar & AvatarVariants;

export type AvatarProps = AvatarProperties & HTMLAttributes<HTMLDivElement>;
