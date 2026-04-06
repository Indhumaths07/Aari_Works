import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/orders");
      const data = await response.json();
      console.log("Fetched orders:", data);
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "20px",
            }}
          >
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Name:</strong> {order.customerName}</p>
            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>Phone:</strong> {order.phone}</p>
            <p><strong>Total Amount:</strong> ₹ {order.totalAmount}</p>

            {order.items && order.items.length > 0 && (
              <div style={{ marginTop: "10px" }}>
                <h4>Items:</h4>
                {order.items.map((item, index) => (
                  <p key={index}>
                    {item.productName} - ₹ {item.price} × {item.quantity}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;