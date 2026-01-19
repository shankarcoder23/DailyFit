import "../assets/css/about.css";
import { FaShippingFast, FaUndo, FaLock, FaTags } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <div className="about-hero">
        <div className="container text-center">
          <h1>About DailyFit</h1>
          <p>Style that fits your everyday life</p>
        </div>
      </div>

      {/* ABOUT CONTENT */}
      <div className="container my-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2>Who We Are</h2>
            <p>
              <strong>DailyFit</strong> is a modern fashion e-commerce platform
              delivering trendy, affordable, and high-quality clothing for
              men and women. We blend comfort with style so you can look
              confident every day.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1521334884684-d80222895322"
              className="img-fluid rounded shadow"
              alt="Fashion"
            />
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <h2 className="text-center mb-4">Why Shop With Us</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="about-card">
              <FaShippingFast />
              <h5>Fast Delivery</h5>
              <p>Quick and reliable shipping across India.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="about-card">
              <FaUndo />
              <h5>Easy Returns</h5>
              <p>Hassle-free 7-day return policy.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="about-card">
              <FaLock />
              <h5>Secure Payments</h5>
              <p>100% secure checkout & trusted gateways.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="about-card">
              <FaTags />
              <h5>Best Prices</h5>
              <p>Trendy fashion at unbeatable prices.</p>
            </div>
          </div>
        </div>

        {/* MISSION */}
        <div className="mission-box mt-5 text-center">
          <h3>Our Mission</h3>
          <p>
            To make fashion accessible, affordable, and stylish for everyone —
            every single day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
