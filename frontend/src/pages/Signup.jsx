import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    skinType: "",
  });

  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(registerUser(formData));
    if (registerUser.fulfilled.match(resultAction)) {
      navigate("/login"); 
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px", textAlign: "center" }}>
      <img 
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/skincare-%26-hair-free-logo-design-template-7570ef196bb39d2f49a2ac9bf7900df2_screen.jpg?ts=1710345189"
        alt="App Logo" 
        style={{ width: "260px", marginBottom: "20px" }} 
      />
      <h2 className="mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
        <input type="text" name="name" placeholder="Name" className="form-control mb-2"
          value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="form-control mb-2"
          value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="form-control mb-2"
          value={formData.password} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" className="form-control mb-2"
          value={formData.age} onChange={handleChange} required />
        <select name="skinType" className="form-control mb-2" value={formData.skinType}  onChange={handleChange}>
          <option value="" disabled>
            Select Your Skin Type
          </option>
          <option value="normal">Normal</option>
          <option value="oily">Oily</option>
          <option value="dry">Dry</option>
          <option value="sensitive">Sensitive</option>
          <option value="combination">Combination</option>
        </select>
        <button className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      {error && <p className="text-danger mt-2">{error}</p>}
      <p className="mt-3 text-center">
        Already have an account?{" "}
        <span 
          className="text-primary" 
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Log In
        </span>
      </p>
    </div>
  );
};

export default Signup;