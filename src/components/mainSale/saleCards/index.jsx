import styles from "./index.module.css";
import saleImg1 from "../../../assets/images/saleImg1.svg";
import saleImg2 from "../../../assets/images/saleImg2.svg";
import saleImg3 from "../../../assets/images/saleImg3.svg";
import saleImg4 from "../../../assets/images/saleImg4.svg";

function SaleCards() {
  return (
    <div className={styles.sale_wrapper}>
      <div className={styles.button_wrapper}>
        <button className={styles.image_button}>
          <img src={saleImg1} alt="Deco brige" />
        </button>
        <p className={styles.card_name}>Decorative forged bridge</p>
        <span className={styles.discount}>$500</span>
        <span className={styles.discount_item}>
          $1000 <span className={styles.delete_symbol}></span>
        </span>
      </div>
      <div className={styles.button_wrapper}>
        <button className={styles.image_button}>
          <img src={saleImg2} alt="Flower basket" />
        </button>
        <p className={styles.card_name}>Flower basket</p>
        <span className={styles.discount}>$100</span>
        <span className={styles.discount_item}>
          $150<span className={styles.delete_symbol}></span>
        </span>
      </div>
      <div className={styles.button_wrapper}>
        <button className={styles.image_button}>
          <img src={saleImg3} alt="Aquariun lock" />
        </button>
        <p className={styles.card_name}>Aquarium lock</p>
        <span className={styles.discount}>$150</span>
        <span className={styles.discount_item}>
          $200<span className={styles.delete_symbol}></span>
        </span>
      </div>
      <div className={styles.button_wrapper}>
        <button className={styles.image_button}>
          <img src={saleImg4} alt="Secateurs" />
        </button>
        <p className={styles.card_name}>Secateurs</p>
        <span className={styles.discount}>$199</span>
        <span className={styles.discount_item}>
          $240<span className={styles.delete_symbol}></span>
        </span>
      </div>
    </div>
  );
}

export default SaleCards;
