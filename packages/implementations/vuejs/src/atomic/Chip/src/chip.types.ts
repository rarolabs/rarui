import { ButtonHTMLAttributes } from "vue";

export interface ChipProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  /**
   * Change the shape of the chip.
   * @default false
   */
  pill?: boolean;
  /**
   * Disables the chip, disallowing user interaction.
   * @default false
   */
  disabled?: boolean;
  /**
   * Displays a delete icon and adds user interaction.
   * @default false
   */
  closeable?: boolean;
  /**
   * The property is used to display an avatar on the beggining of the component.
   * @default ''
   */
  avatar?: string;
  /**
   * The property is used to change the appearence of the component.
   * @default false
   */
  selected?: boolean;
}

// selected
// pill -> boolean
