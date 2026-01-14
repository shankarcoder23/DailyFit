import "../assets/css/Category.css";

const Category = () => {
  const categories = [
    {
      name: "Men",
      image: "src/assets/image/product-img/men-green.png",
    },
    {
      name: "Women",
      image: "src/assets/image/product-img/stylish-women.png",
    },
    {
      name: "Kids",
      image: "src/assets/image/product-img/kids-stylish-girl.png",
    },
    {
      name: "Ethnic",
      image: "src/assets/image/product-img/women-blue.png",
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
