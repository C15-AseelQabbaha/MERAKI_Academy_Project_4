import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    skinType: "normal",
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
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="form-control mb-2"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form-control mb-2"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="form-control mb-2"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          className="form-control mb-2"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <select
          name="skinType"
          className="form-control mb-2"
          value={formData.skinType}
          onChange={handleChange}
        >
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
    </div>
  );
};

export default SignUp;