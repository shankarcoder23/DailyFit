import "../assets/css/checkout.css";

const Checkout = ({ cart }) => {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="checkout container my-5">
      <h3 className="mb-4">Checkout</h3>

      <div className="row">
        {/* Billing Details */}
        <div className="col-md-7">
          <div className="checkout-card">
            <h5>Billing Details</h5>

            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Mobile Number" />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Pincode" />

            <button className="btn btn-dark w-100 mt-3">
              Place Order
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-md-5">
          <div className="checkout-card">
            <h5>Order Summary</h5>

            {cart.map((item, index) => (
              <div className="summary-item" key={index}>
                <span>{item.name} × {item.qty}</span>
                <span>₹{item.price * item.qty}</span>
              </div>
            ))}

            <hr />
            <h6>Total: ₹{totalPrice}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
