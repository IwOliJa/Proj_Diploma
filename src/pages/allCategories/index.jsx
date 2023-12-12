import CategoriesCards from "../../components/mainCategories/categoriesCards";
import CategoriesTitle from "../../components/mainCategories/catigoriesTitle";
import styles from "./index.module.css";

function AllCategories() {
  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
        <button className={styles.main_page_btn}>Main page</button>
        <span className={styles.hr}></span>
        <button className={styles.categories_btn}>Categories</button>
      </div>
      <CategoriesTitle />
      <CategoriesCards />
      <CategoriesCards />
    </div>
  );
}
export default AllCategories;
