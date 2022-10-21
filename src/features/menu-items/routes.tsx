import React from "react";
import { Route } from "react-router-dom";
import { MENU_ITEMS_URLS } from "./urls";
import { MenuItems } from "./pages/menu-items";
import { AddMenuItem } from "./pages/add-menu-item";

export function MenuItemsRoutes() {
  return [
    <Route
      key={MENU_ITEMS_URLS.menuItems}
      path={MENU_ITEMS_URLS.menuItems}
      element={<MenuItems />}
    />,
    <Route
      key={MENU_ITEMS_URLS.addMenuItem}
      path={MENU_ITEMS_URLS.addMenuItem}
      element={<AddMenuItem />}
    />,
  ];
}
