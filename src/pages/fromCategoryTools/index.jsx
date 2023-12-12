import styles from "./index.module.css";
import ButtonNavMenu from "../../components/buttonNavMenu";
import CategoryBlockTools from "../../components/categoryBlockTools";
import { menulist3 } from "../../utils";

function FromCategoryTools() {
  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
        <span className={styles.hr}></span>
        <span className={styles.hr2}></span>
        {menulist3.map((item) => {
          return (
            <ButtonNavMenu key={item.id} {...item} length={menulist3.length} />
          );
        })}
      </div>
      <p className={styles.container_header}>Tools and equipment</p>
      <div className={styles.sorting_fields}>
        <p>Price</p>
        <input type="text" />
        <input type="text" />
        <p>Discounted items</p>
        <input type="text" />
        <p>Sorted</p>
        <input type="text" />
      </div>
      <CategoryBlockTools />
    </div>
  );
}
export default FromCategoryTools;
