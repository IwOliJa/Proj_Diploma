import styles from "./index.module.css";
import ProductCards from "../productCards/index.jsx";

function AllDiscountsBlock() {
  return (
    <div className={styles.prodacts_container}>
      <ProductCards />
      <ProductCards />
    </div>
  );
}

export default AllDiscountsBlock;
