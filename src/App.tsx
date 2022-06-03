import React from 'react';
import './styles/general/App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTitle } from './hooks/general-hooks';
import { Dashboard } from './pages/dashboard';
import { Technologies } from './pages/technologies';
import { ProtectedRoute } from './helpers/private-route';
import { URLS } from './helpers/constants';
import { AuthRoutes } from './auth/routes';

function App() {
  useTitle('Admin Dashboard GDSC');

  return (
    <div className="App">
      <Routes>
        {AuthRoutes()}

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
