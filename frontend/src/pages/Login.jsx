import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
//import logo from "../assets/logo.png"; // ضيف اللوجو داخل مجلد assets

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(loginUser({ email, password }));
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/"); 
    }
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-center" style={{ maxWidth: "400px" }}>
      
      
      <img 
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/skincare-%26-hair-free-logo-design-template-7570ef196bb39d2f49a2ac9bf7900df2_screen.jpg?ts=1710345189"
        alt="App Logo" 
        style={{ width: "260px", marginBottom: "20px" }} 
      />

      <h2 className="mb-3">LogIn</h2>
      
      <form onSubmit={handleSubmit} className="w-100">
        <input 
          type="email" 
          placeholder="Email" 
          className="form-control mb-2"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="form-control mb-2"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
      
      {error && <p className="text-danger mt-2">{error}</p>}
      
      <p className="mt-3 text-center">
        New user?{" "}
        <span
          className="text-primary"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Login;