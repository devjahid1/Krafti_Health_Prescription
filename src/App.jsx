
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Layout
import DashboardLayout from "./Layouts/DashboardLayout";

// Authentication Pages
import Login from "./Pages/Auth/Login";
import PatientRegistration from "./Pages/Auth/PatientRegistration";
import PatientProfileSetup from "./Pages/Auth/PatientProfileSetup";
import DoctorRegistration from "./Pages/Auth/DoctorRegistration";
import DoctorProfileSetup from "./Pages/Auth/DoctorProfileSetup";
import DoctorVerificationPending from "./Pages/Auth/DoctorVerificationPending";

// Dashboard Pages
import Dashboard from "./Pages/Dashboard";
import Appointments from "./Pages/Appointments";
import Patients from "./Pages/Patients";
import Prescriptions from "./Pages/Prescriptions";
import Templates from "./Pages/Templates";
import Reports from "./Pages/Reports";
import Settings from "./Pages/Settings";
import HelpSupport from "./Pages/HelpSupport";

// Protected Route
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Demo Login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Routes>
      {/* ============================= */}
      {/* Authentication Routes */}
      {/* ============================= */}

      {/* Login Page */}
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Login onLogin={handleLogin} />
          )
        }
      />

      {/* Patient Registration */}
      <Route
        path="/patient-registration"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <PatientRegistration />
          )
        }
      />

      {/* Patient Profile Setup */}
      <Route
        path="/patient-profile-setup"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <PatientProfileSetup />
          )
        }
      />

      {/* Doctor Registration */}
      <Route
        path="/doctor-registration"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <DoctorRegistration />
          )
        }
      />

      {/* Doctor Profile Setup */}
      <Route
        path="/doctor-profile-setup"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <DoctorProfileSetup />
          )
        }
      />

      {/* Doctor Verification Pending */}
      <Route
        path="/doctor-verification-pending"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <DoctorVerificationPending />
          )
        }
      />

      {/* ============================= */}
      {/* Protected Dashboard Routes */}
      {/* ============================= */}

      <Route
        path="/"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DashboardLayout onLogout={handleLogout} />
          </ProtectedRoute>
        }
      >
        {/* Default Route */}
        <Route
          index
          element={<Navigate to="/dashboard" replace />}
        />

        {/* Dashboard */}
        <Route path="dashboard" element={<Dashboard />} />

        {/* Other Pages */}
        <Route path="appointments" element={<Appointments />} />
        <Route path="patients" element={<Patients />} />
        <Route path="prescriptions" element={<Prescriptions />} />
        <Route path="templates" element={<Templates />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="help-support" element={<HelpSupport />} />
      </Route>

      {/* ============================= */}
      {/* Unknown Routes */}
      {/* ============================= */}

      <Route
        path="*"
        element={
          <Navigate
            to={isAuthenticated ? "/dashboard" : "/login"}
            replace
          />
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
