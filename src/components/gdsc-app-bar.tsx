import { styled } from "@mui/material/styles";
import AppBar, { AppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Box } from "@mui/material";
import { drawerWidth } from "./constants";
import LoginDisplay from "./login-display";

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: prop => prop !== "open",
})<AppBarProps & { open: boolean }>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export interface GdscAppBarProps {
  readonly open: boolean;
  readonly handleDrawerOpen: () => void;
}

export default function GdscAppBar({ handleDrawerOpen, open }: GdscAppBarProps) {
  return (
    <StyledAppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            GDSC Admin Dashboard
          </Typography>

          <LoginDisplay />
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}
