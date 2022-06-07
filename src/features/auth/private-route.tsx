import { Navigate, Outlet } from 'react-router-dom';
import React, { ReactElement } from 'react';
import { tokenNotExpired } from './helpers/token-utils';

export interface ProtectedRouteProps {
  readonly isAllowed?: boolean;
  readonly redirectPath?: string;
  readonly children?: ReactElement;
}

export function ProtectedRoute({
  isAllowed = tokenNotExpired(),
  redirectPath = '/login',
  children = undefined,
}: ProtectedRouteProps): ReactElement {
  console.log(isAllowed);
  console.log(redirectPath);
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  if (children) {
    return children;
  }

  return <Outlet />;
}
