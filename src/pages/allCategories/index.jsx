import ButtonNavMenu from "../../components/buttonsNavMenu";
import CategoriesBlock from "../../components/allCategoriesBlock/index.jsx";
import styles from "./index.module.css";
import { menulist2 } from "../../utils/index.js";
import { getCategories } from "../../store/slices/categoriesSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function AllCategories() {
  const dispatch = useDispatch;
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
        <span className={styles.hr}></span>
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
