
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout
import DashboardLayout from "./Layouts/DashboardLayout";

// Pages
import Dashboard from "./Pages/Dashboard";
import Appointments from "./Pages/Appointments";
import Patients from "./Pages/Patients";
import Prescriptions from "./Pages/Prescriptions";
import Templates from "./Pages/Templates";
import Reports from "./Pages/Reports";
import Settings from "./Pages/Settings";
import HelpSupport from "./Pages/HelpSupport";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import UnderConstruction from "./Pages/UnderConstruction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard Layout */}
        <Route path="/" element={<UnderConstruction />}>
        {/* <Route path="/" element={<DashboardLayout />}> */}
          <Route index element={<Navigate to="/dashboard" replace />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="patients" element={<Patients />} />
          <Route path="prescriptions" element={<Prescriptions />} />
          <Route path="templates" element={<Templates />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help-support" element={<HelpSupport />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
