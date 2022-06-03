import React from 'react';
import { Navigate } from 'react-router-dom';
import { logout } from '../services/auth.service';
import { AUTH_URLS } from '../constants';

export function LogoutPage() {
  logout();
  return <Navigate to={AUTH_URLS.login} />;
}
