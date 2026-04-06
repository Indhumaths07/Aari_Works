import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity }) {
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>Your cart is empty</h2>
          <button
            onClick={() => navigate("/collections")}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#8b0000",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Go to Collections
          </button>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                  padding: "15px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  flexWrap: "wrap",
                }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 8px 0" }}>{item.name}</h3>
                  <p style={{ margin: "4px 0", color: "#666" }}>{item.category}</p>
                  <p style={{ margin: "4px 0", fontWeight: "bold", color: "#8b0000" }}>
                    ₹ {item.price}
                  </p>

                  {/* Quantity Controls */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      style={qtyBtn}
                    >
                      -
                    </button>

                    <span style={{ fontWeight: "bold", minWidth: "20px", textAlign: "center" }}>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      style={qtyBtn}
                    >
                      +
                    </button>
                  </div>

                  <p
                    style={{
                      marginTop: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Subtotal: ₹ {item.price * item.quantity}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total + Checkout */}
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              borderTop: "2px solid #ddd",
              textAlign: "right",
            }}
          >
            <h2>Total: ₹ {totalPrice}</h2>

            <button
              onClick={() => navigate("/checkout")}
              style={{
                marginTop: "15px",
                padding: "12px 24px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#8b0000",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const qtyBtn = {
  width: "32px",
  height: "32px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#8b0000",
  color: "white",
  fontSize: "18px",
  cursor: "pointer",
};

export default Cart;