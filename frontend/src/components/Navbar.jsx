import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ setIsAuth, cartCount }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <nav
      style={{
        backgroundColor: "#8b0000",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      <h2 style={{ margin: 0 }}>Aari Works</h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={navLink}>Home</Link>
        <Link to="/collections" style={navLink}>Collections</Link>
        <Link to="/cart" style={navLink}>Cart ({cartCount})</Link>
        <Link to="/orders" style={navLink}>Orders</Link>

        <button onClick={handleLogout} style={logoutBtn}>
          Logout
        </button>
      </div>
    </nav>
  );
}

const navLink = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

const logoutBtn = {
  backgroundColor: "white",
  color: "#8b0000",
  border: "none",
  padding: "8px 14px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Navbar;