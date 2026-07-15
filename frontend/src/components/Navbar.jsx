
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-title">FacilityOps AI Dashboard</h1>
        <p className="navbar-subtitle">Intelligent Facility Management System</p>
      </div>

      <div className="navbar-center">
        <input
          type="text"
          className="search-input"
          placeholder="Search facilities, sensors, alerts..."
        />
      </div>

      <div className="navbar-right">
        <button className="navbar-btn notification-btn">
          🔔
          <span className="notification-badge">3</span>
        </button>
        <button className="navbar-btn">💬</button>
        <div className="navbar-divider"></div>
        <div className="navbar-user">
          <div className="user-avatar-nav">👤</div>
          <div className="user-dropdown">
            <p className="username">Admin User</p>
            <p className="useremail">admin@facilityops.ai</p>
          </div>
          <button className="navbar-btn dropdown-btn">▼</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
