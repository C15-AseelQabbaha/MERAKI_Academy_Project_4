import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/sharedComponents/Navbar";
import Footer from "./components/sharedComponents/Footer";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";

// 
function Layout() {
  const location = useLocation();

  // 
  const hideLayout = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>

       <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;