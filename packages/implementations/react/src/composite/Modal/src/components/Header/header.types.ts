import { HTMLAttributes, ReactNode } from "react";
import { ModalHeaderProperties } from "@rarui/typings";

export interface ModalHeaderTypings extends ModalHeaderProperties {
  /**
   * The content of the Modal header.
   * @TJS-type React.ReactNode;
   */
  children?: ReactNode;
}

export type ModalHeaderProps = ModalHeaderProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
