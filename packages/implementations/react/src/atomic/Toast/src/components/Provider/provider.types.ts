import { ReactNode } from "react";
import { ToastProviderProperties } from "@rarui/typings";

export interface ToastProviderProps extends ToastProviderProperties {
  /**
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}
