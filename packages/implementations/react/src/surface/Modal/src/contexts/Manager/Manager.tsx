import { createContext } from "react";
import { ModalManagerProps } from "./manager.types";

export const ModalManager = createContext<ModalManagerProps>(
  {} as ModalManagerProps,
);
