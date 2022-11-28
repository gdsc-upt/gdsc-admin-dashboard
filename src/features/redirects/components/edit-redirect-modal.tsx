import { Form, Formik } from "formik";
import React from "react";
import { Alert, Button, Snackbar } from "@mui/material";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import { Redirect } from "../models/redirect";
import { patchRedirect } from "../redirects-api";
import GdscIconButton from "../../../components/buttons/gdsc-icon-button";
import { StyledModal } from "../../../components/gdsc-modal";

interface EditRedirectProps {
  onEdited: () => void;
  initialRedirect: Redirect;
}

const inputStyle = {
  marginTop: 1,
  marginBottom: 1,
};

export function EditRedirectModal({ onEdited, initialRedirect }: EditRedirectProps) {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState<string | undefined>(undefined);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleErrorOpen = () => setError("Muie Dobre");
  const handleErrorClose = () => setError(undefined);

  const submitHandler = async (redirect: Redirect) => {
    const response = await patchRedirect(initialRedirect.path, redirect);
    if (response !== undefined) {
      onEdited();
      return handleClose();
    }
    handleErrorOpen();
    return false;
  };

  return (
    <>
      <GdscIconButton
        onClick={handleOpen}
        color="primary"
        tooltip="Open a modal to edit this redirect"
        label="Edit"
        icon={<EditIcon />}
      />
      <StyledModal open={open} onClose={handleClose}>
        <Formik initialValues={initialRedirect} onSubmit={submitHandler}>
          {({ handleChange }) => (
            <div>
              <Form className="Form">
                <span className="text-center">Add redirect</span>
                <TextField
                  disabled
                  fullWidth
                  defaultValue={initialRedirect.path}
                  id="outlined-basic"
                  label="Path"
                  variant="outlined"
                  name="path"
                  inputProps={{ maxLength: 50 }}
                  onChange={handleChange}
                  sx={inputStyle}
                />
                <TextField
                  autoFocus
                  fullWidth
                  defaultValue={initialRedirect.redirectTo}
                  id="outlined-basic"
                  label="Redirect To"
                  variant="outlined"
                  name="redirectTo"
                  inputProps={{ maxLength: 256 }}
                  onChange={handleChange}
                  sx={inputStyle}
                />
                <Button type="submit" onClick={onEdited} disableRipple>
                  Edit
                </Button>
              </Form>
            </div>
          )}
        </Formik>
      </StyledModal>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={!!error?.length}
        autoHideDuration={2500}
        onClose={handleErrorClose}
      >
        <Alert onClose={handleErrorClose} severity="error" sx={{ width: "1000" }}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
}
