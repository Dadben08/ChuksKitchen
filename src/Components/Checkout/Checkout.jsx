import { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [isDelivery, setIsDelivery] = useState(true);
  const [promo, setPromo] = useState("");

  // Example values (replace with real cart data later)
  const subtotal = 120;
  const deliveryFee = isDelivery ? 10 : 0;
  const serviceFee = 5;

  const total = subtotal + deliveryFee + serviceFee;

  return (
    <div className="checkout-wrapper">
      <div className="checkout-container">

        <h3>Order Summary</h3>
        <hr />

        {/* Promo Code */}
        <p>Add Promo Code</p>
        <div className="promo-section">
          
          <input
            type="text"
            placeholder="Enter promo code"
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
          />
          <button>Apply</button>
        </div>

        <hr />

        {/* Summary */}
        <div className="summary-row">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>

        <div className="summary-row">
          <span>Delivery Fee</span>
          <span>${deliveryFee}</span>
        </div>

        <div className="summary-row">
          <span>Service Fee</span>
          <span>${serviceFee}</span>
        </div>

        <hr />

        <div className="total-row">
          <span>Total</span>
          <span>${total}</span>
        </div>

        {/* Delivery Toggle */}
        <div className="delivery-toggle">
          <button
            className={isDelivery ? "active" : ""}
            onClick={() => setIsDelivery(true)}
          >
            Delivery
          </button>
          <button
            className={!isDelivery ? "active" : ""}
            onClick={() => setIsDelivery(false)}
          >
            Pickup
          </button>
        </div>
        <div className="proceed-section">
          <h3>Special Instructions for Restaurant</h3>  
          <hr />
          <textarea
            placeholder="Add any special instructions for the restaurant here..."
            rows={4}
          ></textarea>  
        
        </div>
        <button className="proceed-btn">
          Proceed to Checkout
        </button>

      </div>
    </div>
  );
};

export default Checkout;
