import React from "react";
import "./styles/general/App.scss";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { useTitle } from "./hooks/general-hooks";
import { Dashboard } from "./pages/dashboard";

function App() {
  useTitle("Admin-Dashboard");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
