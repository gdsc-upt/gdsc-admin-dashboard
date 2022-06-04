import React from 'react';
import './styles/general/App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTitle } from './hooks/general-hooks';
import { AuthRoutes } from './auth/routes';
import { ProtectedRoute } from './auth/private-route';
import { URLS } from './helpers/constants';
import { Technologies } from './pages/technologies';
import { Dashboard } from './pages/dashboard';
import { MenuItemsRoutes } from './menu-items/routes';

export default function App() {
  useTitle('Admin Dashboard GDSC');

  return (
    <div className="App">
      <Routes>
        {AuthRoutes()}

        <Route element={<ProtectedRoute />}>
          {MenuItemsRoutes()}
          <Route path="/" element={<Navigate to={URLS.dashboard} replace />} />
          <Route path={URLS.technologies} element={<Technologies />} />
          <Route path={URLS.dashboard} element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}
