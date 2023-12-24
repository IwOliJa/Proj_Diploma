import styles from "./index.module.css";
import ProductCards from "../productCards/index.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getCategorySpecific } from "../../store/slices/fromCategorySlice";
import { useEffect } from "react";

function FromCategoryBlock() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategorySpecific());
  }, []);
  const { categoryData, status } = useSelector((state) => state.category);
  console.log(categoryData);
  return (
    <div className={styles.prodacts_container}>
      <div className={styles.products_container}>
        {status === "fulfilled" &&
          categoryData.map((item) => <ProductCards key={item.id} {...item} />)}
      </div>
    </div>
  );
}
export default FromCategoryBlock;
