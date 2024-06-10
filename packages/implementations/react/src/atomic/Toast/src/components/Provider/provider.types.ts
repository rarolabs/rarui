import { ReactNode } from "react";

export interface ToastProviderProperties {
  /**
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
  /**
   * Position of the toast.
   * @default bottom
   */
  placement?:
    | "bottomRight"
    | "bottomLeft"
    | "bottomCenter"
    | "topCenter"
    | "topRight"
    | "topLeft";
}

export type ToastProviderProps = ToastProviderProperties;
