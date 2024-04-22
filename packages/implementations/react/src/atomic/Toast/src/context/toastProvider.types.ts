import { ReactNode } from "react";

export interface ToastContextProps {
  toasts: any;
  createToast: ({ message, variant }: Omit<ToastStateProps, "id">) => void;
  dismissToast: (
    id: `${string}-${string}-${string}-${string}-${string}`,
  ) => void;
}

export interface ToastProviderProps {
  /**
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export interface ToastStateProps {
  id: `${string}-${string}-${string}-${string}-${string}`;
  message: string;
  variant: "info" | "error" | "success" | "warning" | "neutral" | "invert";
}
