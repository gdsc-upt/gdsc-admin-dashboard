import * as React from "react";
import { ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import GdscAppBar from "./gdsc-app-bar";
import { DrawerHeader } from "./constants";
import GdscDrawer from "./gdsc-drawer";

export interface GdscLayoutProps {
  readonly children: ReactNode;
}

export default function GdscLayout({ children }: GdscLayoutProps) {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <GdscAppBar open={open} handleDrawerOpen={openDrawer} />

      <Box onMouseEnter={openDrawer} onMouseLeave={closeDrawer}>
        <GdscDrawer open={open} handleDrawerClose={closeDrawer} />
      </Box>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
