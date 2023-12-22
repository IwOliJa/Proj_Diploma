import styles from "./index.module.css";
import ProductCards from "../productCards";

function FromCategoryBlock() {
  const render = [1, 2];
  return (
    <div className={styles.prodacts_container}>
      {render.map((el) => {
        return <ProductCards />;
      })}

      {/* <ProdactCards />
      <ProdactCards /> */}
    </div>
  );
}
export default FromCategoryBlock;
