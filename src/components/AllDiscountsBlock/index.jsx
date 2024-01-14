import styles from "./index.module.css";
import ProductCards from "../productCards/index.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/slices/allProductsSlice.js";
import { useEffect } from "react";

function AllDiscountsBlock() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { productsList, status } = useSelector((state) => state.products);
  console.log(productsList);
  return (
    <div className={styles.products_container}>
      {status === "fulfilled" &&
        productsList
          .filter((el) => el.discont_price !== null)
          .map((item) => <ProductCards key={item.id} {...item} />)}
    </div>
  );
}

export default AllDiscountsBlock;
