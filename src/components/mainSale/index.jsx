import styles from "./index.module.css";
import SaleTitle from "./saleTitle/index.jsx";
import SaleButtons from "./saleButtons/index.jsx";

function MainSale() {
  return (
    <div className={styles.main_container}>
      <SaleTitle />
      <SaleButtons />
    </div>
  );
}

export default MainSale;
