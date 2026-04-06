import React, { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    category: "",
  });

  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await axios.put(`http://localhost:8080/api/products/${editId}`, product);
        alert("Product updated successfully!");
        setEditId(null);
      } else {
        await axios.post("http://localhost:8080/api/products", product);
        alert("Product added successfully!");
      }

      setProduct({
        name: "",
        description: "",
        price: "",
        imageUrl: "",
        category: "",
      });

      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error.response?.data || error.message);
      alert("Failed to save product");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      alert("Product deleted successfully!");
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error.response?.data || error.message);
      alert("Failed to delete product");
    }
  };

  const handleEdit = (item) => {
    setProduct({
      name: item.name,
      description: item.description,
      price: item.price,
      imageUrl: item.imageUrl,
      category: item.category,
    });
    setEditId(item.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setProduct({
      name: "",
      description: "",
      price: "",
      imageUrl: "",
      category: "",
    });
    setEditId(null);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h2>{editId ? "Admin - Edit Product" : "Admin - Add Product"}</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "40px" }}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={product.imageUrl}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#8B0000",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: editId ? "10px" : "0",
          }}
        >
          {editId ? "Update Product" : "Add Product"}
        </button>

        {editId && (
          <button
            type="button"
            onClick={handleCancelEdit}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "gray",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Cancel Edit
          </button>
        )}
      </form>

      <h2>All Products</h2>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "20px",
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Price:</strong> ₹ {item.price}</p>

            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button
                onClick={() => handleEdit(item)}
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#1E90FF",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(item.id)}
                style={{
                  padding: "10px 15px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin;