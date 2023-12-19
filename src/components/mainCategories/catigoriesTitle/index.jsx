import styles from "./index.module.css";
import { Link } from "react-router-dom";
function CategoriesTitle() {
  return (
    <div className={styles.title_content}>
      <p className={styles.categories_header}>Categories</p>
      <div className={styles.hr}></div>
      <Link to="/categories">
        <button className={styles.categories_button}>All categories</button>
      </Link>
    </div>
  );
}

export default CategoriesTitle;
