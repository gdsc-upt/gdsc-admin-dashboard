import React from 'react';
import './styles/general/App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTitle } from './hooks/general-hooks';
import { Dashboard } from './pages/dashboard';
import { Technologies } from './pages/technologies';
import { ProtectedRoute } from './auth/private-route';
import { URLS } from './helpers/constants';
import { AuthRoutes } from './auth/routes';
import { MenuItemsRoutes } from './menu-items/routes';

function App() {
  useTitle('Admin Dashboard GDSC');

  return (
    <div className="App">
      <Routes>
        {AuthRoutes()}
        {MenuItemsRoutes()}

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
