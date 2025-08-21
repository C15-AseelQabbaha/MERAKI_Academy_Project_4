import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="/">SkinCare</a>












 <div className="d-flex ms-3" >
  <a href="/login" className="btn btn-outline-primary me-2">Login</a>

  <a href="/signup" className="btn btn-primary">SignUp</a>

</div>






      </div>
    </nav>





  );
};

export default Navbar;