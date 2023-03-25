import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { getMenuItems } from "../menu-items.api";
import { MenuItem } from "../models/menu-item";
import MenuItemCard from "../components/menu-item-card";
import { AddMenuItemModal } from "../components/add-menu-item-modal";

export function MenuItems() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const fetchData = async () => {
    getMenuItems().then(setMenuItems);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
        {menuItems.map(mi => (
          <Grid item xs={3} key={mi.id} sx={{ display: "flex", justifyContent: "center" }}>
            <MenuItemCard menuItem={mi} />
          </Grid>
        ))}
      </Grid>
      <AddMenuItemModal fetchData={fetchData} />
    </>
  );
}
