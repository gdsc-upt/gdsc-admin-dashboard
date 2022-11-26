import { createContext } from "react";

export interface IThemeModeContext {
  toggleColorMode: () => void;
}

export const ThemeModeContext = createContext<IThemeModeContext>({
  toggleColorMode: () => {},
});
