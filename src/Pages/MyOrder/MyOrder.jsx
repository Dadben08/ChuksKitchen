import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./MyOrder.css";
import { NavLink } from "react-router-dom";

const MyOrder = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeItem,
  } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="myorder-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">No items added yet, add some items from the explore menu Cards.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="order-card" key={item.id}>
              <div className="order-left">
                <img src={item.image} alt={item.title} />
                <div className="order-info">
                  <h4>{item.title}</h4>
                  <p>₦{item.price.toLocaleString()}</p>
                </div>
              </div>

              <div className="order-right">
                {/* Quantity Controls */}
                <div className="qty-controls">
                  <button
                    className="qty-btn"
                    onClick={() => decreaseQty(item.id)}
                  >
                    −
                  </button>

                  <span className="quantity">
                    {item.quantity}
                  </span>

                  <button
                    className="qty-btn"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                </div>

                <span className="price">
                  ₦{(item.price * item.quantity).toLocaleString()}
                </span>

                {/* Remove Button */}
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  ✕
                </button>
              </div>
            </div>
          ))}

          <div className="total-section">
            <h3>
              Total: ₦{totalPrice.toLocaleString()}
            </h3>
            <NavLink to="/checkout">
            <button className="checkout-btn">
              Checkout
            </button>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default MyOrder;
