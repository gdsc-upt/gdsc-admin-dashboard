import React from "react";
import { RouteObject } from "react-router-dom";
import { TECHNOLOGIES_URLS } from "./urls";
import { TechnologiesPage } from "./pages/technologies-page";
import { IfLoggedIn } from "../auth";

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
