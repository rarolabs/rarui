import { HTMLAttributes, ReactNode } from "react";
import { ModalProperties } from "@rarui/typings";
import { ModalBody, ModalFooter, ModalHeader } from "./components";

export interface ModalComponents {
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
  Header: typeof ModalHeader;
}

export interface ModalTyping extends ModalProperties {
  /**
   * The content of the accordion.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type ModalProps = ModalTyping &
  Omit<HTMLAttributes<HTMLElement>, "color">;
