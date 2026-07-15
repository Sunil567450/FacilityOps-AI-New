
import "../styles/Home.css";

function Buildings() {
  const buildings = [
    { name: "Building A", status: "Operational", occupancy: "88%" },
    { name: "Building B", status: "Maintenance", occupancy: "42%" },
    { name: "Building C", status: "Operational", occupancy: "97%" },
    { name: "Building D", status: "Inspection", occupancy: "55%" },
  ];

  return (
    <div className="home-container">
      <div className="home-header">
        <div>
          <h2>Buildings</h2>
          <p>Overview of facility status, occupancy, and maintenance plans.</p>
        </div>
      </div>

      <div className="dashboard-grid">
        {buildings.map((building, index) => (
          <div key={index} className="dashboard-card card-blue">
            <div className="card-header">
              <div className="card-title-section">
                <h3 className="card-title">{building.name}</h3>
              </div>
            </div>
            <div className="card-body">
              <div className="card-value">{building.status}</div>
              <p className="card-subtitle">Occupancy: {building.occupancy}</p>
            </div>
            <div className="card-footer">
              <button className="card-link">View building details →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buildings;
