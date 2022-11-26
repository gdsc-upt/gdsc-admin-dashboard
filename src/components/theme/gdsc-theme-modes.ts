import { ValuesOf } from "../../helpers/types";

export const ThemeModes = {
  light: "light",
  dark: "dark",
} as const;

export type ThemeMode = ValuesOf<typeof ThemeModes>;

export const THEME_MODE_KEY = "gdsc-admin-theme-mode";

export function getStoredThemeMode() {
  const storedThemeMode = localStorage.getItem(THEME_MODE_KEY);
  return storedThemeMode === ThemeModes.dark ? ThemeModes.dark : ThemeModes.light;
}
