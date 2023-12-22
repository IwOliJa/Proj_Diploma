import styles from "./index.module.css";

function ProductCards({ image, title, price, discount_price }) {
  console.log(image);
  return (
    <div className={styles.prodact_wrapper}>
      <div className={styles.card_wrapper}>
        <div className={styles.image}>
          <img src={"http//localhost:3333" + image} alt={title} />
        </div>
        <p className={styles.card_name}>{title}</p>
        <span className={styles.product_price}>{discount_price}</span>
        <span className={styles.discount_item}>
          {price}
          <span className={styles.delete_symbol}></span>
        </span>
      </div>
    </div>
  );
}

export default ProductCards;
