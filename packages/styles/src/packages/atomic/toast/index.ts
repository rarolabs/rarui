import { sprinkle, styles } from "./rarui-toast.css";

export const toast = {
  classnames: { ...styles },
  sprinkle,
};

export type { ToastVariants, ToastSprinkle } from "./rarui-toast.types";
