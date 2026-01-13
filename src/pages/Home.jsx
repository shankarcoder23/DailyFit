import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = ({ addToCart }) => {
  return (
    <div className="container my-5">
      <h4 className="mb-4">🔥 Trending Products</h4>
      <div className="row g-3">
        {products.map(p => (
          <div className="col-6 col-md-3" key={p.id}>
            <ProductCard product={p} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
