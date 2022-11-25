import Box from "@mui/material/Box";
import React, { ReactNode } from "react";
import { Paper } from "@mui/material";

export interface ActionsBarProps {
  readonly children?: ReactNode;
  readonly leftContent?: ReactNode;
  readonly middleContent?: ReactNode;
  readonly rightContent?: ReactNode;
}

export default function ActionsBar({
  children,
  leftContent,
  middleContent,
  rightContent,
}: ActionsBarProps) {
  return (
    <Paper elevation={2}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: 60,
          alignItems: "center",
        }}
      >
        {children ?? (
          <>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                padding: 1,
              }}
            >
              {leftContent}
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: 1,
              }}
            >
              {middleContent}
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
                padding: 1,
              }}
            >
              {rightContent}
            </Box>
          </>
        )}
      </Box>
    </Paper>
  );
}
