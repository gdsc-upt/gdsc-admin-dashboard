import { RouteObject } from "react-router-dom";
import React from "react";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { IfNotLoggedIn } from "./services/auth-context";
import { LogoutPage } from "./pages/logout";

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
