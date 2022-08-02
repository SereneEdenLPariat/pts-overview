import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Overview } from "./pages/overview/Overview.jsx";
import LogIn from "./pages/login/Login.jsx";
import Company from "./components/form/Company.jsx";
import { Map } from "./components/form/Map.js";

function App() {
  return (
    <div data-testid="app-1">
      <BrowserRouter>
        <Routes>
          <Route index element={<LogIn />} />
          <Route path="/PersonnelManagement/Company" element={<Company />} />
          <Route path="/PersonnelManagement/Map" element={<Map />} />
          <Route path="dashboard">
            <Route index element={<>tyhjh</>} />
            <Route path="overview" element={<Overview />} />
          </Route>
          <Route path="*" element={<h1>Error</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
