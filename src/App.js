import React from "react";
import shirt from "./images/shirt.jpg";

function App() {
  function openMenu() {
    document.querySelector(".sidebar").classList.add("open");
  }

  function closeMenu() {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.html">e-commerce-app</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          &#10006;
        </button>
        <ul>
          <li>
            <a href="index.html">Pants</a>
          </li>
          <li>
            <a href="index.html">Shirts</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img className="product-image" src={shirt} alt="cover" />
                <div className="product-name">
                  <a href="product.html">Man slim shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars reviews(10)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">All rights reserved.</footer>
    </div>
  );
}

export default App;
