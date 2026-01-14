
import "../assets/css/Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-5">
      <div className="container">
        <div className="row">

          {/* Brand */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold">DailyFit</h4>
            <p className="small">
              Trendy & comfortable fashion for Men, Women, Kids & Ethnic wear.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Customer Service</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Follow Us</h6>
            <div className="d-flex gap-3 footer-social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center pb-3 small text-muted">
          © {new Date().getFullYear()} DailyFit. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
