import {
  Card, CardActions, CardContent, Typography,
} from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import GdscIconButton from "../../../components/buttons/gdsc-icon-button";
import { MenuItem } from "../models/menu-item";

interface MenuItemCardProps {
    readonly menuItem: MenuItem;
    // readonly onDelete: (menuItemId: string) => void;
    // readonly onEdit: (menuItemId: string) => void;
}

export default function MenuItemCard({ menuItem }: MenuItemCardProps) {
  return (
    <Card key={menuItem.id} sx={{ maxWidth: 350, width: "100%" }}>
      <CardContent className="flex-column">
        <Typography
          color="primary"
          sx={{ alignSelf: "center" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {menuItem.name}
        </Typography>

        <Typography
          variant="body2"
          color="secondary"
          height={100}
          text-overflow="ellipsis"
          overflow="hidden"
        >
          {menuItem.link}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <GdscIconButton
          // onClick={() => onDelete(menuItem.id)}
          color="error"
          tooltip="Delete this menu item"
          label="Delete"
          icon={<DeleteIcon />}
        />

        <GdscIconButton
          // onClick={() => onEdit(menuItem.id)}
          color="primary"
          tooltip="Open a modal to edit this menu item"
          label="Edit"
          icon={<EditIcon />}
        />
      </CardActions>
    </Card>
  );
}
