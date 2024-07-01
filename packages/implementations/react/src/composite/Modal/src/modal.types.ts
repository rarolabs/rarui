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
   * Specifies the ID of the portal element where the modal should be rendered.
   * This can be useful for rendering the modal in a different part of the DOM, such as a modal or overlay.
   */
  portalId?: string;
  /**
   * Callback fired when the component requests to be closed.
   * @TJS-type (open: boolean) => void;
   */
  onDismiss: (open: boolean) => void;
}

export type ModalProperties = ModalTyping & ModalSprinkle & ModalVariants;

export type ModalProps = ModalProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
