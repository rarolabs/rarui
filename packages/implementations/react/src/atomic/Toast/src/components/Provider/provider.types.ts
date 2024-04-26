import { ReactNode } from "react";

export interface ProviderProperties {
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

export type ProviderProps = ProviderProperties;
