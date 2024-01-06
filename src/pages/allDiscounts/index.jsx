import { menulist5 } from "../../utils";

import AllDiscountsBlock from "../../components/allDiscountsBlock/index.jsx";
import ButtonNavMenu from "../../components/buttonsNavMenu/index.jsx";
import AllDiscountsSorting from "./allDiscountsSorting/index.jsx";

import styles from "./index.module.css";

function AllDiscounts() {
  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
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
