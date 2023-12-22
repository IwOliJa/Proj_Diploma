import styles from "./index.module.css";
import ProductCards from "../productCards/index.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../store/slices/allProductsSlice";
import { useEffect } from "react";

function AllProductsBlock() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const { status, productsList } = useSelector((state) => state.products);

  return (
    <div className={styles.prodacts_container}>
      {status === "filfilled" &&
        productsList.map((item) => {
          return <ProductCards key={item.id} {...item} />;
        })}
    </div>
  );
}

export default AllProductsBlock;
