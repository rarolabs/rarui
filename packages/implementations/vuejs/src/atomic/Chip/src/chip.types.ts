import { ButtonHTMLAttributes } from "vue";

export interface ChipProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  /**
   * Change the shape of the chip.
   * @default pill
   */
  shape?: "pill" | "rounded";
  /**
   * Disables the chip, disallowing user interaction.
   * @default false
   */
  disabled?: boolean;
  /**
   * Disables the chip, disallowing user interaction.
   * @default false
   */
  closeable?: boolean;
  /**
   * The property is used to display an avatar on the beggining of the component.
   * @default ''
   */
  avatar?: string;
}

// selected
// pill -> boolean
