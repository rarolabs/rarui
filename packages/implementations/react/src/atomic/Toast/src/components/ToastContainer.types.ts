import { OlHTMLAttributes } from "react";

export interface ToastContainer {
  /**
   * The position of the container in the page
   * @Defautl bottomRight
   */
  position?: "bottomRight" | "bottomLeft" | "topRight" | "topLeft";
  /**
   * The size of the toast
   * @Default medium
   */
  size?: "small" | "medium" | "large";
}

export type ToastContainerProps = ToastContainer &
  OlHTMLAttributes<HTMLOListElement>;
