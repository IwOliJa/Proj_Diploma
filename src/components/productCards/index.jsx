import { useState } from "react";
import styles from "./index.module.css";

function ProductCards({ id, image, title, price, discont_price }) {
  let currentPrice = { discont_price };
  return (
    <div className={styles.card_wrapper}>
      <div
        className={styles.image}
        key={id}
        style={{
          backgroundImage: `url(http://localhost:3333${image})`,
          backgroundSize: "cover",
        }}
      ></div>
      <p className={styles.card_name}>{title}</p>
      <span className={styles.product_price}>${discont_price}</span>
      <span className={styles.discount_item}>
        ${price}
        <span className={styles.delete_symbol}></span>
      </span>
    </div>
  );
}

export default ProductCards;
