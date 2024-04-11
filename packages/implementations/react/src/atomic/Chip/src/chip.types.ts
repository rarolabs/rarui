import { HtmlHTMLAttributes, ReactNode } from "react";

export interface ChipProperties {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
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
   */
  avatar?: string;
  /**
   * The property is used to change the appearence of the component.
   * @default false
   */
  selected?: boolean;
}

export type ChipProps = ChipProperties & HtmlHTMLAttributes<HTMLDivElement>;
