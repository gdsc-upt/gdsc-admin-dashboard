import { Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useAuth } from "../components/auth-context";
import { AUTH_URLS } from "../routes";

export function LogoutPage() {
  const auth = useAuth();
  useEffect(() => auth.signOut(), [auth]);
  return <Navigate to={AUTH_URLS.login} />;
}
