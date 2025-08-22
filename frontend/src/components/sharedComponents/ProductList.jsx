import React from "react";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state.products.items);

  return (
    <div>
      <h2>Our Products</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={p.image} alt={p.name} width="150" />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <strong>${p.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;