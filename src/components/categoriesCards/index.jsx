import styles from "./index.module.css";
import imgCategory1 from "../../assets/images/category1.svg";
import imgCategory2 from "../../assets/images/category2.svg";
import imgCategory3 from "../../assets/images/category3.svg";
import imgCategory4 from "../../assets/images/category4.svg";

function CategoriesCards() {
  return (
    <div className={styles.categories_wrapper}>
      <div className={styles.card_wrapper}>
        <button className={styles.image}>
          <img src={imgCategory1} alt="Fertilizer" />
        </button>
        <p className={styles.card_name}>Fertilizer</p>
      </div>
      <div className={styles.card_wrapper}>
        <button className={styles.image}>
          <img src={imgCategory2} alt="Protective products" />
        </button>
        <p className={styles.card_name}>Protective products and septic tanks</p>
      </div>
      <div className={styles.card_wrapper}>
        <button className={styles.image}>
          <img src={imgCategory3} alt="Planting material" />
        </button>
        <p className={styles.card_name}>Planting material</p>
      </div>
      <div className={styles.card_wrapper}>
        <button className={styles.image}>
          <img src={imgCategory4} alt="Tools and equipment" />
        </button>
        <p className={styles.card_name}>Tools and equipment</p>
      </div>
    </div>
  );
}

export default CategoriesCards;
