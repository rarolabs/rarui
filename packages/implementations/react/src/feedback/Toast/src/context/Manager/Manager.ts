import { createContext } from "react";
import { ToastContextProps } from "./manager.types";

export const ToastContext = createContext<ToastContextProps>(
  {} as ToastContextProps,
);
