import "./App.css";
import Footer from "./components/footer/index.jsx";
import Header from "./components/header/index.jsx";
import FromCategoryTools from "./pages/fromCategoryTools/index.jsx";
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
      <FromCategoryTools />
      <Footer />
    </div>
  );
}

export default App;
