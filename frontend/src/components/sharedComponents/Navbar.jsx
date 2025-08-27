import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
         {/* <img 
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/skincare-%26-hair-free-logo-design-template-7570ef196bb39d2f49a2ac9bf7900df2_screen.jpg?ts=1710345189"
        alt="App Logo" 
        style={{ width: "100px",height: "20px", marginBottom: "20px" }} 
      /> */}
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
         
          <ul className="navbar-nav me-auto">
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
          </ul>

       
          <div className="d-flex align-items-center">
            {user && (
              <>
                <span className="me-3 fw-bold">Welcome, {user.name}</span>
                <button
                  className="btn btn-outline-danger btn-sm me-3"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}

            {!user && (
              <>
                <NavLink className="nav-link me-2" to="/signup">
                  Sign Up
                </NavLink>
                <NavLink className="nav-link me-3" to="/login">
                  Login
                </NavLink>
              </>
            )}

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;