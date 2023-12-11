import styles from "./index.module.css";

function CategoriesTitle() {
  return (
    <div className={styles.title_content}>
      <h className={styles.categories_header}>Categories</h>
      <div className={styles.hr}></div>
      <button className={styles.categories_button}>All categories</button>
    </div>
  );
}

export default CategoriesTitle;
