import styles from "./index.module.css";
import CategoriesTitle from "./catigoriesTitle";
import CategoriesCards from "../categoriesCards/index";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../store/slices/categoriesSlice";
import { useEffect } from "react";

function MainCategories() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const { categoriesList, status } = useSelector((state) => state.categories);
  return (
    <div className={styles.main_container}>
      <CategoriesTitle />
      <div className={styles.categories_container}>
        {status === "fulfilled" &&
          categoriesList.slice(0, 4).map((item) => {
            return <CategoriesCards key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
}

export default MainCategories;
