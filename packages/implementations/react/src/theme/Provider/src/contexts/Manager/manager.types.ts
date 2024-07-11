import { MutableRefObject } from "react";
import { Theme } from "../../provider.types";

export interface ThemeProviderManagerProps {
  refThemeProvider: MutableRefObject<null | HTMLDivElement>;
  currentTheme: Theme;
}
