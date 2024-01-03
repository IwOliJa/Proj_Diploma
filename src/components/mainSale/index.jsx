import styles from "./index.module.css";
import SaleTitle from "./saleTitle/index.jsx";
import ProductCards from "../productCards";
import { useSelector, useDispatch } from "react-redux";
import { getDiscounts } from "../../store/slices/allDiscountsSlice.js";
import { useEffect } from "react";

function MainSale() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDiscounts());
  }, []);
  const { discountsList, status } = useSelector((state) => state.discounts);
  return (
    <div className={styles.main_container}>
      <SaleTitle />
      <div className={styles.categories_container}>
        {status === "fulfilled" &&
          discountsList.slice(0, 4).map((item, ind) => {
            return <ProductCards key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
}

export default MainSale;
