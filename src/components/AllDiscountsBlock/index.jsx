import styles from "./index.module.css";
import ProdactCards from "../prodactCards";

function AllDiscountsBlock() {
  return (
    <div className={styles.prodacts_container}>
      <ProdactCards />
      <ProdactCards />
    </div>
  );
}

export default AllDiscountsBlock;
