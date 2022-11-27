import { createContext, useContext } from "react";

export const AlertColors = {
  error: "error",
  info: "info",
  success: "success",
  warning: "warning",
} as const;

export interface ISnackbarOptions {
  readonly timeout?: number;
}

export interface ISnackbarContext {
  showError(message: string, options?: ISnackbarOptions): void;

  showSuccess(message: string, options?: ISnackbarOptions): void;

  showInfo(message: string, options?: ISnackbarOptions): void;

  showWarning(message: string, options?: ISnackbarOptions): void;

  close(): void;
}

export const SnackbarContext = createContext<ISnackbarContext>({
  showError: () => {},
  showInfo: () => {},
  showSuccess: () => {},
  showWarning: () => {},
  close: () => {},
});

export const useSnackbar = () => useContext(SnackbarContext);
