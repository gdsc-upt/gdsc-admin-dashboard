import React from "react";
import { RouteObject } from "react-router-dom";
import { REDIRECTS_URLS } from "./urls";
import { RedirectsPage } from "./pages/redirects-page";
import { IfLoggedIn } from "../auth";

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
