import styles from "./index.module.css";
import ProductCards from "../productCards/index.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/slices/allProductsSlice.js";
import { useEffect } from "react";

function AllProductsBlock() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const { productsList, status } = useSelector((state) => state.products);
  console.log(productsList);
  return (
    <div className={styles.prodacts_container}>
      {status === "filfilled" &&
        productsList.map((item) => {
          console.log(productsList);
          return <ProductCards key={item.id} {...item} />;
        })}
    </div>
  );
}

export default AllProductsBlock;
