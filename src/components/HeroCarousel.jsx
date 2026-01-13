import "../assets/css/hero.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "New Season Arrivals",
      subtitle: "Premium styles for your daily fit",
      img: "src/assets/image/carousel/1st-c.png",
    },
    {
      id: 2,
      title: "Trendy Wear 2025",
      subtitle: "Upgrade your fashion game",
      img: "src/assets/image/carousel/2nd-C.png",
    },
    {
      id: 3,
      title: "Ethnic & Casual Styles",
      subtitle: "Designed for comfort & style",
      img: "src/assets/image/carousel/3rd-C.png",
    },
  ];

  return (
    <div
      id="heroCarousel"
      className="carousel slide hero-carousel"
      data-bs-ride="carousel"
    >
      {/* 🔵 Indicators */}
      <div className="carousel-indicators hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
          ></button>
        ))}
      </div>

      {/* 🔵 Slides */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={slide.id}
          >
            <div className="hero-img-wrapper">
              <img src={slide.img} className="hero-img w-100" alt="" />
              <div className="hero-overlay"></div>
            </div>

            <div className="carousel-caption hero-caption">
              <h1 className="fw-bold">{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button className="btn btn-primary btn-lg hero-btn">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ⬅️ Left Arrow */}
      <button
        className="carousel-control-prev hero-arrow"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <FaChevronLeft />
      </button>

      {/* ➡️ Right Arrow */}
      <button
        className="carousel-control-next hero-arrow"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default HeroCarousel;
