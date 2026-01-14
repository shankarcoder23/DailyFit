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
        <a className="navbar-brand fw-bold" href="#">
          Daily<span className="text-white">Fit</span>
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
            <FaUser
              size={22}
              className="nav-icon"
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
            />

            <div className="position-relative">
              <FaShoppingCart size={22} className="nav-icon" />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </div>
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
            <li><a href="#">My Orders</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>

            <li className="mt-3">
              <button
                className="btn btn-primary w-100"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              >
                Sign Up / Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
