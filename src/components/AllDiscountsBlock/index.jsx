import styles from "./index.module.css";
import ProductCards from "../productCards/index.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getDiscounts } from "../../store/slices/allDiscountsSlice.js";
// import { getProducts } from "../../store/slices/allProductsSlice.js";
import { useEffect } from "react";

function AllDiscountsBlock() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDiscounts());
    // dispatch(getProducts());
  }, []);
  const { discountsList, status } = useSelector((state) => state.discounts);
  // const { productsList, status } = useSelector((state) => state.products);
  return (
    <div className={styles.products_container}>
      {status === "fulfilled" &&
        // productsList
        discountsList
          // .filter((el) => el.discont_price !== null)
          .map((item) => <ProductCards key={item.id} {...item} />)}
    </div>
  );
}

export default AllDiscountsBlock;
