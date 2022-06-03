import React from 'react';
import './styles/general/App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login';
import { useTitle } from './hooks/general-hooks';
import { Dashboard } from './pages/dashboard';
import { Technologies } from './pages/technologies';
import { ProtectedRoute } from './helpers/private-route';
import { RegisterPage } from './pages/register';
import { LogoutPage } from './pages/logout';
import { AUTH_URLS, URLS } from './helpers/constants';
import authData from './helpers/auth-data';

function App() {
  useTitle('Admin Dashboard GDSC');

  return (
    <div className="App">
      <Routes>
        <Route path={AUTH_URLS.logout} element={<LogoutPage />} />

        <Route
          element={<ProtectedRoute isAllowed={!authData.token} redirectPath={URLS.dashboard} />}
        >
          <Route path={AUTH_URLS.login} element={<LoginPage />} />
          <Route path={AUTH_URLS.register} element={<RegisterPage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to={URLS.dashboard} replace />} />
          <Route path={URLS.technologies} element={<Technologies />} />
          <Route path={URLS.dashboard} element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
