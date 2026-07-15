import React from "react";
import "../styles/Home.css";

function Sensors() {
  const sensorMetrics = [
    { label: "Total Sensors", value: "1,247" },
    { label: "Online", value: "1,200" },
    { label: "Offline", value: "47" },
    { label: "Alerts Today", value: "14" },
  ];

  return (
    <div className="home-container">
      <div className="home-header">
        <div>
          <h2>Sensors</h2>
          <p>Monitor sensor health, connectivity, and alert activity.</p>
        </div>
      </div>

      <div className="dashboard-grid">
        {sensorMetrics.map((metric, index) => (
          <div key={index} className="dashboard-card card-teal">
            <div className="card-header">
              <div className="card-title-section">
                <h3 className="card-title">{metric.label}</h3>
              </div>
            </div>
            <div className="card-body">
              <div className="card-value">{metric.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="alerts-section">
        <div className="alerts-header">
          <h3>Sensor Health Summary</h3>
          <span className="view-all">Last 24 Hours</span>
        </div>
        <div className="alerts-list">
          <div className="alert-item info">
            <span className="alert-icon">⚙️</span>
            <div className="alert-content">
              <p className="alert-title">Temperature probes stabilized</p>
              <p className="alert-time">Updated 12 minutes ago</p>
            </div>
          </div>
          <div className="alert-item warning">
            <span className="alert-icon">🔧</span>
            <div className="alert-content">
              <p className="alert-title">3 sensors reported intermittent readings</p>
              <p className="alert-time">Updated 46 minutes ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sensors;
