import { HtmlHTMLAttributes, ReactNode } from "react";
import { ToastVariants } from "@rarui/styles";

import { ToastProvider } from "./components";

export interface ToastComponents {
  Provider: typeof ToastProvider;
}

export interface ToastTyping {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
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
   * @default true
   */
  onClose?: () => void;
}

export type ToastProperties = ToastTyping & ToastVariants;

export type ToastProps = ToastProperties &
  Omit<HtmlHTMLAttributes<HTMLDivElement>, "id" | "size">;
