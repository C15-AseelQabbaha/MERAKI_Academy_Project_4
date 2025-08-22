import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://localhost:5000";

ProductDetails=()=> {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/product/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError("Error fetching product details");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {product && (
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={product.image || "https://via.placeholder.com/400"}
            alt={product.name}
            className="w-full md:w-1/2 h-80 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-xl text-green-600 mb-3">${product.price}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


export default ProductDetails