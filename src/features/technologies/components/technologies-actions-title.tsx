import { Box, Typography } from "@mui/material";
import React from "react";

export default function TechnologiesActionsTitle() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Typography variant="h5" component="div">
        Technologies
      </Typography>
    </Box>
  );
}
