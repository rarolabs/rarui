import { HTMLAttributes, ReactNode } from "react";
import { ModalSprinkle, ModalVariants } from "@rarui/styles";
import { ModalBody, ModalFooter, ModalHeader } from "./components";

export interface ModalComponents {
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
  Header: typeof ModalHeader;
}

export interface ModalTyping {
  /**
   * The content of the accordion.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
  /**
   * Whether the modal is open or not.
   */
  open: boolean;
  /**
   * Callback fired when the component requests to be closed.
   * @TJS-type (open: boolean) => void;
   */
  onDismiss: (open: boolean) => void;
  /**
   * Id to be embedded in the portal element
   */
  portalId?: string;
}

export type ModalProperties = ModalTyping & ModalSprinkle & ModalVariants;

export type ModalProps = ModalProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
