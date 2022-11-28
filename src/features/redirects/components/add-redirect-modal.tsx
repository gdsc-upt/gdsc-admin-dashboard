import { Form, Formik } from "formik";
import React from "react";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Redirect } from "../models/redirect";
import { addRedirect } from "../redirects-api";
import { StyledModal } from "../../../components/gdsc-modal";
import { useSnackbar } from "../../../components/snackbar";
import PrimaryButton from "../../../components/buttons/primary-button";

const initialValues: Redirect = {
  path: "",
  redirectTo: "",
};

interface AddRedirectProps {
  onAdded: () => void;
}

const inputStyle = {
  marginTop: 1,
  marginBottom: 1,
};

export function AddRedirectModal({ onAdded }: AddRedirectProps) {
  const [open, setOpen] = React.useState(false);
  const snackBar = useSnackbar();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = async (redirect: Redirect) => {
    const response = await addRedirect(redirect);
    if (response.status === 201) {
      onAdded();
      return handleClose();
    }
    snackBar.showError("Muie Dobre");
    return false;
  };

  return (
    <>
      <PrimaryButton text="Add" onClick={handleOpen} />

      <StyledModal open={open} onClose={handleClose}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleChange }) => (
            <div>
              <Form>
                <Typography color="primary" variant="h5" className="text-center">
                  Add Redirect
                </Typography>

                <TextField
                  fullWidth
                  autoFocus
                  id="outlined-basic"
                  label="Path"
                  variant="outlined"
                  name="path"
                  inputProps={{ maxLength: 50 }}
                  onChange={handleChange}
                  sx={inputStyle}
                />

                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Redirect To"
                  variant="outlined"
                  name="redirectTo"
                  inputProps={{ maxLength: 256 }}
                  onChange={handleChange}
                  sx={inputStyle}
                />

                <Button tabIndex={-1} type="submit" onClick={onAdded} disableRipple>
                  Add
                </Button>
              </Form>
            </div>
          )}
        </Formik>
      </StyledModal>
    </>
  );
}
