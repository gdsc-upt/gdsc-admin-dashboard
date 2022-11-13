import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card, CardActions, CardContent, CardMedia, Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Technology } from "../models/technology";
import { deleteTechnology, getTechnologies } from "../technologies-api";
import { TECHNOLOGIES_URLS } from "../urls";
import logo from "../../../assets/images/Vector.png";

export function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    console.log("Fetch Technologies");
    getTechnologies().then(setTechnologies);
  }, []);

  const onDeleteClick = async (technologyId: string) => {
    await deleteTechnology(technologyId);
    getTechnologies().then(setTechnologies);
  };

  return (
    <>
      <p>Technologies</p>
      {/* eslint-disable-next-line react/no-array-index-key */}
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        style={{ minHeight: "80vh" }}
      >
        {technologies.map(t => (
          <Grid item xs={2} sm={4} md={3}>
            <Card key={t.id}>
              <CardMedia component="img" alt="logo image" image={logo} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {t.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t.description}
                </Typography>
              </CardContent>
              <CardActions>
                <button type="button" onClick={() => onDeleteClick(t.id)}>
                  Delete
                </button>
                <button type="button" onClick={() => console.log("Muie Dobre")}>
                  Edit
                </button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Link to={TECHNOLOGIES_URLS.addTechnology}>
        <button type="button">Add technology</button>
      </Link>
    </>
  );
}
