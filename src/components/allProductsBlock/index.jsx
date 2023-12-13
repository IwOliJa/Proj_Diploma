import styles from "./index.module.css";
import ProdactCards from "../prodactCards";

function AllProductsBlock() {
  const render = [1, 2, 3];
  return (
    <div className={styles.prodacts_container}>
      {render.map((el) => {
        return <ProdactCards />;
      })}
    </div>
  );
}

export default AllProductsBlock;
