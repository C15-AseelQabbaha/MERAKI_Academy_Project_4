import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../redux/paymentSlice";
import { clearCart } from "../redux/CartSlice";
import "./Checkout.css"

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartProducts } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    paymentMethod: "Cash on Delivery",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [message, setMessage] = useState("");

  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price * (product.quantity || 1),
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    if (formData.paymentMethod === "Credit Card") {
      if (!formData.cardNumber || !formData.expiryDate || !formData.cvv) {
        setMessage("⚠️ Please fill in your credit card details.");
        setTimeout(() => setMessage(""), 5000);
        return;
      }
    }

    const productsData = cartProducts.map((p) => ({
      productId: p._id,
      quantity: p.quantity || 1,
    }));

    try {
      await dispatch(
        createOrder({
          userId: user._id,
          products: productsData,
          totalPrice,
          paymentMethod: formData.paymentMethod,
          shippingInfo: {
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            country: formData.country,
            postalCode: formData.postalCode,
          },
          creditCardInfo:
            formData.paymentMethod === "Credit Card"
              ? {
                  cardNumber: formData.cardNumber,
                  expiryDate: formData.expiryDate,
                  cvv: formData.cvv,
                }
              : null,
        })
      ).unwrap();

      dispatch(clearCart());
      navigate("/products");
    } catch (err) {
      console.error(err);
      setMessage("❌ Something went wrong. Please try again.");
      setTimeout(() => setMessage(""), 5000);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2>Checkout</h2>

      {message && (
        <div className="alert alert-danger text-center" role="alert">
          {message}
        </div>
      )}

      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          name="fullName"
          className="form-control"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          type="tel"
          name="phone"
          className="form-control"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Address</label>
        <input
          type="text"
          name="address"
          className="form-control"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">City</label>
        <input
          type="text"
          name="city"
          className="form-control"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Country</label>
        <input
          type="text"
          name="country"
          className="form-control"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          className="form-control"
          value={formData.postalCode}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Payment Method</label>
        <select
          name="paymentMethod"
          className="form-control"
          value={formData.paymentMethod}
          onChange={handleChange}
        >
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>
      </div>

      {formData.paymentMethod === "Credit Card" && (
        <>
          <div className="mb-3">
            <label className="form-label">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              className="form-control"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              className="form-control"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">CVV</label>
            <input
              type="text"
              name="cvv"
              className="form-control"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>
        </>
      )}

      <h4>Total: ${totalPrice.toFixed(2)}</h4>

      <button className="btn btn-success w-100 mt-3" onClick={handleCheckout}>
        Complete Purchase
      </button>
    </div>
  );
};

export default Checkout;