import { createContext } from "react";
import { ManagerItemProps } from "./managerItem.types";

export const ManagerItem = createContext<ManagerItemProps>(
  {} as ManagerItemProps,
);
