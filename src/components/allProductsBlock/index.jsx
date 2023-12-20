import styles from "./index.module.css";
import ProdactCards from "../prodactCards";

function AllProductsBlock() {
  return (
    <div className={styles.prodacts_container}>
      <ProdactCards />
      <ProdactCards />
      <ProdactCards />
    </div>
  );
}

export default AllProductsBlock;
