import React, { useCallback, useMemo } from "react";
import { toast as toastStyles } from "@rarui/styles";

import { ToastContext } from "../../context";
import { ToastProps } from "../../toast.types";
import { Toast } from "../../Toast";

import { ToastProviderProps } from "./provider.types";

const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  placement = "bottomRight",
}) => {
  const [toasts, setToasts] = React.useState<ToastProps[]>([]);

  const addToast = useCallback(
    ({ id, ...newToast }: Omit<ToastProps, "id"> & { id?: string }): void => {
      setToasts((prevState) => [
        ...prevState,
        { ...newToast, id: id || crypto.randomUUID() },
      ]);
    },
    [],
  );

  const closeToast = useCallback((id: string) => {
    setToasts((prevState) => prevState.filter((toast) => toast.id !== id));
  }, []);

  const contextValue = useMemo(
    () => ({ closeToast, addToast }),
    [closeToast, addToast],
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div className={toastStyles.classnames.container({ placement })}>
        {toasts.map((toast, index) => (
          <div
            key={toast.id}
            className={toastStyles.classnames.wrapper({ placement })}
          >
            <Toast {...toast} title={`${index} - ${toast.title}`} />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

ToastProvider.displayName = "Toast.Provider";

export { ToastProvider };
