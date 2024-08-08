import { BannerVariants } from "@rarui/styles";

export interface BannerTyping {
  /**
   * A function to be called when the user closes the banner. This function is typically used to handle the closing action.
   * @TJS-type () => void;
   */
  onClose?: () => void;
  /**
   * The appearance of the banner. This can be used to set the color of the banner.
   * @TJS-type "brand" | "error" | "info" | "warning" | "neutral" | "inverted";
   */
  appearance?:
    | "brand"
    | "error"
    | "info"
    | "warning"
    | "neutral"
    | "inverted"
    | undefined;

  /**
   * Determines whether the banner message should float above the content. This can be useful for ensuring the message remains visible even as the user scrolls.
   * @TJS-type boolean;
   */
  floating?: boolean;
}

export type BannerProperties = BannerTyping & BannerVariants;
