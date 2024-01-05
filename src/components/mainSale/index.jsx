import styles from "./index.module.css";
import SaleTitle from "./saleTitle/index.jsx";
import ProductCards from "../productCards";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/slices/allProductsSlice.js";

import { useEffect } from "react";

function MainSale() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { productsList, status } = useSelector((state) => state.products);

  return (
    <div className={styles.main_container}>
      <SaleTitle />
      <div className={styles.categories_container}>
        {status === "fulfilled" &&
          productsList

            .filter((el) => el.discont_price !== null)
            .slice(0, 4)
            .map((item, ind) => {
              return <ProductCards key={item.id} {...item} />;
            })}
      </div>
    </div>
  );
}

export default MainSale;
