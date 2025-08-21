import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/product`);
        setProducts(res.data); 
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container mt-4">
      <h2>All Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-md-4 mb-4">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;