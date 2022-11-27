import { IconButton } from "@mui/material";
import React from "react";
import { Color } from "../../helpers/constants";
import { StyledTooltip } from "../styled-tooltip";

export interface PrimaryIconButtonProps {
  readonly icon: JSX.Element;
  readonly label: string;
  readonly onClick?: () => void;
  readonly to?: string;
  readonly disabled?: boolean;
  readonly tooltip?: string;
  readonly disabledTooltip?: string;
  readonly color?: Color;
}

export default function GdscIconButton({
  icon,
  onClick,
  to,
  label,
  tooltip,
  disabledTooltip,
  disabled,
  color,
}: PrimaryIconButtonProps) {
  return (
    <StyledTooltip
      color={disabled ? "warning" : color}
      title={disabled ? disabledTooltip || tooltip : tooltip}
    >
      <IconButton
        color={color ?? "default"}
        disabled={disabled}
        href={to ?? ""}
        aria-label={label}
        size="large"
        onClick={onClick}
      >
        {icon}
      </IconButton>
    </StyledTooltip>
  );
}
