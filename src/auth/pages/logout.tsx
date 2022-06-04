import React from 'react';
import { Navigate } from 'react-router-dom';
import { logout } from '../services';
import { AUTH_URLS } from '../helpers';

export function LogoutPage() {
  logout();
  return <Navigate to={AUTH_URLS.login} />;
}
