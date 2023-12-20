import CategoriesCards from "../categoriesCards/index";
import styles from "./index.module.css";
import { useSelector } from "react-redux";

function CategoriesBlock() {
  const categoriesList = useSelector(
    (state) => state.categories.categoriesList
  );
  return (
    <div className={styles.categories_container}>
      {categoriesList.map((item) => {
        return <CategoriesCards key={item.id} {...item} />;
      })}
    </div>
  );
}

export default CategoriesBlock;
