import React from 'react';
import './styles/general/App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTitle } from './hooks/general-hooks';
import { AuthRoutes } from './features/auth/routes';
import { ProtectedRoute } from './features/auth/private-route';
import { URLS } from './helpers/constants';
import { Dashboard } from './features/dashboard/dashboard';
import { MenuItemsRoutes } from './features/menu-items/routes';
import { TechnologyRoutes } from './features/technologies/routes';
import { BottomMenu } from './components/bottomMenu';

export default function App() {
  useTitle('Admin Dashboard GDSC');

  return (
    <div className="App">
      <Routes>
        {AuthRoutes()}

        <Route element={<ProtectedRoute />}>
          {MenuItemsRoutes()}
          {TechnologyRoutes()}
          <Route path="/" element={<Navigate to={URLS.dashboard} replace />} />
          <Route path={URLS.dashboard} element={<Dashboard />} />
        </Route>
      </Routes>

      <BottomMenu />
    </div>
  );
}
