import React from "react";
import "./styles/general/App.scss";
import {
  createBrowserRouter, Navigate, Outlet, RouterProvider,
} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { useTitle } from "./hooks/general-hooks";
import { URLS } from "./helpers/constants";
import { Dashboard } from "./features/dashboard/dashboard";
import { AuthProvider, IfLoggedIn } from "./features/auth";
import { RedirectRoutes } from "./features/redirects/routes";
import { TechnologyRoutes } from "./features/technologies/routes";
import GdscLayout from "./components/app-layout";
import GdscTheme from "./components/theme/gdsc-theme";
import { AuthRoutes } from "./features/auth/routes";

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
  useTitle("Admin Dashboard GDSC");

  return (
    <GdscTheme>
      <RouterProvider router={router} />
    </GdscTheme>
  );
}
