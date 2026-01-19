import "../assets/css/productCard.css";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      {/* IMAGE */}
      <div className="product-img">
        <img src={product.image} alt={product.name} />
      </div>

      {/* CONTENT */}
      <div className="product-info">
        <h6 className="product-title">{product.name}</h6>
        <p className="product-price">₹{product.price}</p>

        <div className="product-actions">
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

          <button className="btn btn-dark btn-sm">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
