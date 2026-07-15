import React from "react";
import "../styles/Home.css";

function Energy() {
  const energyData = [
    { label: "Peak Demand", value: "380 kW" },
    { label: "Current Usage", value: "2,458 kWh" },
    { label: "Renewables", value: "34%" },
    { label: "Cost Savings", value: "$12,400" },
  ];

  return (
    <div className="home-container">
      <div className="home-header">
        <div>
          <h2>Energy Usage</h2>
          <p>Track consumption, peak demand, and efficiency benchmarks.</p>
        </div>
      </div>

      <div className="dashboard-grid">
        {energyData.map((item, index) => (
          <div key={index} className="dashboard-card card-purple">
            <div className="card-header">
              <div className="card-title-section">
                <h3 className="card-title">{item.label}</h3>
              </div>
            </div>
            <div className="card-body">
              <div className="card-value">{item.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="charts-section">
        <div className="chart-container">
          <div className="chart-header">
            <h3>Usage by Building</h3>
            <span className="chart-period">Daily</span>
          </div>
          <div className="chart-placeholder">
            <p>Energy breakdown chart will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Energy;
