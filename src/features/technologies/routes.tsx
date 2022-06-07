import React from 'react';
import { Route } from 'react-router-dom';
import { TECHNOLOGIES_URLS } from './urls';
import { Technologies } from './pages/technologies';
import { AddTechnology } from './pages/add-technology';

export function TechnologyRoutes() {
  return [
    <Route
      key={TECHNOLOGIES_URLS.technologies}
      path={TECHNOLOGIES_URLS.technologies}
      element={<Technologies />}
    />,
    <Route
      key={TECHNOLOGIES_URLS.addTechnology}
      path={TECHNOLOGIES_URLS.addTechnology}
      element={<AddTechnology />}
    />,
  ];
}
