const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card h-100">
      <img src={product.img} className="card-img-top" />
      <div className="card-body text-center">
        <h6>{product.name}</h6>
        <p className="fw-bold">₹{product.price}</p>

        <button
          className="btn btn-outline-dark btn-sm me-2"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

        <button className="btn btn-dark btn-sm">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
