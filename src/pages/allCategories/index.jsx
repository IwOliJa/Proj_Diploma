import ButtonNavMenu from "../../components/buttonsNavMenu";
import CategoriesBlock from "../../components/allCategoriesBlock/index.jsx";
import { menulist2 } from "../../utils/index.js";
import { Link } from "react-router-dom";

import styles from "./index.module.css";

function AllCategories () {
  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
        {menulist2.map( ( item ) => {
          return (
            <Link key={item.id} to={item.path}>
              <ButtonNavMenu {...item} length={menulist2.length} />
            </Link>
          );
        } )}
      </div>
      <p className={styles.categories_header}>Categories</p>
      <CategoriesBlock />
    </div>
  );
}

export default AllCategories;
