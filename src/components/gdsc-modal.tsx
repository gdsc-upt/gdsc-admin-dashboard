import Modal, { ModalProps } from "@mui/material/Modal";
import { Paper, PaperProps, styled } from "@mui/material";
import React from "react";

export const StyledModal = styled((props: ModalProps & { readonly paperProps?: PaperProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Modal disableAutoFocus {...props}>
    <Paper
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props.paperProps}
      sx={{
        top: "50%",
        left: "50%",
        padding: 4,
        transform: "translate(-50%, -50%)",
        position: "absolute",
        ...props.paperProps?.sx,
      }}
    >
      {props.children}
    </Paper>
  </Modal>
))();
