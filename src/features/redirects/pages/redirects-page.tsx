import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Redirect } from "../models/redirect";
import { deleteRedirect, getRedirects } from "../redirects-api";
import { EditRedirectModal } from "../components/edit-redirect-modal";
import { AddRedirectModal } from "../components/add-redirect-modal";
import ActionsBar from "../../../components/actions-bar";
import RedirectsActionsTitle from "../components/redirects-actions-title";
import GdscIconButton from "../../../components/buttons/gdsc-icon-button";

export function RedirectsPage() {
  const [redirects, setRedirects] = useState<Redirect[]>([]);

  useEffect(() => {
    getRedirects().then(setRedirects);
  }, []);

  const fetchData = async () => {
    getRedirects().then(setRedirects);
  };

  const onDeleteClick = async (redirectPath: string) => {
    await deleteRedirect(redirectPath);
    await fetchData();
  };

  return (
    <>
      <Box sx={{ marginBottom: 2 }}>
        <ActionsBar
          middleContent={<RedirectsActionsTitle />}
          rightContent={<AddRedirectModal onAdded={fetchData} />}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Path</TableCell>
              <TableCell>Redirect To</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {redirects.map(r => (
              <TableRow key={r.path}>
                <TableCell>{r.path}</TableCell>
                <TableCell>{r.redirectTo}</TableCell>
                <TableCell>
                  <GdscIconButton
                    onClick={() => onDeleteClick(r.path)}
                    color="error"
                    tooltip="Delete this redirect"
                    label="Delete"
                    icon={<DeleteIcon />}
                  />
                  <EditRedirectModal onEdited={fetchData} initialRedirect={r} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
