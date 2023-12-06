import "./App.css";
import Footer from "./components/footer/index.jsx";
import Header from "./components/header";
import MainPage from "./pages/main";
import { menulist } from "./utils/index.js";
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   fetch("http://localhost:3333/products/all");
  // }, []);
  return (
    <div className="App">
      <Header menulist={menulist} />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
