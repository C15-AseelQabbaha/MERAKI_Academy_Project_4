import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.product.products);

if (!products || products.length === 0) return <p>No products available</p>;
  return (
    <div className="container mt-4">
       
      <h2>All Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.brand}</p>
                <p className="card-text">${product.price}</p>
                <p className="card-text">
                  Type: <strong>{product.description}</strong>
                </p>
                <p className="card-text">
                  Skin Suitable: {product.skinTypeSuitable.join(", ")}
                </p>
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-primary mt-2"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;