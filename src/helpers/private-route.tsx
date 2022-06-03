import { Navigate, Outlet } from "react-router-dom";
import React, { ReactElement } from "react";
import authData from "./auth-data";

export interface ProtectedRouteProps {
  readonly isAllowed?: boolean;
  readonly redirectPath?: string;
  readonly children?: ReactElement;
}

console.log(authData);

export function ProtectedRoute({
  isAllowed = !!authData.token,
  redirectPath = "/login",
  children = undefined,
}: ProtectedRouteProps): ReactElement {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  if (children) {
    return children;
  }

  return <Outlet />;
}
