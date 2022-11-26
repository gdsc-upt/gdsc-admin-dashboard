import React, { createContext } from "react";
import "./styles/general/App.scss";
import {
  createBrowserRouter, Navigate, Outlet, RouterProvider,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useTitle } from "./hooks/general-hooks";
import { URLS } from "./helpers/constants";
import { Dashboard } from "./features/dashboard/dashboard";
import { AuthProvider, IfLoggedIn } from "./features/auth/services/auth-context";
import { AuthRoutes } from "./features/auth";
import { RedirectRoutes } from "./features/redirects/routes";
import { TechnologyRoutes } from "./features/technologies/routes";
import GdscLayout from "./components/app-layout";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <CssBaseline />
        <Outlet />
      </AuthProvider>
    ),
    children: [
      ...AuthRoutes(),
      {
        path: "/",
        element: (
          <GdscLayout>
            <Outlet />
          </GdscLayout>
        ),
        children: [
          {
            path: URLS.dashboard,
            element: (
              <IfLoggedIn>
                <Dashboard />
              </IfLoggedIn>
            ),
          },
          ...RedirectRoutes(),
          ...TechnologyRoutes(),
          {
            path: "*",
            element: <Navigate to={URLS.dashboard} />,
          },
          {
            path: "/",
            element: <Navigate to={URLS.dashboard} />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () => createTheme({
      palette: {
        mode,
      },
    }),
    [mode],
  );
  useTitle("Admin Dashboard GDSC");

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
