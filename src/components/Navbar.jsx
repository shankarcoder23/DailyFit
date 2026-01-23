import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import {
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaBars
} from "react-icons/fa";

const Navbar = ({ cartCount }) => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg sticky-top modern-navbar px-4">

        {/* Brand */}
        <NavLink className="navbar-brand" to="/">
          <img
            src="src\assets\image\header-logo.png"
            alt="DailyFit Logo"
            className="logo-img"
          />
        </NavLink>

        {/* MOBILE ICONS */}
        <div className="d-flex align-items-center gap-3 d-lg-none">
          <FaUser
            size={20}
            className="nav-icon"
            data-bs-toggle="modal"
            data-bs-target="#signupModal"
          />

          <NavLink to="/cart" className="position-relative">
  <FaShoppingCart size={20} className="nav-icon" />
  {cartCount > 0 && (
    <span className="cart-badge">{cartCount}</span>
  )}
</NavLink>


          <button
            className="btn text-white p-0"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileSidebar"
          >
            <FaBars size={22} />
          </button>
        </div>

        {/* DESKTOP NAV */}
        <div className="collapse navbar-collapse d-none d-lg-flex">
          <form className="search-box me-lg-auto">
            <FaSearch className="search-icon" />
            <input
              type="search"
              className="search-input"
              placeholder="Search clothes..."
            />
          </form>

          <div className="d-flex align-items-center gap-4">
            <FaUser
              size={22}
              className="nav-icon"
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
            />

            <NavLink to="/cart" className="position-relative">
  <FaShoppingCart size={22} className="nav-icon" />
  {cartCount > 0 && (
    <span className="cart-badge">{cartCount}</span>
  )}
</NavLink>


            <button
              className="btn text-white p-0"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileSidebar"
            >
              <FaBars size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE SEARCH BELOW NAVBAR */}
<div className="mobile-search d-lg-none">
  <form className="search-box">
    <FaSearch className="search-icon" />
    <input
      type="search"
      className="search-input"
      placeholder="Search clothes..."
    />
  </form>
</div>


      {/* MOBILE SIDEBAR */}
      <div
        className="offcanvas offcanvas-start mobile-sidebar"
        tabIndex="-1"
        id="mobileSidebar"
      >
        <div className="offcanvas-header">
          <img
            src="src\assets\image\header-logo.png"
            alt="DailyFit Logo"
            className="logo-img"
          />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          

          {/* Sidebar Links */}
          <ul className="sidebar-links">
            <li>
              <NavLink to="/Orders" data-bs-dismiss="offcanvas">
                Orders
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cart"
                onClick={() => {
                  const offcanvas = document.querySelector(".offcanvas.show");
                  if (offcanvas) offcanvas.classList.remove("show");
                }}
              >
                Cart
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={() => {
                  const offcanvas = document.querySelector;
                  if (offcanvas) offcanvas.classList.remove("show");
                }}
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={() => {
                  const offcanvas = document.querySelector;
                  if (offcanvas) offcanvas.classList.remove("show");
                }}
              >
                Contact Us
              </NavLink>


            </li>

             <li>
              <NavLink
                to="/order"
                onClick={() => {
                  const offcanvas = document.querySelector;
                  if (offcanvas) offcanvas.classList.remove("show");
                }}
              >
                My Order
              </NavLink>

              
            </li>
          </ul>

           {/* Social Media Icons */}
    <div className="sidebar-social d-flex gap-3 mt-auto">
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaFacebookF size={20} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <FaInstagram size={20} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FaTwitter size={20} />
      </a>
    </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
