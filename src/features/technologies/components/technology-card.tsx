import {
  Card, CardActions, CardContent, CardMedia, Typography,
} from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import logo from "../../../assets/images/Vector.png";
import { Technology } from "../models/technology";
import GdscIconButton from "../../../components/buttons/gdsc-icon-button";

interface TechnologyCardProps {
  readonly technology: Technology;
  readonly onDelete: (technologyId: string) => void;
  readonly onEdit: (technologyId: string) => void;
}

export default function TechnologyCard({ technology, onDelete, onEdit }: TechnologyCardProps) {
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

      <CardContent className="flex-column">
        <Typography
          color="primary"
          sx={{ alignSelf: "center" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {technology.name}
        </Typography>

        <Typography
          variant="body2"
          color="secondary"
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
        }}
      >
        <GdscIconButton
          onClick={() => onDelete(technology.id)}
          color="error"
          tooltip="Delete this technology"
          label="Delete"
          icon={<DeleteIcon />}
        />

        <GdscIconButton
          onClick={() => onEdit(technology.id)}
          color="primary"
          tooltip="Open a modal to edit this technology"
          label="Edit"
          icon={<EditIcon />}
        />
      </CardActions>
    </Card>
  );
}
