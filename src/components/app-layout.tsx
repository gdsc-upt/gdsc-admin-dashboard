import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import GdscAppBar from "./gdsc-app-bar";
import { DrawerHeader } from "./constants";
import GdscDrawer from "./gdsc-drawer";

export interface MiniDrawerProps {
  readonly children: React.ReactNode;
}

export default function MiniDrawer({ children }: MiniDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <GdscAppBar open={open} handleDrawerOpen={() => setOpen(true)} />

      <GdscDrawer open={open} handleDrawerClose={() => setOpen(false)} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
