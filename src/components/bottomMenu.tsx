import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import React, { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { MENU_ITEMS_URLS } from '../features/menu-items/urls';
import { URLS } from '../helpers/constants';
import { logout } from '../features/auth';
import { TECHNOLOGIES_URLS } from '../features/technologies/urls';

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
        <BottomNavigationAction
          component={Link}
          to={URLS.dashboard}
          label="Home"
          icon={<DashboardIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to={MENU_ITEMS_URLS.menuItems}
          label="Menu items"
          icon={<CategoryIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to={TECHNOLOGIES_URLS.technologies}
          label="Technologies"
          icon={<DataObjectIcon />}
        />
        <BottomNavigationAction onClick={logout} label="Logout" icon={<LogoutIcon />} />
      </BottomNavigation>
    </Box>
  );
}
