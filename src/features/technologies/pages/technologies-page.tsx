import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import "../../../styles/pages/technologies.scss";
import { Box } from "@mui/material";
import { useSnackbar } from "../../../components/snackbar/gdsc-snackbar-context";
import { Technology } from "../models/technology";
import { deleteTechnology, getTechnologies } from "../technologies-api";
import TechnologyCard from "../components/technology-card";
import AddTechnologyModal from "../components/add-technology-modal";
import ActionsBar from "../../../components/actions-bar";
import TechnologiesActionsTitle from "../components/technologies-actions-title";

export function TechnologiesPage() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const snackBar = useSnackbar();

  useEffect(() => {
    getTechnologies().then(setTechnologies);
  }, []);

  const fetchData = async () => {
    getTechnologies().then(setTechnologies);
  };

  const onDeleteClick = async (technologyId: string) => {
    await deleteTechnology(technologyId);
    getTechnologies().then(setTechnologies);
  };

  return (
    <>
      <Box sx={{ marginBottom: 2 }}>
        <ActionsBar
          middleContent={<TechnologiesActionsTitle />}
          rightContent={<AddTechnologyModal onAdded={fetchData} />}
        />
      </Box>

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
          <Grid item xs={3} key={t.id} sx={{ display: "flex", justifyContent: "center" }}>
            <TechnologyCard
              technology={t}
              onDelete={id => onDeleteClick(id)}
              onEdit={() => snackBar.showInfo("Edit")}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ marginTop: 2 }}>
        <ActionsBar rightContent={<AddTechnologyModal onAdded={fetchData} />} />
      </Box>
    </>
  );
}
