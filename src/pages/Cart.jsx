import "../assets/css/Cart.css";
import { FaTrash } from "react-icons/fa";

const Cart = ({ cartItems, setCartItems }) => {
  const increaseQty = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">🛒 Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <div className="row">
          {/* Cart Items */}
          <div className="col-lg-8">
            {cartItems.map(item => (
              <div className="cart-card d-flex align-items-center mb-3" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="ms-3 flex-grow-1">
                  <h6 className="mb-1">{item.name}</h6>
                  <p className="mb-1 text-muted">₹{item.price}</p>

                  <div className="qty-box">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>

                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeItem(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="col-lg-4">
            <div className="summary-box">
              <h5 className="fw-bold mb-3">Order Summary</h5>

              <div className="d-flex justify-content-between mb-2">
                <span>Total Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="d-flex justify-content-between fw-bold fs-5">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>

              <button className="btn btn-dark w-100 mt-3">
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
