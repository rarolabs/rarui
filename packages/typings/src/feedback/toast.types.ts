import { ToastVariants } from "@rarui/styles";

export interface ToastTyping {
  /**
   *  Auto generated id.
   */
  id: string;
  /**
   * The title of the toast
   */
  title?: string;
  /**
   * Time in miliseconds to auto dismiss the component
   * @Default 4000
   */
  duration?: 4000 | 8000 | 16000;
  /**
   * Tells you whether or not Toast should close automatically.
   * @default true
   */
  autoClose?: boolean;
  /**
   * Receives a function to be executed when the Toast is closed.
   *
   */
  onClose?: () => void;
  /**
   * Specifies the width of the toast.
   * @default "420px"
   */
  width?: string;
}

export type ToastProperties = ToastTyping & ToastVariants;
