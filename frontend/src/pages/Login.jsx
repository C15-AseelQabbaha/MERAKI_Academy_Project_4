import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(loginUser({ email, password }));
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/home"); 
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email" placeholder="Email"className="form-control mb-2" value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"placeholder="Password" className="form-control mb-2" value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
      {error && <p className="text-danger mt-2">{error}</p>}
    </div>
  );
};

export default Login;