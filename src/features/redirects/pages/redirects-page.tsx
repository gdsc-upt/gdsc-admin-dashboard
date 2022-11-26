import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
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
import { EditRedirect } from "../components/edit-redirect";
import { AddRedirect } from "../components/add-redirect";
import ActionsBar from "../../../components/actions-bar";
import RedirectsActionsTitle from "../components/redirects-actions-title";

export function RedirectsPage() {
  const [redirects, setRedirects] = useState<Redirect[]>([]);

  useEffect(() => {
    console.log("test");
    getRedirects().then(setRedirects);
  }, []);

  const fetchData = async () => {
    console.log(redirects);
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
          rightContent={<AddRedirect onAdded={fetchData} />}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Path</TableCell>
              <TableCell>Redirect To</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {redirects.map(r => (
              <TableRow key={r.path}>
                <TableCell>{r.path}</TableCell>
                <TableCell>{r.redirectTo}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="delete"
                    size="large"
                    onClick={() => onDeleteClick(r.path)}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <EditRedirect onEdited={fetchData} initialRedirect={r} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
