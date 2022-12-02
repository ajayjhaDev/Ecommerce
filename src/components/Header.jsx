import React from "react";
import { Link } from "react-scroll";

import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

const Header = () => {
  const cartProducts = useSelector((state) => state.cart.cartproducts);

  let activeStyle = {
    textDecoration: "none",
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg  p-3"
        style={{ backgroundColor: " #e3f2fd" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            OnlineShop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  Contact Us
                </Link>
              </li>

              <li className="nav-item ms-5">
                <NavLink to={"/cart"} style={activeStyle}>
                  <i className="bi bi-cart3">{cartProducts.length}</i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
