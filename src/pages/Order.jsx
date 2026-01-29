const Orders = ({ orders }) => {
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
        <div key={order.id} className="order-card mb-4 p-3 border rounded">

          <div className="d-flex justify-content-between">
            <strong>Order ID:</strong> {order.id}
            <span className="badge bg-primary">{order.status}</span>
          </div>

          <p>Date: {order.date}</p>
          <p>Total: ₹{order.total}</p>

          <hr />

          {order.items.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between mb-2"
            >
              <span>
                {item.name} × {item.qty}
              </span>
              <span>₹{item.price * item.qty}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Orders;
