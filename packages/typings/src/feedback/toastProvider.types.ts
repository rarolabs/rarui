export interface ToastProviderProperties {
  /**
   * Position of the toast.
   * @default bottomRight
   */
  placement?:
    | "bottomRight"
    | "bottomLeft"
    | "bottomCenter"
    | "topCenter"
    | "topRight"
    | "topLeft";
}
