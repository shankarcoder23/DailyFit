import { Link } from "react-router-dom";

import "../assets/css/navbar.css";


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
        <a className="navbar-brand" href="#">
          <img
            src="src/assets/image/logo-1.png"  // Replace with your logo path
            alt="DailyFit Logo"
            className="logo-img"
          />
        </a>


        {/* MOBILE ICONS */}
        <div className="d-flex align-items-center gap-3 d-lg-none">
          {/* User */}
          <FaUser
            size={20}
            className="nav-icon"
            data-bs-toggle="modal"
            data-bs-target="#signupModal"
          />

          {/* Cart */}
          <div className="position-relative">
            <FaShoppingCart size={20} className="nav-icon" />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </div>

          {/* Sidebar Toggle */}
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
          {/* Search */}
          <form className="search-box me-lg-auto">

            <FaSearch className="search-icon" />
            <input
              type="search"
              className="search-input"
              placeholder="Search clothes..."
            />
          </form>

          {/* Desktop Icons */}
          <div className="d-flex align-items-center gap-4">

            {/* User */}
            <FaUser
              size={22}
              className="nav-icon"
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
            />

            {/* Cart */}
            <div className="position-relative">
              <FaShoppingCart size={22} className="nav-icon" />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </div>

            {/* Sidebar Toggle (Last Icon) */}
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

      {/* MOBILE SIDEBAR */}
      <div
        className="offcanvas offcanvas-start mobile-sidebar"
        tabIndex="-1"
        id="mobileSidebar"
      >
        <div className="offcanvas-header">
          <h5 className="fw-bold">
            Daily<span className="text-primary">Fit</span>
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          {/* Search */}
          <form className="search-box mb-4">
            <FaSearch className="search-icon" />
            <input
              type="search"
              className="search-input"
              placeholder="Search clothes..."
            />
          </form>

          {/* Sidebar Links */}
         <ul className="sidebar-links">
  <li>
    <Link to="/Order" data-bs-dismiss="offcanvas">
       Orders
    </Link>
  </li>

  <li>
    <Link to="/categories" data-bs-dismiss="offcanvas">
      Categories
    </Link>
  </li>

  <li>
    <Link to="/wishlist" data-bs-dismiss="offcanvas">
      Wishlist
    </Link>
  </li>

  <li>
    <Link to="/Cart" data-bs-dismiss="offcanvas">
      Cart
    </Link>
  </li>

  <li>
    <Link to="/About" data-bs-dismiss="offcanvas">
      About
    </Link>
  </li>

  <li>
    <Link to="/Contact" data-bs-dismiss="offcanvas">
      Contact Us
    </Link>
  </li>
</ul>

        </div>
      </div>
    </>
  );
};

export default Navbar;
