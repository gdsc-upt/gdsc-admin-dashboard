import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import "../../../styles/pages/technologies.scss";
import { Technology } from "../models/technology";
import { deleteTechnology, getTechnologies } from "../technologies-api";
import { TechnologyCard } from "../components/technology-card";
import { AddTechnology } from "./add-technology";

export function TechnologiesPage() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    console.log("test");
    getTechnologies().then(setTechnologies);
  }, []);

  const fetchData = async () => {
    getTechnologies().then(setTechnologies);
  };

  const onDeleteClick = async (technologyId: string) => {
    console.log(technologyId);
    await deleteTechnology(technologyId);
    getTechnologies().then(setTechnologies);
  };

  return (
    <>
      <h2>Technologies</h2>
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
          <Grid item xs={4} key={t.id}>
            <TechnologyCard
              technology={t}
              onDelete={id => onDeleteClick(id)}
              onEdit={() => console.log("Muie Dobre")}
            />
          </Grid>
        ))}
      </Grid>
      <AddTechnology onAdded={fetchData} />
    </>
  );
}
