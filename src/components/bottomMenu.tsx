import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import React, { useState } from 'react';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import { MENU_ITEMS_URLS } from '../features/menu-items/urls';
import { URLS } from '../helpers/constants';
import { AUTH_URLS } from '../features/auth';

export function BottomMenu() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to={URLS.dashboard}>
          <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
        </Link>

        <Link to={MENU_ITEMS_URLS.menuItems}>
          <BottomNavigationAction label="Menu items" icon={<FavoriteIcon />} />
        </Link>

        <Link to={AUTH_URLS.logout}>
          <BottomNavigationAction label="Logout" icon={<LocationOnIcon />} />
        </Link>
      </BottomNavigation>
    </Box>
  );
}
