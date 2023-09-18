import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="big">
          <div className="left">
            <h1>Join 100 Compannies who boost their business with Product</h1>
            <button>Get This</button>
          </div>
          <div className="right">
            <img src="assets/footer.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
