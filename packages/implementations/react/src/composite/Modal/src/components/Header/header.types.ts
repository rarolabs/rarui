import { HTMLAttributes, ReactNode } from "react";

export interface ModalHeaderTypings {
  /**
   * The content of the Modal header.
   * @TJS-type React.ReactNode;
   */
  children?: ReactNode;

  /**
   * The title to display in the Modal header.
   */
  title?: string;
  /**
   * The subtitle to display in the Modal header.
   */
  subtitle?: string;
}

export type ModalHeaderProperties = ModalHeaderTypings;

export type ModalHeaderProps = ModalHeaderProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
