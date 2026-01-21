import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const SubCategory = () => {
  const { categoryName } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="container my-5">
      <h3 className="mb-4 text-capitalize">
        {categoryName} Collection
      </h3>

      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="row g-4">
          {filteredProducts.map((product) => (
            <div className="col-md-3" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default SubCategory;
