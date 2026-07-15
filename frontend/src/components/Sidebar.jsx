import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { label: "Dashboard", icon: "📊", path: "/dashboard" },
    { label: "Buildings", icon: "🏢", path: "/buildings" },
    { label: "Sensors", icon: "📡", path: "/sensors" },
    { label: "Energy Usage", icon: "⚡", path: "/energy" },
    { label: "Alerts", icon: "🚨", path: "/alerts" },
    { label: "Reports", icon: "📈", path: "/reports" },
    { label: "Settings", icon: "⚙️", path: "/settings" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          {isOpen && <span className="logo-text">FacilityOps AI</span>}
        </div>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `nav-item${isActive ? " active" : ""}`
            }
            title={item.label}
          >
            <span className="nav-icon">{item.icon}</span>
            {isOpen && <span className="nav-label">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">👤</div>
          {isOpen && (
            <div className="user-details">
              <p className="user-name">Admin</p>
              <p className="user-role">Facility Manager</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
