import "./App.css";
import Footer from "./components/footer/index.jsx";
import Header from "./components/header/index.jsx";
import CartEmpty from "./pages/cartEmpty/index.jsx";
import NotFoundPage from "./pages/notFound/index.jsx";
import CartShopping from "./pages/cartShopping/index.jsx";
import ProductInfo from "./pages/productInfo/index.jsx";
import AllDiscounts from "./pages/allDiscounts/index.jsx";
import AllProducts from "./pages/allProducts/index.jsx";
import FromCategory from "./pages/fromCategory/index.jsx";
import AllCategories from "./pages/allCategories/index.jsx";
import MainPage from "./pages/mainPage/index.jsx";
import { menulist } from "./utils/index.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header menulist={menulist} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/categories" element={<AllCategories />} />
        <Route path="/categories/tools" element={<FromCategory />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/sales" element={<AllDiscounts />} />
        <Route path="/products/:id" element={<ProductInfo />} />
        <Route path="/shoppings" element={<CartShopping />} />
        <Route path="/cart" element={<CartEmpty />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
