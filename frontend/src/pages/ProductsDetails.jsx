import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const ProductsDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const product = useSelector((state) =>
    state.product.products.find((p) => p._id === id)
  );

  if (!product) return <p>Product not found</p>;
  

  const handleAddToCart = () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setMessage("⚠️ You must login first to add items to cart.");
        setTimeout(() => setMessage(""), 3000);
        return;
      }

      // 
      dispatch(addToCart(product));

     setMessage("✅ Product added to cart successfully!");
    } catch (err) {
      console.error("Add to cart error:", err);
      setMessage("❌ Something went wrong!");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="container mt-4">
      {message && (
        <div className="alert alert-info text-center" role="alert">
          {message}
        </div>
      )}

      <h2>{product.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Type:</strong> {product.type}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Skin Suitable:</strong> {product.skinTypeSuitable.join(", ")}</p>
          <p><strong>Ingredients:</strong> {product.ingredients?.join(", ")}</p>

         
          <button
            className="btn btn-primary mt-3 me-2"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          <Link to="/products" className="btn btn-secondary mt-3">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;