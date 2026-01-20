import "../assets/css/Category.css";

const Category = () => {
  const categories = [
    {
      name: "Men",
      image: "src/assets/image/Category-img/men.jpg",
    },
    {
      name: "Women",
      image: "src/assets/image/Category-img/women3.jpg",
    },
    {
      name: "Kids",
      image: "src/assets/image/Category-img/kids.jpg",
    },
    {
      name: "Ethnic",
      image: "src/assets/image/Category-img/ethnic.jpg",
    },
  ];

  return (
    <div className="container my-4">
      <div className="row text-center g-3">
        {categories.map((cat) => (
          <div key={cat.name} className="col-6 col-md-3">
            <div
              className="category-card"
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <div className="category-overlay">
                <h5>{cat.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
