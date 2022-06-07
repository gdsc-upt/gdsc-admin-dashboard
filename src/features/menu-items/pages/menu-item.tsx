import { MenuItem } from '../models/menu-item';

export interface MenuItemProps {
  readonly menuItem: MenuItem;
}

export function MenuItem(props: MenuItemProps) {
  const { menuItem } = props;
}
