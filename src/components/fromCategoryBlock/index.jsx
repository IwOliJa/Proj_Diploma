import styles from "./index.module.css";
import ProductCards from "../productCards/index.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getCategorySpecific } from "../../store/slices/fromCategorySlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function FromCategoryBlock() {
  const { id } = useParams();
  const dispatch = useDispatch(id);
  useEffect(() => {
    dispatch(getCategorySpecific(id));
  }, []);
  const { categoryData, status } = useSelector((state) => state.category);
  return (
    <div className={styles.products_container}>
      {status === "fulfilled" &&
        categoryData.data.map((item) => (
          <ProductCards key={item.id} {...item} />
        ))}
    </div>
  );
}
export default FromCategoryBlock;
