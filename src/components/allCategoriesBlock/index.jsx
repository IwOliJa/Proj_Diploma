import CategoriesCards from "../categoriesCards/index";
import styles from "./index.module.css";

function CategoriesBlock() {
  const render = [1, 2];
  return (
    <div className={styles.categories_container}>
      {render.map((el) => {
        return <CategoriesCards />;
      })}
      {/* <CategoriesCards />
      <CategoriesCards /> */}
    </div>
  );
}

export default CategoriesBlock;
