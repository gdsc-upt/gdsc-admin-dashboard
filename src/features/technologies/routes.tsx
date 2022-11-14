import React from "react";
import { RouteObject } from "react-router-dom";
import { TECHNOLOGIES_URLS } from "./urls";
import { IfLoggedIn } from "../auth/services/auth-context";
import { TechnologiesPage } from "./pages/technologies-page";

export function TechnologyRoutes(): RouteObject[] {
  return [
    {
      path: TECHNOLOGIES_URLS.technologies,
      element: (
        <IfLoggedIn>
          <TechnologiesPage />
        </IfLoggedIn>
      ),
    },
  ];
}
