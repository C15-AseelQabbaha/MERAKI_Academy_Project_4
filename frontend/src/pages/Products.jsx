import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const navigate = useNavigate();
  const location = useLocation();


  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search") || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Products</h2>
      <div className="row">
        {filteredProducts.length === 0 && <p>No products found.</p>}
        {filteredProducts.map((product) => (
          <div key={product._id} className="col-md-4 mb-4">
            <div className="card h-200">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text"><strong>Brand:</strong> {product.brand}</p>
                <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                <p className="card-text">
                  Description: <strong>{product.description}</strong>
                </p>
                <p className="card-text">
                  Skin Suitable: {product.skinTypeSuitable.join(", ")}
                </p>

                <button
                  className="btn btn-primary mt-2"
                  onClick={() => navigate(`/products/${product._id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;