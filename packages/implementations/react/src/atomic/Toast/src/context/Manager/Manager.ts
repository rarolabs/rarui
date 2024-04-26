import { createContext } from "react";
import { ContextProps } from "./manager.types";

export const Context = createContext<ContextProps>({} as ContextProps);
