import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1>Skin Care</h1>
          <nav>
            <Link to="/signUp" className="btn btn-primary m-2">SignUp</Link>
            <Link to="/login" className="btn btn-secondary m-2">Login</Link>
          </nav>

          <Routes>
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;