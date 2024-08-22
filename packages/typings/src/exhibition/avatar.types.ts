import { AvatarVariants } from "@rarui/styles";
import { BadgeProps } from "./badge.types";

interface AvatarTypings {
  /**
   * Renders a Badge component along with the Avatar. The badge prop accepts an object of type Badge, representing the Badge component.
   * @TJS-type Badge
   */
  badge?: BadgeProps;
}

export type AvatarProps = AvatarTypings & AvatarVariants;
