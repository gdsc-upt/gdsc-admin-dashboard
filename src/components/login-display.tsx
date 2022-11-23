import * as React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function LoginDisplay() {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography variant="h6" noWrap component="div">
        Welcome, Stranger!
      </Typography>
    </Box>
  );
}
