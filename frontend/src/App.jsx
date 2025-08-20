import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Login from './components/sharedComponents/Login';
import SignUp from './components/sharedComponents/SignUp';


const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Skin Care</h1>

        <nav>
          <link to="/signUp">SignUp</link>

          <link to="/login">Login</link>

        </nav>

        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

        </Routes>




      </div>
    </Router>
  )
}

export default App
