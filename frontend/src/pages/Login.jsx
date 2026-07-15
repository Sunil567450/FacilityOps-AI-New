import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter email and password");
      return;
    }

    localStorage.setItem("userEmail", email);
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
        padding: "30px",
        color: "white",
      }}
    >
      {/* Login Card */}
      <div
        style={{
          background: "#ffffff",
          color: "#000",
          padding: "35px",
          borderRadius: "12px",
          width: "360px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>FacilityOps AI</h1>
        <p style={{ textAlign: "center", marginBottom: "25px" }}>
          Smart Building Management System
        </p>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "15px" }}>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="admin@facilityops.ai"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />{" "}
              Remember Me
            </label>

            <a href="/">Forgot Password?</a>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </form>

        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          Demo: Enter any email and password
        </p>
      </div>

      {/* Right Side */}
      <div style={{ maxWidth: "450px" }}>
        <h2>Welcome to FacilityOps AI</h2>

        <p>
          Your intelligent facility management system for monitoring,
          controlling and optimizing buildings in real time.
        </p>

        <ul style={{ marginTop: "20px", lineHeight: "2" }}>
          <li>✅ Real-time Building Monitoring</li>
          <li>✅ Advanced Sensor Analytics</li>
          <li>✅ Energy Consumption Tracking</li>
          <li>✅ Intelligent Alert System</li>
          <li>✅ Predictive Maintenance</li>
        </ul>
      </div>
    </div>
  );
}

export default Login;