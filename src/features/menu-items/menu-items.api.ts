import { MenuItem } from "./models/menu-item";
import { MenuItemRequest } from "./models/menu-item.request";
import { get, post } from "../../services/api";

export function getMenuItems() {
  return get<MenuItem[]>("menu-items");
}

export function addMenuItem(menuItem: MenuItemRequest) {
  return post<MenuItem>("menu-items", menuItem);
}
