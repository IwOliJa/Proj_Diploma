import styles from "./index.module.css";
import SaleTitle from "./saleTitle/index.jsx";
import ProdactCards from "../prodactCards";

function MainSale() {
  return (
    <div className={styles.main_container}>
      <SaleTitle />
      <ProdactCards />
    </div>
  );
}

export default MainSale;
