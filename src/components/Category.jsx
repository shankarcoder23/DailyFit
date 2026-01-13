const Category = () => {
  const categories = ["Men", "Women", "Kids", "Ethnic"];

  return (
    <div className="container my-3">
      <div className="row text-center">
        {categories.map(cat => (
          <div key={cat} className="col-6 col-md-3 fw-semibold">
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
