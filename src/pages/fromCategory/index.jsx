import styles from "./index.module.css";
import ButtonNavMenu from "../../components/buttonsNavMenu";
import FromCategoryBlock from "../../components/fromCategoryBlock";
import { menulist3 } from "../../utils";
import SortingFields from "../../components/sortingFields";
import { useSelector, useDispatch } from "react-redux";
import { getCategorySpecific } from "../../store/slices/fromCategorySlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function FromCategory() {
  const { id } = useParams();
  const dispatch = useDispatch(id);
  useEffect(() => {
    dispatch(getCategorySpecific(id));
  }, []);
  const { categoryData, status } = useSelector((state) => state.category);
  console.log(menulist3);
  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
        <span className={styles.hr}></span>
        <span className={styles.hr2}></span>
        {menulist3.map((item) => {
          return (
            <ButtonNavMenu key={item.id} {...item} length={menulist3.length} />
          );
        })}
      </div>
      {status === "fulfilled" && (
        <h3 className={styles.container_header}>
          {categoryData.category.title}
        </h3>
      )}
      <SortingFields />
      <FromCategoryBlock />
    </div>
  );
}
export default FromCategory;
