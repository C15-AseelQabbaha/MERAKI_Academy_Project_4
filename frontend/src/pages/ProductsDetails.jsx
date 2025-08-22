import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductsDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.product.products.find((p) => p.id === parseInt(id))
  );

  if (!product) return <p>Product not found</p>;

  return (
    <div className="container mt-4">
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
          <p><strong>Type:</strong> {product.description}</p>
          <p><strong>Skin Suitable:</strong> {product.skinTypeSuitable.join(", ")}</p>
          <p><strong>Ingredients:</strong> {product.ingredients.join(", ")}</p>
          <Link to="/products" className="btn btn-secondary mt-3">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
