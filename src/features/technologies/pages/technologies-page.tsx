import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import "../../../styles/pages/technologies.scss";
import { Technology } from "../models/technology";
import { deleteTechnology, getTechnologies } from "../technologies-api";
import { TECHNOLOGIES_URLS } from "../urls";
import { TechnologyCard } from "../components/technology-card";

export function TechnologiesPage() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    console.log("Fetch Technologies");
    getTechnologies().then(setTechnologies);
  }, []);

  const onDeleteClick = async (technologyId: string) => {
    console.log(technologyId);
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
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {technologies.map(t => (
          <Grid item xs={4}>
            <TechnologyCard
              technology={t}
              onDelete={id => onDeleteClick(id)}
              onEdit={() => console.log("Muie Dobre")}
            />
          </Grid>
        ))}
      </Grid>
      <Link to={TECHNOLOGIES_URLS.addTechnology}>
        <Button variant="text">Add technology</Button>
      </Link>
    </>
  );
}
