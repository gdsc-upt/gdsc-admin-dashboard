import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import * as React from "react";
import {
  CSSObject, styled, Theme, useTheme,
} from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import DataObjectIcon from "@mui/icons-material/DataObject";
import LogoutIcon from "@mui/icons-material/Logout";
import { DrawerHeader, drawerWidth } from "./constants";
import GdscMenuList, { GdscMenuItem } from "./gdsc-menu-list";
import { URLS } from "../helpers/constants";
import { MENU_ITEMS_URLS } from "../features/menu-items/urls";
import { TECHNOLOGIES_URLS } from "../features/technologies/urls";
import { AUTH_URLS } from "../features/auth";

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const StyledDrawer = styled(Drawer, { shouldForwardProp: prop => prop !== "open" })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }),
);

export interface GdscDrawerProps {
  readonly open: boolean;
  readonly handleDrawerClose: () => void;
}

export default function GdscDrawer({ handleDrawerClose, open }: GdscDrawerProps) {
  const theme = useTheme();
  const upperMenuItems: readonly GdscMenuItem[] = [
    {
      text: "Home",
      icon: <DashboardIcon />,
      to: URLS.technologies,
    },
    {
      text: "Menu items",
      icon: <CategoryIcon />,
      to: MENU_ITEMS_URLS.menuItems,
    },
    {
      text: "Technologies",
      icon: <DataObjectIcon />,
      to: TECHNOLOGIES_URLS.technologies,
    },
  ];

  const lowerMenuItems: readonly GdscMenuItem[] = [
    {
      text: "Logout",
      icon: <LogoutIcon />,
      to: AUTH_URLS.logout,
    },
  ];

  return (
    <StyledDrawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <GdscMenuList open={open} items={upperMenuItems} />

      <Divider />

      <GdscMenuList open={open} items={lowerMenuItems} />
    </StyledDrawer>
  );
}
