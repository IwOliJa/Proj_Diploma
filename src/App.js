import "./App.css";
import Footer from "./components/footer/index.jsx";
import Header from "./components/header/index.jsx";
import CartEmpty from "./pages/cartEmpty/index.jsx";
// import NotFoundPage from "./pages/notFound/index.jsx";
// import CartShopping from "./pages/cartShopping/index.jsx";
// import ProductInfo from "./pages/productInfo/index.jsx";
// import AllDiscounts from "./pages/allDiscounts/index.jsx";
// import AllProducts from "./pages/allProducts/index.jsx";
// import FromCategoryTools from "./pages/fromCategoryTools/index.jsx";
// import AllCategories from "./pages/allCategories/index.jsx";
// import MainPage from "./pages/mainPage/index.jsx";
import { menulist } from "./utils/index.js";
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   fetch("http://localhost:3333/products/all");
  // }, []);
  return (
    <div className="App">
      <Header menulist={menulist} />
      {/* <MainPage /> */}
      {/* <AllCategories /> */}
      {/* <FromCategoryTools /> */}
      {/* <AllProducts /> */}
      {/* <AllDiscounts /> */}
      {/* <ProductInfo /> */}
      {/* <CartShopping /> */}
      {/* <NotFoundPage /> */}
      <CartEmpty />
      <Footer />
    </div>
  );
}

export default App;
