import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Overview } from "./pages/overview/Overview.jsx";
import LogIn from "./pages/login/LogIn.jsx";
import Company from "./components/form/Company.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/dashboard/Overview" element={<Overview />} />
          <Route path="/PersonnelManagement/Company" element={<Company />} />
          <Route path="*" element={<h1>Error</h1>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
