import { Form, Formik } from "formik";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem as MenuItemMUI,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { StyledModal } from "../../../components/gdsc-modal";
import { useSnackbar } from "../../../components/snackbar";
import { addMenuItem } from "../menu-items.api";
import { MenuItem } from "../models/menu-item";
import { MenuItemTypes } from "../models/menu-item-types";

const initialValues: MenuItem = {
  id: "",
  name: "",
  type: 0,
  link: "",
  created: "",
  updated: "",
};

const inputStyle = {
  marginTop: 1,
  marginBottom: 1,
};

interface AddMenuItemModalProps {
    readonly fetchData: () => Promise<void>
}
export function AddMenuItemModal({ fetchData }: AddMenuItemModalProps) {
  const [open, setOpen] = useState(false);
  const snackBar = useSnackbar();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = async (menuItem: MenuItem) => {
    const response = await addMenuItem(menuItem);
    if (response.status === 201) {
      await fetchData();
      return handleClose();
    }

    snackBar.showError("Adding menu item went wrong!");
    return false;
  };

  return (
    <>
      <Button type="button" onClick={handleOpen}>Add menu item</Button>
      <StyledModal open={open} onClose={handleClose}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleChange }) => (
            <Form>
              <Typography color="primary" variant="h5" className="text-center">
                Add menu item
              </Typography>

              <TextField
                autoFocus
                fullWidth
                label="Name"
                variant="outlined"
                name="name"
                inputProps={{ maxLength: 30 }}
                onChange={handleChange}
                sx={inputStyle}
              />

              <TextField
                fullWidth
                label="Link"
                variant="outlined"
                name="link"
                inputProps={{ maxLength: 256 }}
                onChange={handleChange}
                sx={inputStyle}
              />

              {MenuItemTypeSelector(handleChange)}

              <Button tabIndex={-1} type="submit" disableRipple>
                Add
              </Button>
            </Form>
          )}
        </Formik>
      </StyledModal>
    </>
  );
}

function MenuItemTypeSelector(handleChange: (event: SelectChangeEvent<unknown>) => void) {
  return (
    <FormControl fullWidth sx={inputStyle}>
      <InputLabel>Type</InputLabel>
      <Select
        label="Type"
        onChange={handleChange}
      >
        {Object.entries(MenuItemTypes).map(([type, verbose]) => (
          <MenuItemMUI value={type}>{verbose}</MenuItemMUI>
        ))}
      </Select>
    </FormControl>
  );
}
