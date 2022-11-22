import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface GdscMenuItem {
  readonly text: string;
  readonly icon: ReactNode;
  readonly onClick?: () => void;
  readonly to?: string;
}

export interface GdscMenuListProps {
  readonly open: boolean;
  readonly items: readonly GdscMenuItem[];
}

export default function GdscMenuList({ open, items }: GdscMenuListProps) {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={item.onClick}
            component={item.to ? Link : "div"}
            to={item.to}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
