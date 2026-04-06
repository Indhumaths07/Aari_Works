import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CategoryProducts = ({ addToCart }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (p) => p.category.toLowerCase() === category.toLowerCase()
        );

        setProducts(filtered);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, [category]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        {category.toUpperCase()} COLLECTION
      </h1>

      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img
              src={product.imageUrl || product.image}
              alt={product.name}
              style={styles.image}
            />

            <h3>{product.name}</h3>
            <p>₹ {product.price}</p>

            <button
              style={styles.button}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px"
  },

  heading: {
    textAlign: "center",
    marginBottom: "40px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
    gap: "30px"
  },

  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },

  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px"
  },

  button: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#ff4081",
    border: "none",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px"
  }
};

export default CategoryProducts;