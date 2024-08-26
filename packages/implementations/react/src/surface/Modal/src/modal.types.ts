import { HTMLAttributes, ReactNode } from "react";
import { ModalProps as ModalTyping } from "@rarui/typings";
import { ModalBody, ModalFooter, ModalHeader } from "./components";

export interface ModalComponents {
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
  Header: typeof ModalHeader;
}

export interface ModalProperties extends ModalTyping {
  /**
   * The content of the accordion.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type ModalProps = ModalProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
