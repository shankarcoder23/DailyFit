import "../assets/css/Cart.css";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Cart = ({ cart, setCart }) => {

  const navigate = useNavigate();

  // Update quantity
  const updateQty = (index, type) => {
    const updated = [...cart];
    if (type === "inc") updated[index].qty += 1;
    if (type === "dec" && updated[index].qty > 1) updated[index].qty -= 1;
    setCart(updated);
  };

  // Remove item
  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // Total items and total price
  const totalItems = cart.reduce((a, b) => a + (b.qty || 0), 0);
  const totalPrice = cart.reduce(
    (a, b) => a + (b.price || 0) * (b.qty || 0),
    0
  );

  return (
    <div className="cart-wrapper">
      <div className="container">

        <h4 className="cart-title">
          Shopping Cart <span>({totalItems} items)</span>
        </h4>

        {cart.length === 0 ? (
          <div className="modern-empty-cart">
            <h5>Your cart is empty</h5>
            <p>Looks like you haven't added anything yet</p>
          </div>
        ) : (
          <div className="row">

            {/* LEFT – CART ITEMS */}
            <div className="col-lg-8">
              {cart.map((item, index) => (
                <div className="modern-cart-card" key={index}>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="modern-cart-img"
                  />

                  <div className="modern-cart-info">
                    <h6>{item.name}</h6>
                    <p className="unit-price">₹{item.price}</p>

                    <div className="modern-qty">
                      <button
                        className="qty-btn"
                        onClick={() => updateQty(index, "dec")}
                      >
                        <FaMinus />
                      </button>

                      <span>{item.qty}</span>

                      <button
                        className="qty-btn"
                        onClick={() => updateQty(index, "inc")}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>

                  <div className="modern-cart-right">
                    <span className="item-total">
                      ₹{(item.price || 0) * (item.qty || 0)}
                    </span>

                    <button
                      className="delete-btn"
                      onClick={() => removeItem(index)}
                    >
                      <FaTrash />
                    </button>
                  </div>

                </div>
              ))}
            </div>

            {/* RIGHT – SUMMARY */}
            <div className="col-lg-4">
              <div className="modern-summary">
                <h5>Order Summary</h5>

                <div className="summary-row">
                  <span>Items</span>
                  <span>{totalItems}</span>
                </div>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>

                <div className="summary-row">
                  <span>Delivery</span>
                  <span className="free">FREE</span>
                </div>

                <hr />

                <div className="summary-total">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </div>

                <button
  className="modern-checkout-btn"
  onClick={() => navigate("/checkout")}
>
  Continue to Checkout
</button>

              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
