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
import { BottomMenu } from "./components/bottomMenu";

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
          <>
            <Outlet />
            {" "}
            <BottomMenu />
          </>
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

  // return (
  //   <div className="App">
  //     <Routes>
  //       {AuthRoutes()}
  //
  //       <Route element={<ProtectedRoute />}>
  //         {MenuItemsRoutes()}
  //         {TechnologyRoutes()}
  //         <Route path="/" element={<Navigate to={URLS.dashboard} replace />} />
  //         <Route path={URLS.dashboard} element={<Dashboard />} />
  //       </Route>
  //     </Routes>
  //
  //     <BottomMenu />
  //   </div>
  // );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
