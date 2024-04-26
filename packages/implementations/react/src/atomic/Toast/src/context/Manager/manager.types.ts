import { ToastProps } from "../../toast.types";

export interface ContextProps {
  closeToast: (id: string) => void;
  addToast: (
    toast: Omit<ToastProps, "autoClose" | "id"> & { id?: string },
  ) => void;
}
