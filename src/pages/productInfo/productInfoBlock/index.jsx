import styles from "./index.module.css";
import Secateurs from "../../../assets/images/photo1_4.svg";
import Secateurs1 from "../../../assets/images/photo1_1.svg";
import Secateurs2 from "../../../assets/images/photo1_2.svg";
import Secateurs3 from "../../../assets/images/photo1_3.svg";

function ProducktInfoBlock() {
  return (
    <div className={styles.content_wrapper}>
      <div className={styles.images_content}>
        <div className={styles.content_small}>
          <div className={styles.small_card}>
            <img src={Secateurs1} alt="secateurs" />
          </div>
          <div className={styles.small_card}>
            <img src={Secateurs2} alt="secateurs" />
          </div>
          <div className={styles.small_card}>
            <img src={Secateurs3} alt="secateurs" />
          </div>
        </div>
        <div className={styles.big_card}>
          <img src={Secateurs} alt="secateurs" />
        </div>
      </div>
      <div className={styles.info_content}>
        <p className={styles.product_name}>Secateurs</p>
        <span className={styles.product_price}>$199</span>
        <span className={styles.discount_item}>
          $240 <span className={styles.delete_symbol}></span>
        </span>
        <div className={styles.counting_filds}>
          <button className={styles.count_button}>-</button>
          <div className={styles.count_data}>0</div>
          <button className={styles.count_button}>+</button>
          <button className={styles.adding_button}>Add to cart</button>
        </div>
        <div className={styles.description}>
          <p className={styles.heading}>Description</p>
          <p className={styles.text}>
            This high quality everyday secateur features a fully hardened and
            tempered, high-carbon steel blade for lasting sharpness. For
            comfort, the robust but lightweight alloy handles are covered in a
            soft grip, in a bright terracotta colour for maximum visibility in
            the garden. It won’t be easy to leave this pruner behind at the end
            of the day! Rubber cushion stops prevent jarring over repeated use,
            reducing hand strain for the user. <br />
            <br /> This secateur cuts up to 2.5 cm diameter. Carrying RHS
            endorsement, possibly the highest accolade in gardening, for peace
            of mind this pruner comes with a ten-year guarantee against
            manufacturing defects. Supplied with replacement blade and spare
            spring. You may also be interested in our pack of two replacement
            springs.
          </p>
          <p className={styles.link}>Read more</p>
        </div>
      </div>
    </div>
  );
}

export default ProducktInfoBlock;
