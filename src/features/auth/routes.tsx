import { RouteObject } from "react-router-dom";
import React from "react";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { LogoutPage } from "./pages/logout";
import { IfNotLoggedIn } from "./components/if-not-logged-in";

export const AUTH_URLS = {
  login: "/login",
  register: "/register",
  logout: "/logout",
} as const;

export function AuthRoutes(loggedInRedirect = "/"): RouteObject[] {
  return [
    {
      path: AUTH_URLS.login,
      element: (
        <IfNotLoggedIn redirectTo={loggedInRedirect}>
          <LoginPage />
        </IfNotLoggedIn>
      ),
    },
    {
      path: AUTH_URLS.register,
      element: (
        <IfNotLoggedIn redirectTo={loggedInRedirect}>
          <RegisterPage />
        </IfNotLoggedIn>
      ),
    },
    {
      path: AUTH_URLS.logout,
      element: <LogoutPage />,
    },
  ];
}
