import "../assets/css/navbar.css";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";

const Navbar = ({ cartCount }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top modern-navbar px-4">
        {/* Brand */}
        <a className="navbar-brand fw-bold text-dark" href="#">
          Daily<span className="text-primary">Fit</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Content */}
        <div className="collapse navbar-collapse" id="nav">
          {/* Search */}
          <form className="search-box mx-lg-auto my-3 my-lg-0">
            <FaSearch className="search-icon" />
            <input
              type="search"
              className="search-input"
              placeholder="Search clothes..."
            />
          </form>

          {/* Icons */}
          <div className="d-flex align-items-center gap-4 ms-lg-3">
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
    </>
  );
};

export default Navbar;
