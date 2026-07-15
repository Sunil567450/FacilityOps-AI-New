import React from "react";
import "../styles/Home.css";

function Settings() {
  return (
    <div className="home-container">
      <div className="home-header">
        <div>
          <h2>Settings</h2>
          <p>Configure your FacilityOps AI preferences and system options.</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card card-teal">
          <div className="card-header">
            <div className="card-title-section">
              <h3 className="card-title">System Preferences</h3>
            </div>
          </div>
          <div className="card-body">
            <p className="card-subtitle">Manage account, notifications, and tracking settings.</p>
          </div>
        </div>

        <div className="dashboard-card card-blue">
          <div className="card-header">
            <div className="card-title-section">
              <h3 className="card-title">Alerts & Notifications</h3>
            </div>
          </div>
          <div className="card-body">
            <p className="card-subtitle">Customize alert thresholds and delivery channels.</p>
          </div>
        </div>

        <div className="dashboard-card card-purple">
          <div className="card-header">
            <div className="card-title-section">
              <h3 className="card-title">Security & Access</h3>
            </div>
          </div>
          <div className="card-body">
            <p className="card-subtitle">Update credentials and configure user permissions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
