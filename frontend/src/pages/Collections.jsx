import React, { useEffect, useState } from "react";

const Collections = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const fetchProducts = (category = "all") => {
    let url = "http://localhost:8080/api/products";

    if (category !== "all") {
      url = `http://localhost:8080/api/products/category/${category}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  };

  useEffect(() => {
    fetchProducts("all");
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchProducts(category);
  };

  const categories = ["all", "sarees", "blouse", "kids", "shirts", "bangles"];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Collections</h2>

      {/* Category Buttons */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            style={{
              padding: "10px 16px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              backgroundColor:
                selectedCategory === category ? "#b22222" : "#f3f3f3",
              color: selectedCategory === category ? "#fff" : "#333",
              fontWeight: "bold"
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px"
        }}
      >
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
              }}
            >
              <img
                src={product.imageUrl || product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "8px"
                }}
              />

              <h3 style={{ marginTop: "10px" }}>{product.name}</h3>
              <p style={{ color: "#666" }}>{product.category}</p>
              <p style={{ fontWeight: "bold", color: "#b22222" }}>₹ {product.price}</p>

              <button
                onClick={() => addToCart(product)}
                style={{
                  marginTop: "10px",
                  padding: "10px 15px",
                  border: "none",
                  borderRadius: "6px",
                  backgroundColor: "#b22222",
                  color: "#fff",
                  cursor: "pointer"
                }}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Collections;