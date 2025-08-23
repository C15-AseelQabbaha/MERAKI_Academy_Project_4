import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Home from "./pages/Home";
import Navbar from "./components/sharedComponents/Navbar";
import Footer from "./components/sharedComponents/Footer";


import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";


function App() {
  return (

    <Router>
      <Navbar />
      <div className="App">
        <h1></h1>
        <nav>

        </nav>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
         
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>

  );
}

export default App;