import styles from "./index.module.css";
import ProductCards from "../productCards/index.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getDiscounts } from "../../store/slices/allDiscountsSlice.js";
import { useEffect } from "react";

function AllDiscountsBlock() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDiscounts());
  }, []);
  const { discountsList, status } = useSelector((state) => state.discounts);
  return (
    <div className={styles.prodacts_container}>
      {status === "fulfilled" &&
        discountsList.map((item) => {
          return <ProductCards key={item.id} {...item} />;
        })}
    </div>
  );
}

export default AllDiscountsBlock;
