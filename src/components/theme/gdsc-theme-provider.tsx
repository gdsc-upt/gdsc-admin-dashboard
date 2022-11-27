import React, { useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { IThemeModeContext, ThemeModeContext } from "./gdsc-theme-context";
import {
  getStoredThemeMode, THEME_MODE_KEY, ThemeMode, ThemeModes,
} from "./gdsc-theme-modes";
import { DefaultProps } from "../../helpers/types";

export default function GdscThemeProvider({ children }: DefaultProps) {
  const [mode, setMode] = useState<ThemeMode>(getStoredThemeMode());

  function toggleColorMode() {
    setMode(prevMode => {
      const newMode = prevMode === ThemeModes.light ? ThemeModes.dark : ThemeModes.light;
      localStorage.setItem(THEME_MODE_KEY, newMode);
      return newMode;
    });
  }

  const themeMode = useMemo<IThemeModeContext>(
    () => ({ toggleColorMode }),
    [],
  );

  const theme = useMemo<Theme>(
    () => createTheme({ palette: { mode } }),
    [mode],
  );

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
