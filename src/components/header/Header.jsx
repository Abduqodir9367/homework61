import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#">
            <img src="assets/logo.png" alt="" />
            <h2>Product</h2>
          </a>
          <div className="nav-items">
            <div className="nav-links">
              <a href="#">Product</a>
              <a href="#">Customers</a>
              <a href="#">Pricing</a>
              <a href="#">Resources</a>
            </div>

            <div className="nav-btns">
              <button className="btn1">Sign In</button>
              <button className="btn2">Sign Up</button>
              <div className="btn3">
                <img src="assets/dark.png" alt="icon" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
