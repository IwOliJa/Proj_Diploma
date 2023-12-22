import styles from "./index.module.css";
import CategoriesCards from "../categoriesCards/index";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../store/slices/categoriesSlice";
import { useEffect } from "react";

function CategoriesBlock() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const { categoriesList, status } = useSelector((state) => state.categories);
  return (
    <div className={styles.categories_container}>
      {status === "fulfilled" &&
        categoriesList.map((item) => {
          return <CategoriesCards key={item.id} {...item} />;
        })}
    </div>
  );
}

export default CategoriesBlock;
