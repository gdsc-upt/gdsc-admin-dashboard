import { Route } from 'react-router-dom';
import React from 'react';
import { AUTH_URLS, URLS } from '../helpers/constants';
import { LogoutPage } from './pages/logout';
import { ProtectedRoute } from '../helpers/private-route';
import authData from '../helpers/auth-data';
import { LoginPage } from './pages/login';
import { RegisterPage } from './pages/register';

export function AuthRoutes() {
  return [
    <Route key={AUTH_URLS.logout} path={AUTH_URLS.logout} element={<LogoutPage />} />,

    <Route
      key="login/register"
      element={<ProtectedRoute isAllowed={!authData.token} redirectPath={URLS.dashboard} />}
    >
      <Route path={AUTH_URLS.login} element={<LoginPage />} />
      <Route path={AUTH_URLS.register} element={<RegisterPage />} />
    </Route>,
  ];
}
