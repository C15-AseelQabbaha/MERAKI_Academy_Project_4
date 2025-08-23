import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-dark py-3 mt-5 shadow-sm">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Skin Care App. All Rights Reserved.
        </p>
        <p>DESIGNED BY ENG:ASEEL HASAN QABBAHA</p>
      </div>
    </footer>
  );
};

export default Footer;