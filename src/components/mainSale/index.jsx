import styles from "./index.module.css";
import SaleTitle from "./saleTitle/index.jsx";
import ProductCards from "../productCards";

function MainSale() {
  return (
    <div className={styles.main_container}>
      <SaleTitle />
      <ProductCards />
    </div>
  );
}

export default MainSale;
