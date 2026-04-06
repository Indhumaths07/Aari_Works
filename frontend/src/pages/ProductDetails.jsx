import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert("Product added to cart!");
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  if (!product) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading product...</p>;
  }

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{
              width: "100%",
              maxHeight: "500px",
              objectFit: "cover",
              borderRadius: "16px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        <div>
          <h1 style={{ marginBottom: "15px", color: "#8B0000" }}>{product.name}</h1>

          <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.7" }}>
            {product.description}
          </p>

          <p style={{ marginTop: "15px", fontSize: "18px" }}>
            <strong>Category:</strong> {product.category}
          </p>

          <p
            style={{
              marginTop: "20px",
              fontSize: "28px",
              fontWeight: "bold",
              color: "#8B0000",
            }}
          >
            ₹ {product.price}
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={handleAddToCart}
              style={{
                padding: "14px 24px",
                backgroundColor: "#8B0000",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              style={{
                padding: "14px 24px",
                backgroundColor: "#DAA520",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;