import React from "react";
import { Box } from "@mui/material";
import { Logo } from "../../../components/logo";
import { LoginForm } from "../components";

export function LoginPage() {
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Logo />
      </Box>
      <LoginForm />
    </>
  );
}
