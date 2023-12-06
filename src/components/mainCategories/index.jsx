import styles from "./index.module.css";
import CategoriesTitle from "./catigoriesTitle";
import CategoriesButtons from "./categoriesButtons";

function MainCategories() {
  return (
    <div className={styles.main_container}>
      <CategoriesTitle />
      <CategoriesButtons />
    </div>
  );
}

export default MainCategories;
