import React from "react";
import "../styles/Home.css";

function Reports() {
  const reportList = [
    { name: "Weekly Energy Summary", status: "Ready" },
    { name: "Monthly Facility Audit", status: "Processing" },
    { name: "Sensor Calibration Log", status: "Complete" },
  ];

  return (
    <div className="home-container">
      <div className="home-header">
        <div>
          <h2>Reports</h2>
          <p>Generate and review operational reports for your facilities.</p>
        </div>
      </div>

      <div className="dashboard-grid">
        {reportList.map((report, index) => (
          <div key={index} className="dashboard-card card-blue">
            <div className="card-header">
              <div className="card-title-section">
                <h3 className="card-title">{report.name}</h3>
              </div>
            </div>
            <div className="card-body">
              <div className="card-value">{report.status}</div>
            </div>
            <div className="card-footer">
              <button className="card-link">Open report →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reports;
