import "../assets/css/order.css";

const Orders = ({ orders, setOrders }) => {
  const steps = [
    "Placed",
    "Confirmed",
    "Shipped",
    "Out for Delivery",
    "Delivered"
  ];

  const getStatusIndex = (status) => steps.indexOf(status);

  const handleCancelOrder = (orderId) => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      setOrders((prev) =>
        prev.map((order) =>
          order.id === orderId
            ? { ...order, status: "Cancelled" }
            : order
        )
      );
    }
  };

  if (!orders || orders.length === 0) {
    return (
      <div className="container my-5">
        <h2>My Orders</h2>
        <p>You have not placed any orders yet.</p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2>My Orders</h2>

      {orders.map((order) => (
        <div key={order.id} className="order-card mb-4 p-4 border rounded">

          {/* HEADER */}
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <strong>Order ID:</strong> {order.id}
            </div>
            <span className={`badge ${order.status === "Cancelled" ? "bg-danger" : "bg-success"}`}>
              {order.status}
            </span>
          </div>

          <p className="mt-2">Date: {order.date}</p>

          {/* TRACKING BAR */}
          {order.status !== "Cancelled" && (
            <div className="tracking-bar my-3">
              {steps.map((step, index) => {
                const active = index <= getStatusIndex(order.status);
                return (
                  <div
                    key={step}
                    className={`tracking-step ${active ? "active" : ""}`}
                  >
                    <div className="dot"></div>
                    <span>{step}</span>
                  </div>
                );
              })}
            </div>
          )}

          <hr />

          {/* ORDER ITEMS */}
          {order.items.map((item) => (
            <div
              key={item.id}
              className="d-flex align-items-center justify-content-between mb-3"
            >
              <div className="d-flex align-items-center">
                <img
                  src={item.image || "/placeholder.png"}
                  alt={item.name}
                  style={{ width: 60, height: 60, objectFit: "cover", marginRight: 15, borderRadius: 8 }}
                />
                <div>
                  <div>{item.name} × {item.qty}</div>
                  <small>₹{item.price} each</small>
                </div>
              </div>
              <div>
                <strong>₹{item.price * item.qty}</strong>
              </div>
            </div>
          ))}

          <hr />

          <div className="d-flex justify-content-between align-items-center">
            <div><strong>Total:</strong> ₹{order.total}</div>
            {order.status !== "Cancelled" && (
              <button
                className="btn btn-outline-warning text-dark btn-sm"
                onClick={() => handleCancelOrder(order.id)}
              >
                Cancel Order
              </button>
            )}
          </div>

        </div>
      ))}
    </div>
  );
};

export default Orders;
