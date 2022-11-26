import { Button, Typography } from "@mui/material";
import React from "react";

export interface PrimaryButtonProps {
  readonly onClick?: () => void;
  readonly to?: string;
  readonly text: string;
  readonly disabled?: boolean;
  readonly startIcon?: React.ReactNode;
  readonly endIcon?: React.ReactNode;
}

export default function PrimaryButton({
  to,
  onClick,
  text,
  disabled,
  startIcon,
  endIcon,
}: PrimaryButtonProps) {
  return (
    <Button
      color="primary"
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      variant="contained"
      onClick={onClick}
    >
      <Typography>{text}</Typography>
    </Button>
  );
}
