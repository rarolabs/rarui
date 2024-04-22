import { toast as toastStyle } from "@rarui/styles";
import React, { useContext } from "react";
import { ToastContext } from "../context/ToastProvider";
import { Toast } from "../Toast";
import { ToastStateProps } from "../context/toastProvider.types";
import { ToastContainerProps } from "./ToastContainer.types";

const ToastContainer: React.FC<ToastContainerProps> = ({
  position = "bottomRight",
  size = "medium",
}) => {
  const { toasts } = useContext(ToastContext);
  return (
    <ol className={toastStyle.classnames.toastContainer({ position })}>
      {toasts.map((toast: ToastStateProps) => (
        <li key={toast.id} className={toastStyle.classnames.toastWrapper}>
          <Toast id={toast.id} variant={toast.variant} size={size}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
};

export default ToastContainer;
