import "../assets/css/Cart.css";

const Cart = ({ cart, setCart }) => {
  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const increaseQty = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].qty += 1;
    setCart(updatedCart);
  };

  const decreaseQty = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].qty > 1) {
      updatedCart[index].qty -= 1;
      setCart(updatedCart);
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="container my-5 cart-page">
      <h3 className="mb-4 fw-bold"> My Cart</h3>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className="row">
          {/* Cart Items */}
          <div className="col-lg-8">
            {cart.map((item, index) => (
              <div className="cart-card mb-3" key={index}>
                <div className="cart-img">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="cart-details">
                  <h6>{item.name}</h6>
                  <p className="price">₹{item.price}</p>

                  <div className="qty-box">
                    <button onClick={() => decreaseQty(index)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(index)}>+</button>
                  </div>
                </div>

                <div className="cart-actions">
                  <p className="subtotal">
                    ₹{item.price * item.qty}
                  </p>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="summary-card">
              <h5>Order Summary</h5>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Total Items</span>
                <span>{cart.length}</span>
              </div>
              <div className="d-flex justify-content-between fw-bold mt-2">
                <span>Total Price</span>
                <span>₹{totalPrice}</span>
              </div>

              <button className="checkout-btn mt-4">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
