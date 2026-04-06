import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const totalPrice = 2499; // temporary static total

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const orderData = {
        customerName: name,
        address: address,
        phone: phone,
        totalAmount: totalPrice,
      };

      console.log("Sending order data:", orderData);

      const response = await axios.post(
        "http://localhost:8080/api/orders",
        orderData
      );

      console.log("Order response:", response.data);
      alert("Order placed successfully!");

      navigate("/orders");
    } catch (error) {
      console.error("Full order error:", error);
      console.error("Error response:", error.response);
      console.error("Error data:", error.response?.data);

      alert("Something went wrong while placing order.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          marginBottom: "20px",
          borderRadius: "10px",
        }}
      >
        <h3>Order Summary</h3>
        <p>Aari Work Saree - ₹ {totalPrice} × 1</p>
        <h3>Total: ₹ {totalPrice}</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <textarea
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          rows="4"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#800000",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;