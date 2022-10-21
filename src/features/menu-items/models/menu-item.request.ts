import { MenuItemType } from "./menu-item-types";

export interface MenuItemRequest {
  readonly name: string;
  readonly type: MenuItemType;
  readonly link: string;
}
