import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h2>My Cart</h2>

      {cartProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartProducts.map((product) => (
              <li
                key={product._id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "80px", marginRight: "15px" }}
                  />
                <div>
                  <h5>{product.name}</h5>
                  <p>
                    ${product.price} x {product.quantity}
                  </p>
                  
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(removeFromCart(product._id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h4>Total: ${totalPrice.toFixed(2)}</h4>
        </>
      )}
        <button
        className="btn btn-secondary mt-3"
        onClick={() => navigate("/products")}
      >
        Back to Products
      </button>
    </div>
  );
};

export default CartPage;