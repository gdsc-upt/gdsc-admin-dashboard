import React from "react";
import "./styles/general/App.scss";
import {
  createBrowserRouter, Navigate, Outlet, RouterProvider,
} from "react-router-dom";
import { useTitle } from "./hooks/general-hooks";
import { URLS } from "./helpers/constants";
import { Dashboard } from "./features/dashboard/dashboard";
import { AuthProvider, IfLoggedIn } from "./features/auth/services/auth-context";
import { AuthRoutes } from "./features/auth";
import { RedirectRoutes } from "./features/redirects/routes";
import { TechnologyRoutes } from "./features/technologies/routes";
import MiniDrawer from "./components/app-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    ),
    children: [
      ...AuthRoutes(),
      {
        path: "/",
        element: (
          <MiniDrawer>
            <Outlet />
          </MiniDrawer>
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
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
