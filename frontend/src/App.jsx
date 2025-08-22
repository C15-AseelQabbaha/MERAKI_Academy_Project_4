import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    
      <Router>
        <div className="App">
          <h1>Skin Care</h1>
          <nav>
            <Link to="/signup" className="btn btn-primary m-2">SignUp</Link>
            <Link to="/login" className="btn btn-secondary m-2">Login</Link>
          </nav>

          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />

            <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
          </Routes>
        </div>
      </Router>
  
  );
}

export default App;