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
  badge?: Pick<BadgeProps, "appearance" | "children" | "size" | "variant">;
}

export type AvatarProperties = Avatar & AvatarVariants;

export type AvatarProps = Omit<AvatarProperties, "badge"> & {
  badge?: BadgeProps;
} & HTMLAttributes<HTMLDivElement>;
