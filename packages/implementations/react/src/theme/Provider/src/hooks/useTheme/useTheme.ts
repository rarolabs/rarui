import { useContext } from "react";

import {
  ThemeProviderManager,
  ThemeProviderManagerProps,
} from "../../contexts";

export const useTheme: () => ThemeProviderManagerProps = () =>
  useContext(ThemeProviderManager);
