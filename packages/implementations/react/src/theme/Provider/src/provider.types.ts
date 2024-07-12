import { HTMLAttributes } from "react";

export type Theme = "dark" | "base";

export interface ProviderProperties {
  theme?: Theme;
}

export type ProviderProps = ProviderProperties & HTMLAttributes<HTMLElement>;
