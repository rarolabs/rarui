import { HtmlHTMLAttributes, ReactNode } from "react";

export interface Toast {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
  /**
   *  Auto genetated id.
   */
  id: `${string}-${string}-${string}-${string}-${string}`;
  /**
   * Change the appearance of the toast.
   */
  appearance: "info" | "error" | "success" | "warning" | "neutral" | "invert";
  /**
   * Change the variant of the toast.
   * @Default solid
   */
  variant?: "solid" | "tonal" | "border";
  /**
   * The title of the toast
   */
  title?: string;
  /**
   * The size of the toast
   * @Default medium
   */
  size?: "small" | "medium" | "large";
}

export type ToastProperties = Toast;

export type ToastProps = ToastProperties &
  Omit<HtmlHTMLAttributes<HTMLDivElement>, "id">;
