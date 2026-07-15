import React from "react";
import "../styles/Home.css";

function Alerts() {
  const alerts = [
    { title: "Critical HVAC Failure", severity: "critical", time: "2 minutes ago", location: "Building A" },
    { title: "Smoke Detector Fault", severity: "warning", time: "14 minutes ago", location: "Building D" },
    { title: "Maintenance Reminder", severity: "info", time: "1 hour ago", location: "Building B" },
  ];

  return (
    <div className="home-container">
      <div className="home-header">
        <div>
          <h2>Alerts</h2>
          <p>Review the latest alerts and identify priority issues.</p>
        </div>
      </div>

      <div className="alerts-section">
        <div className="alerts-header">
          <h3>Active Alerts</h3>
          <span className="view-all">Filter results</span>
        </div>
        <div className="alerts-list">
          {alerts.map((alert, index) => (
            <div key={index} className={`alert-item ${alert.severity}`}>
              <span className="alert-icon">
                {alert.severity === "critical" ? "🔴" : alert.severity === "warning" ? "🟡" : "🔵"}
              </span>
              <div className="alert-content">
                <p className="alert-title">{alert.title}</p>
                <p className="alert-time">{alert.time} • {alert.location}</p>
              </div>
              <span className="alert-badge">{alert.severity.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Alerts;
