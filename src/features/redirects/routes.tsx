import React from "react";
import { RouteObject } from "react-router-dom";
import { REDIRECTS_URLS } from "./urls";
import { IfLoggedIn } from "../auth/services/auth-context";
import { RedirectsPage } from "./pages/redirects-page";

export function RedirectRoutes(): RouteObject[] {
  return [
    {
      path: REDIRECTS_URLS.redirects,
      element: (
        <IfLoggedIn>
          <RedirectsPage />
        </IfLoggedIn>
      ),
    },
  ];
}
