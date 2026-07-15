import React from "react";
import "../styles/DashboardCard.css";

function DashboardCard({ icon, title, value, subtitle, trend, bgColor, onDetailsClick }) {
  return (
    <div className={`dashboard-card ${bgColor}`}>
      <div className="card-header">
        <div className="card-icon">{icon}</div>
        <div className="card-title-section">
          <h3 className="card-title">{title}</h3>
          {trend && (
            <span className={`card-trend ${trend > 0 ? "positive" : "negative"}`}>
              {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}%
            </span>
          )}
        </div>
      </div>

      <div className="card-body">
        <div className="card-value">{value}</div>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>

      <div className="card-footer">
        <button className="card-link" onClick={onDetailsClick}>
          View Details →
        </button>
      </div>
    </div>
  );
}

export default DashboardCard;
