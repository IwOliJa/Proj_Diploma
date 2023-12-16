import styles from "./index.module.css";
import ProdactCards from "../prodactCards";

function AllDiscountsBlock() {
  const render = [1, 2];
  return (
    <div className={styles.prodacts_container}>
      {render.map((el) => {
        return <ProdactCards />;
      })}
      {/* <ProdactCards /> */}
    </div>
  );
}

export default AllDiscountsBlock;
