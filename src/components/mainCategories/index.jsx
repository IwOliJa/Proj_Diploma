import styles from "./index.module.css";
import CategoriesTitle from "./catigoriesTitle";
import CategoriesCards from "./categoriesCards";

function MainCategories() {
  return (
    <div className={styles.main_container}>
      <CategoriesTitle />
      <CategoriesCards />
    </div>
  );
}

export default MainCategories;
