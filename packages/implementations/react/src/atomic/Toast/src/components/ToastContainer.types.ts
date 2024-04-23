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
  /**
   * Time in miliseconds to auto dismiss the component. 0 means to not dismiss automatically.
   * @Default 0
   */
  duration?: 0 | 4000 | 8000 | 16000;
}

export type ToastContainerProps = ToastContainer &
  OlHTMLAttributes<HTMLOListElement>;
