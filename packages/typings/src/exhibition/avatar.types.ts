import { AvatarVariants } from "@rarui/styles";
import { BadgeProperties } from "./badge.types";

interface AvatarTypings {
  /**
   * Renders a Badge component along with the Avatar. The badge prop accepts an object of type Badge, representing the Badge component.
   * @TJS-type Badge
   */
  badge?: BadgeProperties;
}

export type AvatarProperties = AvatarTypings & AvatarVariants;
