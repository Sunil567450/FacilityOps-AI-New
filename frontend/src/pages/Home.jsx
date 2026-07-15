import { useNavigate } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import "../styles/Home.css";

function Home() {
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
          <h2>Welcome back, Admin! 👋</h2>
          <p>Here's what's happening with your facilities today</p>
        </div>
        <div className="header-actions">
          <button className="btn-primary" onClick={() => navigate("/reports")}>📋 Generate Report</button>
          <button className="btn-secondary" onClick={() => navigate("/settings")}>⚙️ Configure</button>
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
            <p>Energy usage chart will be displayed here</p>
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-header">
            <h3>Sensor Status Distribution</h3>
            <span className="chart-period">Real-time</span>
          </div>
          <div className="chart-placeholder">
            <p>Sensor status chart will be displayed here</p>
          </div>
        </div>
      </div>

      <div className="alerts-section">
        <div className="alerts-header">
          <h3>Recent Alerts</h3>
          <a href="#" className="view-all">View All →</a>
        </div>
        <div className="alerts-list">
          <div className="alert-item critical">
            <span className="alert-icon">🔴</span>
            <div className="alert-content">
              <p className="alert-title">Critical: HVAC Temperature High</p>
              <p className="alert-time">5 minutes ago • Building A</p>
            </div>
            <span className="alert-badge">Critical</span>
          </div>
          <div className="alert-item warning">
            <span className="alert-icon">🟡</span>
            <div className="alert-content">
              <p className="alert-title">Warning: Humidity Level Elevated</p>
              <p className="alert-time">15 minutes ago • Building C</p>
            </div>
            <span className="alert-badge">Warning</span>
          </div>
          <div className="alert-item info">
            <span className="alert-icon">🔵</span>
            <div className="alert-content">
              <p className="alert-title">Notice: Maintenance Scheduled</p>
              <p className="alert-time">1 hour ago • Building B</p>
            </div>
            <span className="alert-badge">Info</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
