import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { addToCart } from "../redux/CartSlice"
const ProductsDetails = () => {
  const { id } = useParams();
    const dispatch = useDispatch();
    

  const product = useSelector((state) =>
   state.product.products.find((p) => p._id === id)
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
          <p><strong>Type:</strong> {product.type}</p>
          <p><strong>Descripyion:</strong> {product.description}</p>
          <p><strong>Skin Suitable:</strong> {product.skinTypeSuitable.join(", ")}</p>
          <p><strong>Ingredients:</strong> {product.ingredients?.join(", ")}</p>
          
          <button
            className="btn btn-primary mt-3 me-2"
            onClick={() => dispatch(addToCart(product))}
            
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
