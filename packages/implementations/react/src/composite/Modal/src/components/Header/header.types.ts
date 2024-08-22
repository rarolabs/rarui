import { HTMLAttributes, ReactNode } from "react";
import { ModalHeaderProps as ModalHeaderTypings } from "@rarui/typings";

export interface ModalHeaderProperties extends ModalHeaderTypings {
  /**
   * The content of the Modal header.
   * @TJS-type React.ReactNode;
   */
  children?: ReactNode;
}

export type ModalHeaderProps = ModalHeaderProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
