import { createContext } from "react";
import { ThemeProviderManagerProps } from "./manager.types";

export const ThemeProviderManager = createContext<ThemeProviderManagerProps>(
  {} as ThemeProviderManagerProps,
);
