import React from "react";

import { NavLink } from "react-router-dom";

const CartHeader = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg  p-3"
        style={{ backgroundColor: " #e3f2fd" }}
      >
        <div className="container">
          <NavLink className="navbar-brand" to={"/"}>
            OnlineShop
          </NavLink>
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default CartHeader;
