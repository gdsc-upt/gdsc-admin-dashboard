import * as React from "react";
import { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../App";

export default function LoginDisplay() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{ display: "flex" }}>
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>

      <Typography variant="h6" noWrap component="div">
        Welcome, Stranger!
      </Typography>
    </Box>
  );
}
