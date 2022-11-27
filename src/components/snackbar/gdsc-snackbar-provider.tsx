import React, {
  useMemo, useState,
} from "react";
import { Alert, AlertColor, Snackbar } from "@mui/material";
import {
  AlertColors,
  ISnackbarContext,
  ISnackbarOptions,
  SnackbarContext,
} from "./gdsc-snackbar-context";

type ISnackbarOptionsInternal = ISnackbarOptions & {
  readonly message: string;
  readonly severity?: AlertColor;
};

export interface GdscSnackbarProps {
  readonly children: React.ReactNode;
}

export default function GdscSnackbarProvider({ children }: GdscSnackbarProps) {
  const [state, setState] = useState<ISnackbarOptionsInternal | undefined>(undefined);

  const showError = (message: string, options?: ISnackbarOptions) => setState({
    message,
    severity: AlertColors.error,
    ...options,
  });
  const showInfo = (message: string, options?: ISnackbarOptions) => setState({
    message,
    severity: AlertColors.info,
    ...options,
  });
  const showSuccess = (message: string, options?: ISnackbarOptions) => setState({
    message,
    severity: AlertColors.success,
    ...options,
  });
  const showWarning = (message: string, options?: ISnackbarOptions) => setState({
    message,
    severity: AlertColors.warning,
    ...options,
  });
  const close = () => setState(undefined);

  const snackbarContext = useMemo<ISnackbarContext>(
    () => ({
      showError,
      showInfo,
      showSuccess,
      showWarning,
      close,
    }),
    [],
  );

  return (
    <SnackbarContext.Provider value={snackbarContext}>
      {children}

      {state && (
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open
        autoHideDuration={state?.timeout ?? 2500}
        onClose={close}
      >
        <Alert onClose={close} severity={state?.severity ?? "success"} sx={{ width: "1000" }}>
          {state?.message}
        </Alert>
      </Snackbar>
      )}
    </SnackbarContext.Provider>
  );
}
