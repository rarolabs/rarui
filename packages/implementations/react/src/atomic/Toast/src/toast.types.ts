import { HtmlHTMLAttributes, ReactNode } from "react";
import { ToastProperties } from "@rarui/typings";

import { ToastProvider } from "./components";

export interface ToastComponents {
  Provider: typeof ToastProvider;
}

export interface ToastTyping extends ToastProperties {
  /**
   * The content of the Toast.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type ToastProps = ToastTyping &
  Omit<HtmlHTMLAttributes<HTMLDivElement>, "id" | "size">;
