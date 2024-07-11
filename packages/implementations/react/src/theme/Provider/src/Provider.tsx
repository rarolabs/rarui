import React, { useMemo } from "react";

import { themes } from "./provider.definitions";
import { ProviderProps } from "./provider.types";
import { ThemeProviderManager } from "./contexts";

const ThemeProvider: React.FC<ProviderProps> = ({
  children,
  theme = "base",
  ...rest
}) => {
  const refThemeProvider = React.useRef(null);

  const context = useMemo(
    () => ({ refThemeProvider, currentTheme: theme }),
    [refThemeProvider, theme],
  );

  return (
    <div
      id="theme-provider"
      className={themes[theme]}
      {...rest}
      ref={refThemeProvider}
    >
      <ThemeProviderManager.Provider value={context}>
        {children}
      </ThemeProviderManager.Provider>
    </div>
  );
};

ThemeProvider.displayName = "ThemeProvider";

export { ThemeProvider };
