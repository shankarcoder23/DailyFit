import { Link } from "react-router-dom";
import "../assets/css/Category.css";

const Category = () => {
  const categories = [
    { name: "Men", slug: "men", image: "src/assets/image/Category-img/men.jpg" },
    { name: "Women", slug: "women", image: "src/assets/image/Category-img/women3.jpg" },
    { name: "Kids", slug: "kids", image: "src/assets/image/Category-img/kids.jpg" },
    { name: "Ethnic", slug: "ethnic", image: "src/assets/image/Category-img/ethnic.jpg" },
  ];

  return (
    <div className="container my-4">
      <div className="row text-center g-3">
        {categories.map((cat) => (
          <div key={cat.slug} className="col-6 col-md-3">
            <Link to={`/category/${cat.slug}`} className="text-decoration-none">
              <div
                className="category-card"
                style={{ backgroundImage: `url(${cat.image})` }}
              >
                <div className="category-overlay">
                  <h5>{cat.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
