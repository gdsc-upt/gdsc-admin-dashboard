import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useEffectAsync } from '../../../hooks/async-hooks';
import { getMenuItems } from '../menu-items.api';
import { MenuItem } from '../models/menu-item';
import { MENU_ITEMS_URLS } from '../urls';

export function MenuItems() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffectAsync(async () => {
    console.log('Fetch MenuItems');
    setMenuItems(await getMenuItems());
  });

  return (
    <div>
      {menuItems.map(item => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>{item.link}</div>
        </div>
      ))}

      <Link to={MENU_ITEMS_URLS.addMenuItem}>
        <Button type="button">Add menu item</Button>
      </Link>
    </div>
  );
}
