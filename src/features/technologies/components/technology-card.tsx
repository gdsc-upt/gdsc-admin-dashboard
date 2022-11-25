import {
  Card, CardActions, CardContent, CardMedia, IconButton, Typography,
} from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import logo from "../../../assets/images/Vector.png";
import { Technology } from "../models/technology";

interface TechnologyCardProps {
  technology: Technology;
  onDelete: (technologyId: string) => void;
  onEdit: (technologyId: string) => void;
}

export function TechnologyCard({ technology, onDelete, onEdit }: TechnologyCardProps) {
  return (
    <Card key={technology.id} sx={{ maxWidth: 350, width: "100%" }}>
      <CardMedia
        component="img"
        alt="logo image"
        image={logo}
        sx={{
          height: "200px",
          margin: "auto",
          width: "auto",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {technology.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          height={100}
          text-overflow="ellipsis"
          overflow="hidden"
        >
          {technology.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <IconButton aria-label="delete" size="large" onClick={() => onDelete(technology.id)}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="edit" size="large" onClick={() => onEdit(technology.id)}>
          <EditIcon fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
