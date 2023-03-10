import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import { useEffect, useState } from "react";
import axios from "axios";
import Cart from "./pages/Cart/Cart";
import About from "./pages/AboutUs/About";
import Contact from "./pages/Contact/Contact";

import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

const URL = "https://fakestoreapi.com/products";
const CATURL = "https://fakestoreapi.com/products/categories";

const fetchData = async (url) => {
  const data = await axios.get(url);
  return data.data;
};

function App() {
  const [products, setProducts] = useState([]);
  const [initialProducts, setInitialProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const productDataFunc = async () => {
      setLoading(true);
      const productData = await fetchData(URL);
      const categoryData = await fetchData(CATURL);
      setProducts(productData);
      setInitialProducts(productData);
      setCategory(categoryData);
      setLoading(false);
    };
    productDataFunc();
  }, []);

  return (
    <div>
      <Router>
        <Navbar cart={cart} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                products={products}
                setProducts={setProducts}
                category={category}
                loading={loading}
                setLoading={setLoading}
              />
            }
          />
          <Route
            path="/products"
            element={
              <Products
                initialProducts={initialProducts}
                products={products}
                setProducts={setProducts}
                category={category}
                loading={loading}
                setLoading={setLoading}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
