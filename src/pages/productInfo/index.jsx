import styles from "./index.module.css";
import ButtonNavMenu from "../../components/buttonsNavMenu";
import { menulist6 } from "../../utils";
import ProducktInfoBlock from "./productInfoBlock";

function ProductInfo() {
  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
        <span className={styles.hr}></span>
        <span className={styles.hr2}></span>
        <span className={styles.hr3}></span>
        {menulist6.map((item) => {
          return (
            <ButtonNavMenu key={item.id} {...item} length={menulist6.length} />
          );
        })}
      </div>
      <ProducktInfoBlock />
    </div>
  );
}

export default ProductInfo;
