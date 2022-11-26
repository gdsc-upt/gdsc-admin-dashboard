import { Navigate, useLocation } from "react-router-dom";
import React from "react";
import { useAuth } from "./auth-context";

export interface IfNotLoggedInProps {
  readonly children: JSX.Element;
  readonly redirectTo?: string;
}

export function IfNotLoggedIn({ children, redirectTo }: IfNotLoggedInProps) {
  const auth = useAuth();
  const location = useLocation();

  if (auth.user?.token && new Date(auth.user.expiration ?? "").getTime() > Date.now()) {
    return <Navigate to={redirectTo || "/"} state={{ from: location }} replace />;
  }

  return children;
}
