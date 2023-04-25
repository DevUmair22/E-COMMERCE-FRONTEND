import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login " element={user ? <redirect to="/" /> : <Login />} />
        <Route path="/register" element={user ? <redirect to="/" /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
