import ButtonNavMenu from "../../components/buttonsNavMenu";
import CategoriesBlock from "../../components/allCategoriesBlock/index.jsx";
import styles from "./index.module.css";
import { menulist2 } from "../../utils/index.js";

function AllCategories() {
  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
        {menulist2.map((item) => {
          return (
            <ButtonNavMenu key={item.id} {...item} length={menulist2.length} />
          );
        })}
      </div>
      <p className={styles.categories_header}>Categories</p>
      <CategoriesBlock />
    </div>
  );
}
export default AllCategories;
