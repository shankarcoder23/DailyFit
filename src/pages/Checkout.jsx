import { useState } from "react";
import "../assets/css/checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart, setCart, setOrders }) => {
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  const [payment, setPayment] = useState("cod");

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  // -------------------------------
  // SAVE ORDER FUNCTION
  // -------------------------------
  const saveOrder = () => {
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: totalPrice,
      address,
      paymentMethod: payment,
      status: "Placed",
      date: new Date().toLocaleString()
    };

    setOrders((prev) => [...prev, newOrder]);
    setCart([]);

    navigate("/order");
  };

  // -------------------------------
  // RAZORPAY
  // -------------------------------
  const handleRazorpay = () => {
    const options = {
      key: "rzp_test_AbCdEfGhIjKlMn",
      amount: totalPrice * 100,
      currency: "INR",
      name: "DailyFit Store",
      description: "Order Payment",

      handler: function () {
        saveOrder();
      },

      prefill: {
        name: address.name,
        contact: address.phone
      },

      theme: {
        color: "#000000"
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  // -------------------------------
  // PLACE ORDER
  // -------------------------------
  const placeOrder = () => {
    if (!address.name || !address.phone || !address.address) {
      alert("Please fill delivery details");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    if (payment === "cod") {
      saveOrder();
    } else {
      handleRazorpay();
    }
  };

  return (
    <div className="checkout-container">

      {/* LEFT */}
      <div className="checkout-left">

        {/* ADDRESS */}
        <div className="checkout-card">
          <h4> Delivery Address</h4>

          <input
            placeholder="Full Name"
            value={address.name}
            onChange={(e) =>
              setAddress({ ...address, name: e.target.value })
            }
          />

          <input
            placeholder="Phone Number"
            value={address.phone}
            onChange={(e) =>
              setAddress({ ...address, phone: e.target.value })
            }
          />

          <textarea
            placeholder="Full Address"
            rows="3"
            value={address.address}
            onChange={(e) =>
              setAddress({ ...address, address: e.target.value })
            }
          />

          <div className="grid-2">
            <input
              placeholder="City"
              value={address.city}
              onChange={(e) =>
                setAddress({ ...address, city: e.target.value })
              }
            />
            <input
              placeholder="State"
              value={address.state}
              onChange={(e) =>
                setAddress({ ...address, state: e.target.value })
              }
            />
          </div>

          <input
            placeholder="Pincode"
            value={address.pincode}
            onChange={(e) =>
              setAddress({ ...address, pincode: e.target.value })
            }
          />
        </div>

        {/* PAYMENT */}
        <div className="checkout-card">
          <h4> Payment Method</h4>

          <div
            className={`payment-option ${payment === "cod" ? "active" : ""}`}
            onClick={() => setPayment("cod")}
          >
            <span className="radio"></span>
            <div className="payment-text">
              <strong>Cash on Delivery</strong>
              <small>Pay when product arrives</small>
            </div>
          </div>

          <div
            className={`payment-option ${payment === "upi" ? "active" : ""}`}
            onClick={() => setPayment("upi")}
          >
            <span className="radio"></span>
            <div className="payment-text">
              <strong>UPI</strong>
              <small>Google Pay / PhonePe / Paytm</small>
            </div>
          </div>

          <div
            className={`payment-option ${payment === "card" ? "active" : ""}`}
            onClick={() => setPayment("card")}
          >
            <span className="radio"></span>
            <div className="payment-text">
              <strong>Credit / Debit Card</strong>
              <small>Visa, MasterCard, RuPay</small>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="checkout-right">
        <div className="checkout-card sticky">

          <h4> Order Summary</h4>

          {cart.map((item, i) => (
            <div className="summary-row" key={i}>
              <span>
                {item.name} × {item.qty}
              </span>
              <span>₹{item.price * item.qty}</span>
            </div>
          ))}

          <hr />

          <div className="summary-row total">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <button className="place-order-btn" onClick={placeOrder}>
            Place Order
          </button>

        </div>
      </div>

    </div>
  );
};

export default Checkout;
