import { Route } from 'react-router-dom';
import React from 'react';
import { URLS } from '../helpers/constants';
import { LogoutPage } from './pages/logout';
import { ProtectedRoute } from './private-route';
import { LoginPage } from './pages/login';
import { RegisterPage } from './pages/register';
import { AUTH_URLS } from './helpers/constants';
import { isExpired } from './helpers/token-utils';

export function AuthRoutes() {
  return [
    <Route key={AUTH_URLS.logout} path={AUTH_URLS.logout} element={<LogoutPage />} />,

    <Route
      key="login/register"
      element={<ProtectedRoute isAllowed={isExpired()} redirectPath={URLS.dashboard} />}
    >
      <Route path={AUTH_URLS.login} element={<LoginPage />} />
      <Route path={AUTH_URLS.register} element={<RegisterPage />} />
    </Route>,
  ];
}
