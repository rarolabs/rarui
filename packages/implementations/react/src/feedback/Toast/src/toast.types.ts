import { HtmlHTMLAttributes, ReactNode } from "react";
import { ToastProps as ToastTyping } from "@rarui/typings";

import { ToastProvider } from "./components";

export interface ToastComponents {
  Provider: typeof ToastProvider;
}

export interface ToastProperties extends ToastTyping {
  /**
   * The content of the Toast.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type ToastProps = ToastProperties &
  Omit<HtmlHTMLAttributes<HTMLDivElement>, "id" | "size">;
