import { createContext } from "react";
import { ManagerProps } from "./manager.types";

export const Manager = createContext<ManagerProps>({} as ManagerProps);
