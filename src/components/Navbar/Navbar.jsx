import React from "react";
import "./navbar.css";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const total = props.cart.reduce((total, item) => {
    return item.qty + total;
  }, 0);
  return (
    <nav
      className="navbar navbar-expand-lg bg-light"
      style={{ padding: "2px 0px" }}
    >
      <div className="container-fluid ">
        {/* <img className="logo-img" src="/src/asset/cozy-logo.jpg" alt="logo" /> */}
        <div className="logo">CoZy</div>

        <div className="collapse-navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-button ">
          <Link to="/register">
            <button type="button" className="btn btn-dark">
              <PersonAddIcon style={{ marginRight: "6px" }} />
              Register
            </button>
          </Link>
          <Link to="/login">
            <button type="button" className="btn btn-dark">
              <ExitToAppIcon style={{ marginRight: "6px" }} />
              Login
            </button>
          </Link>
          <Link to="/cart">
            <button type="button" className="btn btn-dark">
              <ShoppingCartIcon style={{ marginRight: "6px" }} />
              {/* Cart ({props.cart.length ? props.cart.length : 0}) */}
              Cart({total ? total : 0})
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
