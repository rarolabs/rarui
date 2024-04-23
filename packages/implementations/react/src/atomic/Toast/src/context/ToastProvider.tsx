import React, { createContext, useCallback, useState } from "react";
import {
  ToastContextProps,
  ToastProviderProps,
  ToastStateProps,
} from "./toastProvider.types";

export const ToastContext = createContext({} as ToastContextProps);

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastStateProps[]>([]);

  const createToast = useCallback(
    ({
      message,
      appearance,
      variant = "solid",
    }: Omit<ToastStateProps, "id">) => {
      const nextToasts = [
        ...toasts,
        {
          id: crypto.randomUUID(),
          message,
          appearance,
          variant,
        },
      ];
      setToasts(nextToasts);
    },
    [toasts],
  );

  const dismissToast = useCallback(
    (id: `${string}-${string}-${string}-${string}-${string}`) => {
      const nextToasts = toasts.filter((toast) => toast.id !== id);
      setToasts(nextToasts);
    },
    [toasts],
  );

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
};

ToastProvider.displayName = "ToastProvider";

export { ToastProvider };
