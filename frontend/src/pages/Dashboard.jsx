
import { useNavigate } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import "../styles/Home.css";

function Dashboard() {
  const navigate = useNavigate();

  const dashboardData = [
    {
      icon: "🏢",
      title: "Total Buildings",
      value: "48",
      subtitle: "Across 12 locations",
      trend: 5,
      bgColor: "card-blue",
      path: "/buildings",
    },
    {
      icon: "📡",
      title: "Active Sensors",
      value: "1,247",
      subtitle: "All systems operational",
      trend: 12,
      bgColor: "card-teal",
      path: "/sensors",
    },
    {
      icon: "⚡",
      title: "Energy Consumption",
      value: "2,458 kWh",
      subtitle: "Current day (8 hours)",
      trend: -3,
      bgColor: "card-purple",
      path: "/energy",
    },
    {
      icon: "🚨",
      title: "Active Alerts",
      value: "7",
      subtitle: "3 critical, 4 warnings",
      trend: -8,
      bgColor: "card-red",
      path: "/alerts",
    },
  ];

  return (
    <div className="home-container">
      <div className="home-header">
        <div>
          <h2>Dashboard Overview</h2>
          <p>Manage facilities, sensors, energy, and alerts in one place.</p>
        </div>

        <div className="header-actions">
          <button
            className="btn-primary"
            onClick={() => navigate("/reports")}
          >
            📋 Generate Report
          </button>

          <button
            className="btn-secondary"
            onClick={() => navigate("/settings")}
          >
            ⚙️ Configure System
          </button>
        </div>
      </div>

      <div className="dashboard-grid">
        {dashboardData.map((card, index) => (
          <DashboardCard
            key={index}
            icon={card.icon}
            title={card.title}
            value={card.value}
            subtitle={card.subtitle}
            trend={card.trend}
            bgColor={card.bgColor}
            onDetailsClick={() => navigate(card.path)}
          />
        ))}
      </div>

      <div className="charts-section">
        <div className="chart-container">
          <div className="chart-header">
            <h3>Energy Consumption Trend</h3>
            <span className="chart-period">Last 7 Days</span>
          </div>

          <div className="chart-placeholder">
            <p>Energy usage chart will be displayed here.</p>
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-header">
            <h3>Sensor Status Distribution</h3>
            <span className="chart-period">Real-time</span>
          </div>

          <div className="chart-placeholder">
            <p>Sensor status chart will be displayed here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;