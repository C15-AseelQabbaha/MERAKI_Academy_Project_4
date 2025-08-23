import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const cartProducts = useSelector(state => state.cart.cartProducts);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <h3 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        
        </h3>

        <Link className="navbar-brand" to="/">
          Skin Care
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/routine">
                My Routine
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/review">
                Reviews
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>

      
        <div
          style={{ position: "relative", cursor: "pointer" }}
          onClick={() => navigate("/cart")}
        >
          <FaShoppingCart size={24} />
          {cartProducts.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
              }}
            >
              {cartProducts.length}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;