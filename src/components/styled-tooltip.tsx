import {
  styled, Tooltip, tooltipClasses, TooltipProps,
} from "@mui/material";
import React from "react";
import { Color } from "../helpers/constants";

export const StyledTooltip = styled(
  ({
    className, children, color, ...props
  }: TooltipProps & { color?: Color }) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Tooltip {...props} classes={{ popper: className }}>
      <span>{children}</span>
    </Tooltip>
  ),
)(({ color, theme: { palette, shadows } }) => {
  const colorRecord: Record<string, any> = palette[color ?? "background"];

  return {
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: colorRecord[palette.mode] ?? colorRecord.default,
      boxShadow: shadows[1],
      fontSize: 11,
    },
  };
});
