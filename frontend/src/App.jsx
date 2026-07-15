import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Buildings from "./pages/Buildings";
import Sensors from "./pages/Sensors";
import Energy from "./pages/Energy";
import Alerts from "./pages/Alerts";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function ProtectedLayout({ children, isLoggedIn }) {
  return isLoggedIn ? (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="page-content">{children}</div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
}

function App() {
  const isLoggedIn = !!localStorage.getItem("userEmail");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={<ProtectedLayout isLoggedIn={isLoggedIn}><Dashboard /></ProtectedLayout>}
        />
        <Route
          path="/buildings"
          element={<ProtectedLayout isLoggedIn={isLoggedIn}><Buildings /></ProtectedLayout>}
        />
        <Route
          path="/sensors"
          element={<ProtectedLayout isLoggedIn={isLoggedIn}><Sensors /></ProtectedLayout>}
        />
        <Route
          path="/energy"
          element={<ProtectedLayout isLoggedIn={isLoggedIn}><Energy /></ProtectedLayout>}
        />
        <Route
          path="/alerts"
          element={<ProtectedLayout isLoggedIn={isLoggedIn}><Alerts /></ProtectedLayout>}
        />
        <Route
          path="/reports"
          element={<ProtectedLayout isLoggedIn={isLoggedIn}><Reports /></ProtectedLayout>}
        />
        <Route
          path="/settings"
          element={<ProtectedLayout isLoggedIn={isLoggedIn}><Settings /></ProtectedLayout>}
        />

        <Route
          path="*"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;