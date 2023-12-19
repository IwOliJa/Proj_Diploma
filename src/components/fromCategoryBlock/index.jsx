import styles from "./index.module.css";
import ProdactCards from "../prodactCards";

function FromCategoryBlock() {
  const render = [1, 2];
  return (
    <div className={styles.prodacts_container}>
      {render.map((el) => {
        return <ProdactCards />;
      })}

      {/* <ProdactCards />
      <ProdactCards /> */}
    </div>
  );
}
export default FromCategoryBlock;
