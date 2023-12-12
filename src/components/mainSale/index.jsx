import styles from "./index.module.css";
import SaleTitle from "./saleTitle/index.jsx";
import SaleCards from "./saleCards/index.jsx";

function MainSale() {
  return (
    <div className={styles.main_container}>
      <SaleTitle />
      <SaleCards />
    </div>
  );
}

export default MainSale;
