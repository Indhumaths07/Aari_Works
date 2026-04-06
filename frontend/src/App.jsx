import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import CategoryProducts from "./pages/CategoryProducts";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Admin from "./pages/Admin";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("isAuth") === "true"
  );

  // Load cart from localStorage only once
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert(`${product.name} added to cart!`);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      {isAuth && (
        <Navbar
          setIsAuth={setIsAuth}
          cartCount={cart.reduce((total, item) => total + (item.quantity || 0), 0)}
        />
      )}

      <Routes>
        {/* LOGIN */}
        <Route
          path="/login"
          element={
            isAuth ? <Navigate to="/" /> : <Login setIsAuth={setIsAuth} />
          }
        />

        {/* HOME */}
        <Route
          path="/"
          element={isAuth ? <Home /> : <Navigate to="/login" />}
        />

        {/* CHECKOUT */}
        <Route
          path="/checkout"
          element={
            isAuth ? (
              <Checkout cartItems={cart} clearCart={clearCart} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* COLLECTIONS */}
        <Route
          path="/collections"
          element={
            isAuth ? (
              <Collections addToCart={addToCart} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* CATEGORY PRODUCTS */}
        <Route
          path="/collections/:category"
          element={
            isAuth ? (
              <CategoryProducts addToCart={addToCart} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            isAuth ? (
              <Cart
                cartItems={cart}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* ORDERS */}
        <Route
          path="/orders"
          element={isAuth ? <Orders /> : <Navigate to="/login" />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={isAuth ? <About /> : <Navigate to="/login" />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={isAuth ? <Contact /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;