import { useContext } from "react";

import { ToastContext, ToastContextProps } from "../../context";

export const useToast: () => ToastContextProps = () => useContext(ToastContext);
