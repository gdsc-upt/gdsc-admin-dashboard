import React from "react";
import { RouteObject } from "react-router-dom";
import { MENUITEMS_URLS, TECHNOLOGIES_URLS } from "./urls";
import { TechnologiesPage } from "./pages/technologies-page";
import { IfLoggedIn } from "../auth";
import { MenuItems } from "../menu-items/pages/menu-items";

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

export function MenuItemRoutes(): RouteObject[] {
  return [
    {
      path: MENUITEMS_URLS.menuItems,
      element: (
        <IfLoggedIn>
          <MenuItems />
        </IfLoggedIn>
      ),
    },
  ];
}
