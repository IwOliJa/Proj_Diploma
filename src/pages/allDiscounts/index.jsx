import styles from "./index.module.css";
import AllDiscountsBlock from "../../components/allDiscountsBlock/index.jsx";
import ButtonNavMenu from "../../components/buttonsNavMenu/index.jsx";
import { menulist5 } from "../../utils";
import AllDiscountsSorting from "./allDiscountsSorting/AllDiscountsSorting.jsx";

function AllDiscounts() {
  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
        {/* <span className={styles.hr}></span> */}
        {menulist5.map((item) => {
          return (
            <ButtonNavMenu key={item.id} {...item} length={menulist5.length} />
          );
        })}
      </div>
      <p className={styles.container_header}>Discounted items</p>
      <AllDiscountsSorting />
      <AllDiscountsBlock />
    </div>
  );
}

export default AllDiscounts;
