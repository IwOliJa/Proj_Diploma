import styles from "./index.module.css";
import ButtonNavMenu from "../../components/buttonsNavMenu";
import FromCategoryBlock from "../../components/fromCategoryBlock";
import SortingFields from "../../components/sortingFields";
import { useSelector, useDispatch } from "react-redux";
import { getCategorySpecific } from "../../store/slices/fromCategorySlice";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

function FromCategory() {
  const { id } = useParams();
  const dispatch = useDispatch(id);
  useEffect(() => {
    dispatch(getCategorySpecific(id));
  }, []);
  const { categoryData, status } = useSelector((state) => state.category);

  const navigation = useMemo(() => {
    return [
      { id: 1, item: "Main Page" },
      { id: 2, item: "Categories" },
      { id: 3, item: categoryData.category?.title },
    ];
  }, [categoryData]);

  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
        {navigation.map((item) => {
          return (
            <ButtonNavMenu key={item.id} {...item} length={navigation.length} />
          );
        })}
      </div>
      {status === "fulfilled" && (
        <h3 className={styles.container_header}>
          {categoryData.category.title}
        </h3>
      )}
      {/* <SortingFields /> */}
      <FromCategoryBlock />
    </div>
  );
}
export default FromCategory;
