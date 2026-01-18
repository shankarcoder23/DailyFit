import "../assets/css/Cart.css";

const Cart = ({ cart, setCart }) => {
  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">My Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center border p-3 mb-3"
          >
            <div>
              <h6>{item.name}</h6>
              <p className="mb-0">₹{item.price}</p>
            </div>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeItem(index)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
