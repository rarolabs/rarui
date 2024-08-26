import { ReactNode } from "react";
import { ToastProviderProps as ToastProviderTyping } from "@rarui/typings";

interface ToastProviderProperties extends ToastProviderTyping {
  /**
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type ToastProviderProps = ToastProviderProperties;
