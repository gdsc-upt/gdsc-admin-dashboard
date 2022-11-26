import { Navigate, useLocation } from "react-router-dom";
import React from "react";
import { AUTH_URLS } from "../routes";
import { useAuth } from "./auth-context";

export interface IfLoggedInProps {
  readonly children: JSX.Element;
}

export function IfLoggedIn({ children }: IfLoggedInProps) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user?.token || new Date(auth.user?.expiration ?? "").getTime() < Date.now()) {
    auth.signOut();
    return <Navigate to={AUTH_URLS.login} state={{ from: location }} replace />;
  }

  return children;
}
