import { Routes, Route } from "react-router-dom";

import { menulist } from "./utils/index.js";
import ScrollToTop from "./utils/index.js";

import NotFoundPage from "./pages/notFound/index.jsx";
import CartShopping from "./pages/cartShopping/index.jsx";
import ProductInfo from "./pages/productInfo/index.jsx";
import AllDiscounts from "./pages/allDiscounts/index.jsx";
import AllProducts from "./pages/allProducts/index.jsx";
import FromCategory from "./pages/fromCategory/index.jsx";
import AllCategories from "./pages/allCategories/index.jsx";
import MainPage from "./pages/mainPage/index.jsx";

import ModaleWindow from "./components/modaleWindow/index.jsx";
import Footer from "./components/footer/index.jsx";
import Header from "./components/header/index.jsx";

import "./App.css";

function App () {
  return (
    <div className="App">
      <ModaleWindow />
      <Header menulist={menulist} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/categories" element={<AllCategories />} />
        <Route path="/categories/:id" element={<FromCategory />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<ProductInfo />} />
        <Route path="/sales" element={<AllDiscounts />} />
        <Route path="/shoppings" element={<CartShopping />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
